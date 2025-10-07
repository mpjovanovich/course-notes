---
title: NoSQL Databases
course: DBMS110
---

~.toc

- [NoSQL Databases](#nosql-databases)
  - [Why Relational Databases?](#why-relational-databases)
  - [Why NoSQL?](#why-nosql)

/~

# NoSQL Databases

**NoSQL** database is a term that generally refers to a database that is not the traditional relational model. It does not mean that SQL is not used. You may hear it referred to as "not only SQL".

We will look at four types of NoSQL databases:

- [Key-Value Databases](key_value_databases.html)
- [Document Databases](document_databases.html)
- [Column Store Databases](column_store_databases.html)
- [Graph Databases](graph_databases.html)

## Why Relational Databases?

Relational databases remain the default choice for most applications because they excel at maintaining data correctness and expressing complex relationships.

- **Data integrity** - Built-in constraints ensure your data stays accurate and consistent, preventing invalid states
- **Relationship model** - JOINs naturally express how entities connect, making complex queries straightforward
- **Structured data** - Fixed schemas enforce data quality and make the database self-documenting
- **Powerful querying** - SQL provides a rich, standardized language for analyzing and manipulating data
- **Proven reliability** - Decades of maturity, tooling, and expertise make relational databases a safe default

~.focusContent.lookout

**Stay Safe - Be a Skeptic**

Start with relational databases unless you have a specific reason not to.

There have been many technologies that were hyped and evangelized as the "next big thing". When these don't pan out, developers who used them are left with code that needs to be migrated to a more stable solution.

Consider NoSQL only when you've identified a specific limitation that matches your requirements. Make sure the implementation that you choose has a strong community and is well-supported.

/~

## Why NoSQL?

NoSQL is a more recent development than relational databases, and it is a response to some limitations of relational databases.

Here are a few reasons why NoSQL databases emerged:

- **Extreme scaling** - Horizontal scaling is impractical with relational databases because JOINs break down when data is distributed across servers
- **Flexible schemas** - Modifying the schema of very large tables is slow, resource-intensive, and blocks rapid iteration
- **Unnecessary strictness** - Not every application needs the strict data integrity guarantees that relational databases enforce, and relaxing them enables better performance and scalability
- **Mismatched data models** - Forcing a relational structure on data that is not naturally relational adds unnecessary complexity
