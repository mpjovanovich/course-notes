---
title: SQL Basics
course: SDEV200
---

~.toc

- [SQL Basics](#sql-basics)
  - [SQLite Database Browser](#sqlite-database-browser)
  - [Creating a Database](#creating-a-database)
  - [Basic SQL](#basic-sql)
    - [Comments](#comments)
    - [Creating and Dropping a Table](#creating-and-dropping-a-table)
    - [Data Types](#data-types)
    - [Inserting Data](#inserting-data)
    - [Selecting Data](#selecting-data)
  - [Initialization Script](#initialization-script)

/~

# SQL Basics

For our next section of the course, we will introduce database programming. There are many different database engines to choose from. For this course we will use SQLite.

We will only cover the very basics of SQL. Our focus is on using Java to interact with the database.

## SQLite Database Browser

An **RDBMS** (Relational Database Management System) is software that allows you to create and manage a database.

We will use the **DB Browser for SQLite (DB4S)** to create and manage our databases.

Download from: [DB4S Downloads](https://sqlitebrowser.org/dl/)

## Creating a Database

With SQLite, each database is a single file with a `.db` extension.

To create a database, we can use the **DB4S** GUI.

1. Open DB4S.
2. Click the "Create" button.
3. Enter a name for your database.
4. Click "Create".

## Basic SQL

### Comments

SQLlite offers single and multi-line commenting syntax.

```sql
/* Multiline comment:
SELECT * FROM some_table
*/

-- Single line comment
```

### Creating and Dropping a Table

A table is a collection of related data. Each column in a table has a name and a data type.

While DB4S does offer a wizard to create a table, we will manually create our tables using the SQL `CREATE TABLE` statement.

Naming conventions for tables differ, and are a matter of developer preference. I use PascalCase, singular nouns. Whatever you choose, be consistent.

To create a table, we use the `CREATE TABLE` statement. For each column, we specify the name and data type. Optionally, we can specify constraints, like `PRIMARY KEY` or `NOT NULL`.

```sql
CREATE TABLE Book (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    publication_year INTEGER NOT NULL,
);
```

To drop a table, we use the `DROP TABLE` statement. We can use the `IF EXISTS` clause to avoid errors when the table does not exist.

```sql
DROP TABLE IF EXISTS Book;
```

### Data Types

SQLite supports the following data types:

| Type    | Description            |
| ------- | ---------------------- |
| INTEGER | Whole numbers          |
| REAL    | Floating point numbers |
| TEXT    | Strings                |
| BLOB    | Binary data            |

### Inserting Data

To insert data into a table, we use the `INSERT INTO` statement.

We specify the table name, and then the column names and values we want to insert. Note that we do not need to specify the `id` column, as it is auto-incremented.

```sql
INSERT INTO Book (title, author, publication_year)
VALUES
    ('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
    ('1984', 'George Orwell', 1949),
    ('The Art of Cooking', 'Martha Stewart', 2000),
    ('The Art of Cooking (Even Better Food)', 'Martha Stewart', 2001)
```

### Selecting Data

To select data from a table, we use the `SELECT` statement.

```sql
SELECT
    title,
    author,
    publication_year
FROM
    Book;
```

## Initialization Script

Here is a script that you can use to recreate the database and tables from scratch.

You can paste this into the "Execute SQL" tab in DB4S.

```sql
-- Drop existing tables
DROP TABLE IF EXISTS Book;

-- Create the Book table
CREATE TABLE Book (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    publication_year INTEGER NOT NULL
);

-- Insert some data
INSERT INTO Book (title, author, publication_year)
VALUES
    ('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
    ('1984', 'George Orwell', 1949),
    ('The Art of Cooking', 'Martha Stewart', 2000),
    ('The Art of Cooking (Even Better Food)', 'Martha Stewart', 2001);
```

~.focusContent.lookout

**Note:** If you want the results of your SQL commands to be saved to the database, you must click the "Write Changes" button in the top tab of DB4S.

/~
