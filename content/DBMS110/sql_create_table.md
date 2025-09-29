---
title: SQL Create Table
course: DBMS110
---

~.toc

- [SQL Create Table](#sql-create-table)
  - [Create Table Syntax](#create-table-syntax)
  - [SQL Table Constraints](#sql-table-constraints)
  - [SQL Drop Table](#sql-drop-table)

/~

# SQL Create Table

## Create Table Syntax

To create a table, we use the `CREATE TABLE` statement. This example shows the minimal syntax required to create a table:

```sql
CREATE TABLE MenuItem (
    name TEXT PRIMARY KEY,
    description TEXT,
    price FLOAT
);
```

## SQL Table Constraints

Each field may also contain constraints. These come after the data type.

The example above showed primary key constraint. We should also define the following where they apply:

- `NOT NULL`
- `UNIQUE`
- `FOREIGN KEY`

Let's look at another example. Comments are shown to indicate the purpose of each constraint:

```sql
CREATE TABLE MenuItem (
    -- Modified to use surrogate key
    id INTEGER NOT NULL PRIMARY KEY
    -- Name should still be unique
    name TEXT NOT NULL UNIQUE,
    -- Description is optional
    description NULL TEXT,
    -- Price is required
    price NOT NULL FLOAT
);
```

While it is possible to define a foreign key constraint inline (next to the column definition), it can be more readable to define them at the end of the table definition.

Let's assume that we have a `MenuCategory` table with entries like "Starter", "Entree", and "Dessert". We can add a foreign key as follows:

```sql
CREATE TABLE MenuItem (
    id INTEGER NOT NULL PRIMARY KEY
    name TEXT NOT NULL UNIQUE,
    description NULL TEXT,
    price NOT NULL FLOAT,
    menu_category_id INTEGER NOT NULL,
    -- Foreign key constraint defined after all columns
    FOREIGN KEY (menu_category_id) REFERENCES MenuCategory(id)
);
```

## SQL Drop Table

To drop a table, we use the `DROP TABLE` statement:

```sql
DROP TABLE table_name;
```

~.focusContent.note

**Modifying an Existing Table**

It is possible to alter a table after it has been created. This is usually done to:

- Add or remove columns
- Change the name of a column
- Change a table constraint

We will not cover the syntax here, but you can find the SQLite documentation online.

/~
