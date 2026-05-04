---
title: Business Intelligence
course: DBMS110
---

~.toc

- [Business Intelligence](#business-intelligence)

/~

# Business Intelligence & Data Warehousing

## Core Throughline

> Every concept in BI exists because OLTP made a deliberate tradeoff optimized
> for writes and concurrency — and analytics needs the **opposite tradeoff** at
> every level: storage, modeling, querying, and presentation.

---

## 1. The Problem: Why OLTP Fails for Decision Support

**Start here — no new vocabulary needed. Build on what students already know.**

OLTP is optimized for:

- Fast, concurrent, transactional **writes**
- Normalized schema to eliminate redundancy
- Current state only

### The Three Failure Modes for Analytics

| Failure Mode       | OLTP Behavior              | Why It Breaks Analytics                                 |
| ------------------ | -------------------------- | ------------------------------------------------------- |
| **Time span**      | Holds current state only   | Can't query "sales trends over 5 years"                 |
| **Granularity**    | Every row is a transaction | Aggregating millions of rows for a summary is expensive |
| **Dimensionality** | Normalized → many joins    | A simple business question requires a complex query     |

### Worked Example

> _"How did Product X perform by region last quarter, compared to the same
> quarter last year?"_

Walk through how many joins this requires on a normalized OLTP schema.
This motivates everything that follows.

---

## 2. The Architectural Response: Data Warehouse

**Reframe every characteristic as a deliberate inversion of OLTP.**

| OLTP                   | Data Warehouse             |
| ---------------------- | -------------------------- |
| Write-optimized        | Read-optimized             |
| Current state          | Time-variant (historical)  |
| Normalized (3NF)       | Intentionally denormalized |
| Volatile — rows update | Nonvolatile — append only  |
| Application-oriented   | Subject-oriented           |
| Row-level transactions | Bulk analytical queries    |

### Key Concepts

- **ETL (Extract, Transform, Load):** The bridge between operational and
  analytical systems. Operational data must be extracted, cleaned, and reshaped
  before it is analytically useful.

  - Common ETL failure points: dirty data, naming conflicts, unit mismatches,
    inconsistent encoding of the same entity across source systems.

- **Data Mart:** A scoped, single-subject warehouse subset. Same principles as
  a warehouse, narrower domain. Useful when a department needs independent
  decision support without full enterprise warehouse access.

- **VLDB Considerations:** At analytical scale, performance techniques become
  necessary:
  - **Partitioning** — divide large tables by range or list (e.g., by year)
  - **Replication** — duplicate data to distribute read load
  - **Materialized views** — precomputed query results stored as tables

---

## 3. The Modeling Response: Deliberate Denormalization

**Directly confronts what students know about normalization.**

> In OLTP, denormalization is a **mistake**.
> In a data warehouse, it is a **design goal**.

Why: joins are expensive at analytical scale. Read performance trumps write
efficiency. The schema is designed around how analysts query, not how
applications write.

### Facts and Dimensions

The mental model shift: from rows-and-transactions to **facts and dimensions**.

- **Facts:** Numeric measurements — the things you measure.

  - Examples: sales amount, units sold, call duration, page views
  - Stored in a **fact table**; typically has many rows, few columns

- **Dimensions:** Categorical context — the things you analyze by.
  - Examples: time, product, region, customer, sales rep
  - Stored in **dimension tables**; fewer rows, many descriptive columns

### Attribute Hierarchies

Dimensions can be organized into hierarchies for navigation:

```
Time:     Year → Quarter → Month → Day
Geography: Country → Region → State → Store
Product:  Category → Subcategory → SKU
```

This is **not** a normalization violation in a warehouse context — it is a
navigation structure that enables:

- **Roll-up:** Aggregate from detail to summary (daily → monthly)
- **Drill-down:** Disaggregate from summary to detail (annual → quarterly)

### The Data Cube

The conceptual model for multidimensional analysis. Instead of thinking in
tables, think in **axes of analysis**.

- A three-dimensional cube: Product × Region × Time
- Each cell holds an aggregated fact value (e.g., total sales)
- **Slice:** Fix one dimension to isolate a 2D subset (e.g., Q3 only)
- **Dice:** Filter multiple dimensions simultaneously

### Sparsity

Most cells in a real-world cube are empty — not every product sells in every
region in every time period. Storage and query architecture must account for
this.

---

## 4. The Query Response: OLAP and SQL Extensions

**Ground the abstract in syntax students can actually write.**

### OLTP vs. OLAP Query Patterns

|                | OLTP                         | OLAP                        |
| -------------- | ---------------------------- | --------------------------- |
| Access pattern | Point lookups by primary key | Full or partial table scans |
| Operation      | Insert / Update / Delete     | Aggregate / Group / Compare |
| Rows touched   | A few                        | Millions                    |
| Joins          | Many (normalized)            | Few (denormalized) or none  |

### SQL Had to Evolve

Standard SQL was not designed for OLAP-type queries. Extensions added:

- **Window functions:** `OVER()`, `PARTITION BY`, `ORDER BY` within window
  - `RANK()`, `DENSE_RANK()`, `ROW_NUMBER()`
  - Running totals, moving averages
- **`ROLLUP`:** Hierarchical subtotals along one dimension
- **`CUBE`:** All possible aggregation combinations across dimensions
- **Materialized views:** Precomputed aggregations stored as queryable tables

### ROLAP vs. MOLAP

|             | ROLAP                           | MOLAP                            |
| ----------- | ------------------------------- | -------------------------------- |
| Storage     | Relational database             | Native multidimensional (MDBMS)  |
| Scalability | High — leverages existing RDBMS | Limited by cube size             |
| Query speed | Slower for dense cubes          | Faster for dense cubes           |
| Flexibility | High                            | Lower                            |
| Best for    | Sparse data, large volumes      | Dense cubes, fast query response |

**Decision basis:** Data volume, query frequency, sparsity, existing
infrastructure investment.

---

## 5. The Analytics Layer: From Reporting to Prediction

**The warehouse is infrastructure. This layer produces knowledge.**

### Explanatory Analytics

- Describes **what happened**
- Tools: dashboards, KPIs, metrics, reports
- The data warehouse is the source
- Goal: reduce the time between a business question and a reliable answer

### Predictive Analytics

- Models **what will happen**
- Requires historical depth — impossible without a warehouse or equivalent
- Characteristics: statistical models, machine learning, scored outputs
- **Big Data impact:** Volume changes what models are trainable and at what cost

### Data Mining

Automated discovery of previously unknown patterns in data. Contrast with
predictive analytics:

|          | Data Mining                   | Predictive Analytics           |
| -------- | ----------------------------- | ------------------------------ |
| Approach | Exploratory, automated        | Hypothesis-driven, model-based |
| Goal     | Find unknown patterns         | Forecast known outcomes        |
| Output   | Rules, clusters, associations | Scored predictions             |

#### The Four Phases of Data Mining

1. **Data preparation** — cleaning, transforming, sampling
2. **Data analysis and classification** — pattern detection, algorithm selection
3. **Knowledge acquisition** — extracting rules, clusters, associations
4. **Prognosis** — applying findings to new or future data

#### Example Use Cases

- Customer churn prediction
- Market basket analysis (association rules)
- Credit risk scoring
- Anomaly / fraud detection

---

## 6. The Presentation Layer: Data Visualization

**Close with the human-facing output. All of the above is infrastructure.**

### Why Tables Fail at Scale

Tables fail analytically for the same reason OLTP fails for decision support:
humans are not optimized to extract patterns from rows of numbers. Visualization
reduces cognitive load and enables pattern recognition.

> Data visualization is useful at **any** data scale — not only with Big Data.
> Even small datasets benefit from the right visual representation.

### Data Visualization as a Discipline

Three intersecting fields:

1. **Graphic design** — composition, hierarchy, layout
2. **Statistics** — what to show and why
3. **Perceptual psychology** — how humans actually read visual information

### Five Graphical Characteristics Used to Highlight Data

1. Position
2. Size
3. Shape
4. Color
5. Texture

### Matching Visualization Type to Data and Question

| Data Type / Question        | Visualization                          |
| --------------------------- | -------------------------------------- |
| Categorical comparison      | Bar chart, treemap                     |
| Change over time            | Line chart                             |
| Distribution                | Histogram, box plot                    |
| Relationships / correlation | Scatter plot                           |
| Geographic patterns         | Choropleth map                         |
| Part-to-whole               | Pie chart (use sparingly), stacked bar |
| Network relationships       | Network / graph diagram                |

### The Delivery Layer

- **Dashboard:** Consolidated view of KPIs and metrics for a role or decision
- **Portal:** Broader BI delivery mechanism; may aggregate multiple dashboards
- **Governance:** Who controls what gets displayed, to whom, and how

---

## 7. The Modern Extension: Data Lake

**Reframes the warehouse in a contemporary context.**

|                   | Data Warehouse              | Data Lake                                 |
| ----------------- | --------------------------- | ----------------------------------------- |
| Schema            | Schema-on-write             | Schema-on-read                            |
| Data types        | Structured only             | Structured, semi-structured, unstructured |
| Processing        | ETL (transform before load) | ELT (transform after load, if at all)     |
| Query reliability | High — enforced structure   | Variable — depends on governance          |
| Best for          | Known analytical queries    | Exploratory analysis, ML, raw storage     |

### The Failure Mode

Without governance, a data lake becomes a **data swamp** — data is stored but
not findable, trustable, or usable.

### Governance and MDM

- **Master Data Management (MDM):** Ensures consistent definitions of key
  entities (customer, product, location) across systems
- **Governance:** Policies for data quality, access, lineage, and stewardship
- Both are required for either a warehouse or a lake to deliver reliable
  analytical value

---

## Key Terms Reference

| Term                                            | Section |
| ----------------------------------------------- | ------- |
| ETL (Extract, Transform, Load)                  | 2       |
| Data mart                                       | 2       |
| Partitioning, replication, materialized view    | 2       |
| Facts, dimensions, fact table, dimension tables | 3       |
| Attribute hierarchy, roll-up, drill-down        | 3       |
| Data cube, slice, dice, sparsity                | 3       |
| OLAP, ROLAP, MOLAP, MDBMS                       | 4       |
| Window functions, ROLLUP, CUBE                  | 4       |
| Explanatory analytics, predictive analytics     | 5       |
| Data mining, KPI, dashboard                     | 5–6     |
| Data visualization, governance                  | 6       |
| Data lake, MDM, schema-on-read                  | 7       |
