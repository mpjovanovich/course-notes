---
title: Wide-Column Databases
course: DBMS110
---

~.toc

- [Wide-Column Databases](#wide-column-databases)
  - [Definition](#definition)
  - [Example Databases](#example-databases)
  - [Use Cases](#use-cases)

/~

# Wide-Column Databases

## Definition

**Wide-column databases** organize data into rows that contain column families - logical groupings of related columns that are stored together on disk.

Rather than having many tables that are related by foreign keys, wide-column databases store related data in denormalized structures that may have many columns (up to millions).

Unlike relational databases, each row can have completely different columns. There is no rigid schema requiring all rows to have the same structure.

<figure>
  <img src="https://dandkim.com/static/4d3e0d0726e36706abab2a069036c6c4/2e694/multipleRows.png" style="width: 100%;height: auto;">
</figure>

Wide-column databases extend the key-value model by using multiple keys (coordinates) to locate data. For example, a piece of data may be located at:

- Row
- Column Family
- Column

Here's an example of a wide-column database structure for users:

```
Table: "users"
  Row: user:123
    Column Family: "profile"
      - email: "alice@example.com"
      - name: "Alice"
    Column Family: "preferences"
      - theme: "dark"
      - language: "en"
    Column Family: "activity"
      - last_login: "2025-10-07"
```

Rows in a wide

## Example Databases

- Apache Cassandra
- Apache HBase
- Google Bigtable
- ...

## Use Cases

Wide-column databases excel at:

- Time-series data (sensor readings, logs, metrics)
- User activity tracking (profiles, preferences, history)
- High-volume writes with predictable read patterns
- Scenarios where different rows need different columns (sparse data)
