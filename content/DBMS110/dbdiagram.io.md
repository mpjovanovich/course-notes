---
title: Using dbdiagram.io
course: DBMS110
---

~.toc

- [Using dbdiagram.io](#using-dbdiagramio)
  - [Understanding the Markup Syntax](#understanding-the-markup-syntax)

/~

# Using dbdiagram.io

We will use [dbdiagram.io](https://dbdiagram.io/) to create ERDs.

This software uses a specialized markup language to create ERDs.

~.focusContent.note

The markup language that we'll be using _is not SQL_, but it does closely resemble the SQL create table syntax.

/~

## Understanding the Markup Syntax

Let's open this example in dbdiagram.io:

```
Table pet {
  id integer
  owner_id integer
  name text
  species text
  weight integer
}
```

We will work toward this finalized version one step at a time:

```
Table pet {
  id integer [not null, primary key]
  owner_id integer [not null, ref: > owner.id]
  name text [not null]
  species text [not null]
  weight integer [null]
}
```

- Start by creating the empty table structure.
- Add in the attribues and data types.
- For each attribute, in square brackets, indicate NULL or NOT NULL constraints.
- Identify the primary key by adding a `[primary key]` constraint inside square brackets. Use a comma to separate multiple constraints.
- Identify the foreign key by adding a `[ref: ? referenced_table.referenced_column]` constraint inside square brackets. Use a comma to separate multiple constraints. Possible values for the `?` are:
  - `>`: one to many
  - `<`: many to one
  - `-`: one to one
- Refer to the documentation for more details: https://dbml.dbdiagram.io/docs
