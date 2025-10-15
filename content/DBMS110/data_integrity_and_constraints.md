---
title: Data Integrity and Constraints
course: DBMS110
---

~.toc

- [Data Integrity and Constraints](#data-integrity-and-constraints)
  - [Nullability Constraints](#nullability-constraints)
  - [Unique Constraints](#unique-constraints)
  - [Data Type Constraints](#data-type-constraints)
  - [Domain Constraints](#domain-constraints)
  - [Referential Integrity Constraints](#referential-integrity-constraints)

/~

# Data Integrity and Constraints

Data comes into a database in many ways: user facing software, automated imports, manual data entry, etc.

**Data Integrity** refers to the _accuracy_, _completeness_, and _consistency_ of data.

**Constraints** are rules that are used to ensure data integrity.

Software developers should design interfaces in such a way that constraints are enforced wherever possible; however, the database itself should also enforce constraints to ensure data integrity.

## Nullability Constraints

When defining attributes we can specify whether the attribute is required or optional.

For example, a "middle name" attribute might be optional, but a "first name" or "last name" attribute is usually required.

In the database, we can specify whether the attribute is required or optional by using the `NOT NULL` constraint, which appears after the data type.

```sql
CREATE TABLE Person (
  id integer PRIMARY KEY,
  first_name text NOT NULL,
  middle_name text NULL,
  last_name text NOT NULL
);
```

~.focusContent.lookout

**Don't Forget the `NOT NULL` Constraint!**

In most SQL implementations, `NULL` is the default value - if you do not specify a value, fields will be optional!

/~

## Unique Constraints

A **`UNIQUE`** constraint is used to ensure that the values for an attribute or set of attributes within a table are unique. There may not be duplicate values for the field(s).

We know that our primary key must be unique, but in many cases there are other attributes that should be unique. This often happens when we are using a surrogate key for an entity, but there are _candidate keys_ that could be used as a natural key instead.

```sql
CREATE TABLE Address (
  id integer PRIMARY KEY,
  person_id integer,
  address_type text,
  street text,
  city text,
  state text,
  zip text,
  UNIQUE(person_id, address_type)
);
```

In this example a person can have a "billing" and "shipping" address, but not two of either type.

## Data Type Constraints

We must specify the data type of each attribute on an entity. This is usually straightforward:

```sql
CREATE TABLE Person (
  id integer PRIMARY KEY, -- id is a number, so use INTEGER
  first_name text, -- first name is a string, so use TEXT
  last_name text -- last name is a string, so use TEXT
);
```

There are some cases where you may need to investigate requirements further to ensure proper data types are chosen.

In the implementation below, we might expect a ten digit zip code that includes hyphens, so we'd use TEXT instead of INTEGER.

```sql
CREATE TABLE Address (
  id integer PRIMARY KEY,
  street text,
  city text,
  state text,
  zip text
);
```

~.focusContent.note

**Which Data Type to Choose?**

Recall that different database versions have different data types.

When creating an Entity Relationship Diagram (ERD), remember that the diagram is a communication tool. It is up to you to decide which data types are appropriate for the attributes.

You may choose to keep these types general, or you may choose to use only data types supported by the database that you are using.

/~

## Domain Constraints

In many cases we only want to allow certain values for an attribute.

**Domain Constraints** are used to specify the range of values that an attribute can take.

_Examples:_

| Attribute     | Domain Constraint                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| Gender        | Male, Female, Other                                                                                          |
| State         | [2 letter code for each state](https://en.wikipedia.org/wiki/List_of_U.S._state_and_territory_abbreviations) |
| Age           | 0-120                                                                                                        |
| Salary        | Non-negative                                                                                                 |
| Zip Code      | 5 digit zip code                                                                                             |
| Phone Number  | 10 digit phone number                                                                                        |
| Email Address | Valid email address                                                                                          |
| Date of Birth | Valid date of birth                                                                                          |

Check constraints are a form of domain constraint used to ensure that the values in an attribute or set of attributes meet a certain condition. These are best used for simple constraints that can be expressed in a single condition.

In SQL, these are placed after the attributes in the table definition.

```sql
CREATE TABLE Example (
  -- attributes
  c_number text,
  salary integer,
  phone text,
  -- check constraints
  CHECK(c_number LIKE 'C%'),
  CHECK(salary >= 0),
  CHECK(length(phone) = 10)
);
```

## Referential Integrity Constraints

**Referential integrity constraints** ensure that the values in a foreign key attribute reference a valid primary key value in the referenced table.

In SQL, these are part of the foreign key definition.

```sql
CREATE TABLE Example (
  id integer PRIMARY KEY,
  referenced_id integer,
  FOREIGN KEY (referenced_id) REFERENCES ReferencedTable(id)
);
```

Foreign key integrity is enforced by the database system. This prevents scenarios such as:

- Inserting a record into a table that points to a value that does not exist in the referenced table.
- Deleting a record from the referenced table that is referenced by any record in the referencing table.

This last scenario would create orphan records. **Orphan records** are records that are not associated with any other record in the database - their "parent" record has been deleted.

_Examples:_

**Campus Table**

| id  | name         |
| --- | ------------ |
| 1   | Hamilton     |
| 2   | Indianapolis |
| 3   | Kokomo       |

**Student Table**

| id  | name             | campus_id |
| --- | ---------------- | --------- |
| 1   | Bobby Beebop Sr. | 1         |
| 2   | Bobby Beebop Jr. | 1         |
| 3   | Jennifer Johen   | 2         |
| 4   | Alfonzo Alca     | 3         |

~.focusContent.exercise

**Thinking Through Referential Integrity**

What happens if we to insert the following record into the student table?

```sql
INSERT INTO Student (id, name, campus_id) VALUES (5, 'Crazy Susan', 9);
```

What happens if we were to delete the following record from the campus table?

```sql
DELETE FROM Campus WHERE id = 1;
```

/~
