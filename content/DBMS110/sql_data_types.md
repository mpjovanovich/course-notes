---
title: SQL Data Types
course: DBMS110
---

~.toc

- [SQL Data Types](#sql-data-types)
  - [SQLite Data Types](#sqlite-data-types)
    - [INTEGER](#integer)
    - [REAL](#real)
    - [TEXT](#text)
    - [BLOB](#blob)
    - [NULL](#null)
    - [Important SQLite Note on Booleans](#important-sqlite-note-on-booleans)
  - [Why do Data Types Matter?](#why-do-data-types-matter)

/~

# SQL Data Types

ANSI SQL does not specify data types. Each dialect of SQL has its own data types.

We are using SQLite for this course, so we will learn its data types.

## SQLite Data Types

| Type    | Description            |
| ------- | ---------------------- |
| INTEGER | Whole numbers          |
| REAL    | Floating point numbers |
| TEXT    | Strings                |
| BLOB    | Binary data            |
| NULL    | Null value             |

### INTEGER

The `INTEGER` data types is used to store **whole number** numberic data.

If you know that you will never need a fractional component to your numbers, you should use the `INTEGER` data type. It has the following advantages:

- It puts a natural constraint on the values that can be stored in the database (no accidental 1.2 children in a family).
- It generally takes up less space (uses fewer bits per number) in the database than a `REAL` data type. This saves storage space.

~.focusContent.note

**Value Range**

SQLite uses up to 64 bits to store integers, but may use less space for smaller values. There is a min and max value for integers, but they are very large. The range is:

`-(2<sup>63</sup>) to 2<sup>63</sup> - 1`

or:

`-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807`

/~

### REAL

The `REAL` data types is used to store numeric data for **numbers that (may) have a fractional component**.

~.focusContent.note

**Value Range**

SQLite also uses 64 bits to store real numbers.

You don't need to know the details of what that means - just know that the range for this is very large. The max value is roughly:

`1.7976931348623157×10<sup>308</sup>`

/~

### TEXT

The `TEXT` data type is used to store **strings** of **characters** (letters, numbers, symbols).

~.focusContent.note

**Value Range**

Many SQL dialects have the user define the string size. You may see data types like `VARCHAR(255)` or `CHAR(255)`, where the number in parentheses is the maximum number of characters that can be stored, and any extra characters will be truncated (cut off).

SQLite uses dynamic sizing for text data. It will figure out how the optimal storage allocation size (how many bytes to use) for the text data on its own.

/~

### BLOB

The `BLOB` data type is used to store binary data. This is useful for storing images, videos, or other binary file types.

~.focusContent.example

**BLOB Example**

Think of it as uploading a file to the database. A user's profile picture may be stored as a BLOB.

/~

### NULL

The `NULL` data type is a special data type that indicates that a value is not present. This is different from an empty string (`''`) or a zero (`0`).

~.focusContent.example

**NULL Example**

Take a look at the gradebook for the course and find an ungraded assignment. You probably see a `-`, or something similiar. This indicates a `NULL` value!

You don't have a zero grade - the grade just does not exist yet! Databases use this special data type for exactly this reason.

/~

### Important SQLite Note on Booleans

Most SQL dialects have a `BOOLEAN` (true/false) data type, such as `BIT`, `BOOLEAN`, or `BOOL`. SQLite does not have such a type.

Instead, this is handled by convention, using an integer value of `0` or `1` to represent a boolean value.

- `0` is `FALSE`
- `1` is `TRUE`

~.focusContent.example

**Booleans Example**

Imagine you have a user table and need a field to mark the user as an admin. In SQLite you would use an integer value of `0` or `1` to represent a boolean value.

```sql
-- Select all admins
SELECT * FROM User WHERE is_admin = 1;
-- Select all non-admins
SELECT * FROM User WHERE is_admin = 0;
```

/~

## Why do Data Types Matter?

Data types matter for several reasons:

- When designing the system you need to choose appropriate data types for the data you will be storing.
  - Can the field ever have a fractional value?
  - Can the field ever by empty?
  - Is this text or binary data?
- You may need to treat data types differently in SQL
  - Using quotes around strings
  - Understanding the consequences of performing arithmetic on a REAL and INTEGER data type (what will the result be?)
  - Using `IS NULL` for null values instead of `= NULL`
