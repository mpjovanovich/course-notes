---
title: Structured Query Language
course: DBMS110
---

~.toc

- [Structured Query Language (SQL)](#structured-query-language-sql)
  - [SQL Syntax](#sql-syntax)
    - [Comments](#comments)
    - [Formatting and Style](#formatting-and-style)
  - [Types of SQL Statements](#types-of-sql-statements)
    - [Data Definition Language (DDL)](#data-definition-language-ddl)
    - [Data Manipulation Language (DML)](#data-manipulation-language-dml)
    - [Other Operations](#other-operations)
  - [ANSI SQL](#ansi-sql)
    - [Dialects of SQL](#dialects-of-sql)

/~

# Structured Query Language (SQL)

**Structured Query Language (SQL)** is a language used to interact with a relational database.

## SQL Syntax

SQL is a **declarative language**, meaning that you describe what you want to do, rather than how to do it (this would be an _imperative language_, like Python).

To comment in SQL, you can use `--` for a single line comment or `/* */` for a multi-line comment.

### Comments

```sql
-- This is a comment
SELECT * FROM SomeTable;

/*
This is
a multi-line
comment
*/
SELECT * FROM SomeTable;
```

### Formatting and Style

Whitespace is ignored in SQL, so pick a style and stick with it. As an example, here are three different ways to write the same query:

```sql
-- Not advised unless it's a very simple query; full query not shown...
SELECT column1, column2, column3 FROM SomeTable WHERE condition;
```

```sql
-- A little more readable...
SELECT
    column1, column2, column3
FROM SomeTable
    JOIN AnotherTable ON SomeTable.id = AnotherTable.id
WHERE condition
    AND AnotherTable.id = 1;
```

```sql
-- This is what you will use in DBMS110
SELECT
    column1,
    column2,
    column3
FROM
    SomeTable
    JOIN AnotherTable ON SomeTable.id = AnotherTable.id
WHERE
    condition;
    AND AnotherTable.id = 1;
```

~.focusContent.note

**Do I need a semicolon?**

If you are only writing one SQL statement, the semicolon at the end can be omitted. This is often done for ad-hoc queries in the GUI.

For production code, you should use a semicolon.

/~

## Types of SQL Statements

You might hear of SQL operations being grouped into the following categories:

### Data Definition Language (DDL)

Used to create, modify, and delete database objects (tables are what we're most interested in).

### Data Manipulation Language (DML)

Used to select, insert, update, and delete data in the database.

~.focusContent.note

"SELECT" is now often put into its own category - Data Query Language (DQL).

/~

### Other Operations

SQL is also used to administer to the database itself. This includes operations like:

- Creating and dropping users
- Granting and revoking permissions
- Backing up and restoring the database

## ANSI SQL

The **American National Standards Institute (ANSI)** is a group that standardizes many things.

As a fun exercise you can check out [ANSI’s Student-FRIENDLY STANDARDS RESOURCES](https://www.ansi.org/education/activities/standards-student-programs/k-12-students) to see everything that they're involved in.

What we need to know is that:

- ANSI SQL forms the core foundational functionality that all SQL dialects include
- It is typically a subset of the functionality that is available in a given dialect

### Dialects of SQL

This matters because there are many different implementations of SQL:

- Transact-SQL (MS SQL Server)
- MySQL
- PostgreSQL
- Oracle
- SQLite
- etc.

These are called **dialects** of SQL. The main differences between dialects are additional features and functionality that are added on top of the ANSI SQL standard.

Here are a few specifics for various dialects:

```sql
-- Array operations (PostgreSQL)
SELECT ARRAY[1,2,3] || ARRAY[4,5,6];

-- LIMIT with OFFSET (non-standard syntax) (MySQL)
SELECT * FROM users LIMIT 10, 5;  -- Skip 10, take 5

-- TOP clause (T-SQL)
SELECT TOP 10 * FROM users;

-- Variable declarations (T-SQL)
DECLARE @count INT = 10;

-- || string concatenation operator (SQLite)
SELECT first_name || ' ' || last_name AS full_name FROM users;

-- Date functions... each has their own syntax
```

Different dialects often offer the same functionality (e.g. string concatenation, date functions, etc.), but with different syntax.
