---
title: SQL SELECT Statement
course: DBMS110
---

~.toc

- [SQL SELECT Statement](#sql-select-statement)
  - [Asterisk (All Columns)](#asterisk-all-columns)
  - [Column Lists](#column-lists)
  - [DISTINCT](#distinct)
  - [WHERE Clause](#where-clause)
    - [Operators](#operators)
  - [ORDER BY Clause](#order-by-clause)
  - [LIMIT Clause](#limit-clause)

/~

# SQL SELECT Statement

The `SELECT` statement is used to retrieve data from the database.

## Asterisk (All Columns)

The asterisk (`*`) is used to select all columns from a table.

```sql
SELECT * FROM table_name;
```

~.focusContent.note

**Ad-hoc Queries**

The wildcard is not preferred for anything other than quick ad hoc queries due to performance issues.

An **ad-hoc query** is a query that is only used once or a few times to solve a problem. These are used by analysts to gain insight into the data, and by techical uses to diagnose problems and make adjustments to the system.

When writing SQL for an application or long-term use, you should always specify the columns you want to select.

/~

## Column Lists

You can specify the columns you want to select in the `SELECT` statement. These may be selected in any order, not necessarily the order they are defined in the table.

```sql
SELECT column2, column3 FROM table_name;
```

## DISTINCT

When selecting a result set, you may not want to see duplicate rows. You can use the `DISTINCT` keyword to remove duplicate rows.

```sql
SELECT DISTINCT column1, column2 FROM table_name;
```

## WHERE Clause

You can use the `WHERE` clause to filter the result set. This produces a **subset** of the results.

The `WHERE` clause must include a **boolean expression** - one that evaluates to `TRUE` or `FALSE`.

```sql
-- Filter the entire animals table to only include reptiles
SELECT * FROM Animals WHERE family = 'reptile';
```

### Operators

Any of the below operators can be used in the `WHERE` clause for filtering results.

| Comparison Operator | Description              |
| ------------------- | ------------------------ |
| =                   | Equal to                 |
| !=                  | Not equal to             |
| >                   | Greater than             |
| >=                  | Greater than or equal to |
| <                   | Less than                |
| <=                  | Less than or equal to    |
| LIKE                | Matches a pattern        |
| NOT LIKE            | Does not match a pattern |
| IN                  | Is in a list             |
| NOT IN              | Is not in a list         |
| IS NULL             | Is null                  |
| IS NOT NULL         | Is not null              |

<!--TODO: Clean this up -->

Examples:

- Compare a string to a string literal (equal and not equal)
- Compare a number to a number literal (using all numeric comparison operators)
- Compare dates using comparison operators (note good practice is to use 'yyyyMMdd' string format for date comparison b/c it's universal)
- Demonstrate the `LIKE` operator and wildcard character
- Demonstrate `IS NULL` and `IS NOT NULL`

~.focusContent.note

**Between Operator**

Most SQL dialects have a `BETWEEN` operator. This is used to filter results between two values. When using this you must be aware of whether the start and end values are included or excluded in the result set.

For this reason I recommend using the `>=` and `<=` operators instead (or `>=` and `<`).

/~

## ORDER BY Clause

You can use the `ORDER BY` clause to sort the result set by one or more columns:

```sql
SELECT *
FROM table_name
ORDER BY
    column1 ASC,
    column2 ASC;
```

The default sort order is ascending (`ASC`). This keyword can be ommitted if that is the desired sort order:

```sql
SELECT *
FROM table_name
ORDER BY
    column1;
```

To reverse the sort order, you can use the `DESC` keyword:

```sql
SELECT *
FROM table_name
ORDER BY
    column1 DESC;
```

## LIMIT Clause

You can use the `LIMIT` clause to limit the number of rows returned. When doing so you should have an `ORDER BY` clause to ensure that the rows are returned in a consistent order.

```sql
-- Get the cities with the highest population
SELECT
    city,
    population
FROM
    cities
ORDER BY
    population DESC
LIMIT 10;
```
