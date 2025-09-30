---
title: SQL Joins
course: DBMS110
---

~.toc

- [SQL Joins](#sql-joins)
  - [Inner Joins](#inner-joins)
    - [Basic Syntax](#basic-syntax)
    - [Selecting Specific Columns](#selecting-specific-columns)
    - [Filtering and Ordering](#filtering-and-ordering)
  - [Using Table Aliases](#using-table-aliases)
  - [Using Column Aliases](#using-column-aliases)
  - [Query Styles](#query-styles)

/~

# SQL Joins

We've seen how tables are related to each other using foreign keys. We can use these keys in our SQL queries when we need to fetch data from one table that is related to another table.

We'll use an online course management system for our examples. The tables are:

**_Module_**

| id  | presentation_order | module_name               | published |
| --- | ------------------ | ------------------------- | --------- |
| 1   | 1                  | Introduction to Databases | true      |
| 2   | 2                  | Fundamentals of Sets      | true      |
| 3   | 3                  | Data Modeling and ERDs    | false     |

**_Assignment_**

| assignment_id | module_id | assignment_name                     | due_date   |
| ------------- | --------- | ----------------------------------- | ---------- |
| 1             | 1         | Ch1 Knowledge Check                 | 2025-08-31 |
| 2             | 1         | Ch2-5 Knowledge Check               | 2025-08-31 |
| 3             | 1         | Exercise: Data Journeys             | 2025-08-26 |
| 4             | 1         | SQL: Working with SQL Technologies  | 2025-08-28 |
| 5             | 2         | SQL: SELECT Basics                  | 2025-09-14 |
| 6             | 3         | Ch2-1, Ch2-3, Ch2-4 Knowledge Check | 2025-09-28 |
| 7             | 3         | Ch4 Knowledge Check                 | 2025-09-28 |
| 8             | 3         | ERD Basics                          | 2025-09-14 |

~.focusContent.exercise

You can follow along using this SQL file: [sql_join_init.sql](sql_files/sql_join_init.sql).

Create a database using DB Browser for SQLite and execute the SQL file to create the tables.

/~

## Inner Joins

### Basic Syntax

There are several types of joins, but for this course we will only be using _inner joins_. These are the most common type.

To do a join, we use the `JOIN` keyword in the `FROM` clause of a SQL statement.

The `ON` clause specifies the condition for the join - this will connect the foreign key of one table to the primary key of the other table.

```sql
-- Get all data from both tables
SELECT
    *
FROM
    Module
    JOIN Assignment ON Module.module_id = Assignment.module_id;
```

### Selecting Specific Columns

Usually we only want specific columns from the tables. We can do this by specifying the columns we want to select in the `SELECT` clause.

```sql
-- Get only the module name and assignment name
SELECT
    Module.module_name,
    Assignment.assignment_name
FROM
    Module
    JOIN Assignment ON Module.module_id = Assignment.module_id;
```

### Filtering and Ordering

Anything we have done before in our SELECT statements can be used in our JOIN statements. This includes the `WHERE` clause, `ORDER BY` clause, and `LIMIT` clause.

When using columns in these clauses, we need to specify the table name and column name that we are referring to.

```sql
-- Get assignments only from published modules
SELECT
    Module.module_name,
    Assignment.assignment_name
FROM
    Module
    JOIN Assignment ON Module.module_id = Assignment.module_id
WHERE
    Module.published = 1;
```

```sql
-- Get modules and assignment info for assignments that are due after
-- 2025-09-01, ordered most to least recent
SELECT
    Module.module_name,
    Assignment.assignment_name,
    Assignment.due_date
FROM
    Module
    JOIN Assignment ON Module.module_id = Assignment.module_id
WHERE
    Assignment.due_date > '2025-09-01'
ORDER BY
    Assignment.due_date DESC;
```

## Using Table Aliases

An **alias** is a temporary name for a table or column that only applies to the queryin which it is used. Table aliases can help make our queries shorter, which is useful as queries get more complex or when table names are long.

To declare an alias, we use the `AS` keyword. Anywhere else in the query, we can use the alias instead of the table name.

```sql
SELECT
    m.module_name,
    a.assignment_name
FROM
    Module AS m
    JOIN Assignment AS a ON m.module_id = a.module_id
WHERE
    m.published = 1;
```

## Using Column Aliases

We can also use aliases for columns. This is useful when we want to rename a column for readability or when we need to remove ambiguity for a duplicate column name (e.g. two tables both have a "name" column).

```sql
SELECT
    m.module_name AS "Module Name",
    a.assignment_name AS "Assignment Name"
FROM
    Module AS m
    JOIN Assignment AS a ON m.module_id = a.module_id
WHERE
    m.published = 1;
```

## Query Styles

In SQL there are many ways to write the same query. Which to use is a matter of personal preference.

In the query below we show that the order in which the tables are joined can be flipped, but still produce the same result - we fetch module and assignment name for the "Introduction to Databases" module.

```sql
SELECT
    Module.module_name,
    Assignment.assignment_name
FROM
    Module
    JOIN Assignment ON Module.module_id = Assignment.module_id
WHERE
    Module.module_name = 'Introduction to Databases';
```

```sql
SELECT
    Module.module_name,
    Assignment.assignment_name
FROM
    -- Order of join flipped
    Assignment
    JOIN Module ON Assignment.module_id = Module.module_id
WHERE
    Module.module_name = 'Introduction to Databases';
```
