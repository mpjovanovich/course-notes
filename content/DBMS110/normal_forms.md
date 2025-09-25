---
title: Normal Forms
course: DBMS110
---

~.toc

- [Normal Forms](#normal-forms)
  - [First Normal Form (1NF)](#first-normal-form-1nf)
  - [Second Normal Form (2NF)](#second-normal-form-2nf)
  - [Third Normal Form (3NF)](#third-normal-form-3nf)
- [Summary: Characteristics of Normalized Data](#summary-characteristics-of-normalized-data)
  - [Each Relation Represents a Single Subject or Concept](#each-relation-represents-a-single-subject-or-concept)
  - [Each Attribute is Atomic](#each-attribute-is-atomic)
  - [Each Attribute is Related Only to the Primary Key](#each-attribute-is-related-only-to-the-primary-key)
  - [Each Attribute Exists in Only One Relation](#each-attribute-exists-in-only-one-relation)
  - [Each Relation has no Anomalies that Would Violate its Integrity or Consistency](#each-relation-has-no-anomalies-that-would-violate-its-integrity-or-consistency)

/~

# Normal Forms

Normal forms are a way of categorizing the degree of normalization in a system.

## First Normal Form (1NF)

First normal form has to do with creating a sensible table structure from a data set that avoids redundancy. We usually do this when we start with a "flat" data set that has no clear table structure.

_Definition:_

A table is in first normal form if:

- Each table has a primary key identified.
- Each table contains no repeated groups of data.

Repeated groups in this context refers to a record that contains more than one value for some attribute.

We should also split any multi-valued attributes into multiple single-valued attributes. **Atomic** attributes are attributes that cannot be split into multiple attributes; they are the smallest unit of data that is meaningful.

_Example:_

Here is an unnormalized table that associates employees with projects. The primary key is the project number.

| Project Number | Project Name | Employee ID |
| -------------- | ------------ | ----------- |
| 1              | Project A    | 1           |
| 2              | Project B    | 2, 3, 9     |
| 3              | Project C    | 3, 4        |

Here is the same table in first normal form.

| Project Number | Project Name | Employee ID |
| -------------- | ------------ | ----------- |
| 1              | Project A    | 1           |
| 2              | Project B    | 2           |
| 2              | Project B    | 3           |
| 2              | Project B    | 9           |
| 3              | Project C    | 3           |
| 3              | Project C    | 4           |

_Example:_

Splitting up "Address" into multiple attributes:

```
Address (
    [PK] Address ID,
    City,
    State,
    Zip Code,
    Address Line 1,
    Address Line 2
)
```

Splitting up "Full Name" into multiple attributes:

```
Person (
    [PK] Person ID,
    First Name,
    Middle Name,
    Last Name
)
```

## Second Normal Form (2NF)

If a table is in first normal form and has a single-attribute primary key, it is already in second normal form.

We convert from 1NF to 2NF if we have a composite primary key and the table contains a partial dependency.

A **partial dependency** is an attribute that is dependent on only part of the primary key (one of the attributes in the composite key).

This often happens when we have a M:N relationship between two entities.

_Definition:_

A table is in second normal form if:

- It is in first normal form.
- It includes no partial dependencies.

_Example:_

In this example we are trackign employee work on projects. If we started with this structure:

```
ProjectAssignment (
    [PK] Project Number,
    [PK] Employee ID
    Project Name,
    Project Location,
    Project Start Date,
    Employee First Name,
    Employee Last Name
    Hours Worked on Project
)
```

We would convert it to this:

```
Project (
    [PK] Project Number,
    Project Name,
    Project Location,
    Project Start Date,
    Project Category,
    Project Category Hourly Rate
)

Employee (
    [PK] Employee ID,
    Employee First Name,
    Employee Last Name
)

-- Associative entity; connects Project and Employee
Assignment (
    [PK, FK] Project Number,
    [PK, FK] Employee ID,
    Hours Worked
)
```

## Third Normal Form (3NF)

Third normal form ensures that all attributes in a table are related only to the primary key.

Each attribute should have a **functional dependency** on the primary key. Put simply, this means that each attribute directly describes the "thing" that the primary key identifies.

A **transitive dependency** is an attribute that is dependent on a non-primary key attribute. When we have these we need to create a new table to hold the transitive dependency.

_Definition:_

A table is in third normal form if:

- It is in second normal form.
- It includes no transitive dependencies.

_Example:_

In our previous Project relation, we have a service charge that is dependent on the project category - not the project itself.

Let's assume we have a "User Interface Development" project category that has a service charge of $200 per hour. We now want to update our charge to $220 per hour. With our previous table we'd have to update every row in the table:

```
Project (
    [PK] Project Number,
    Project Name,
    Project Location,
    Project Start Date,
    Project Category,
    Project Category Hourly Rate
)
```

To fix it, we should split ProjectCategory into its own table and reference it from the Project table via a foreign key.

```
Project (
    [PK] Project Number,
    Project Name,
    Project Location,
    Project Start Date,
    [FK] Project Category Name
)
```

```
ProjectCategory (
    [PK] Project Category Name,
    Project Category Hourly Rate
)
```

Now we an update the ProjectCategory table in one place, and any associated projects will automatically "see" the new rate because they are pointing to this table.

# Summary: Characteristics of Normalized Data

Normalized data has the following characteristics:

## Each Relation Represents a Single Subject or Concept

Tables should represent only one "thing".

If the relation contains data about different subjects or concepts, it is not normalized.

## Each Attribute is Atomic

Each attribute should be the "smallest unit" of data that is meaningful.

If the relation contains attributes that can be split into multiple attributes, it is not normalized.

## Each Attribute is Related Only to the Primary Key

Attributes should depend only on the entire primary key of the relation (functional dependency).

If the relation contains attributes that are not related to the entire primary key, it is not normalized.

## Each Attribute Exists in Only One Relation

If the attribute exists in multiple relations, it is not normalized.

Repeated data is often a sign that further normalization is possible.

\*The exception is foreign keys, which are used to connect relations.

## Each Relation has no Anomalies that Would Violate its Integrity or Consistency

Anomalies are situations where the data in the relation no longer makes sense.

What this property means is that, once the data are properly normalized, we can't do things like leave an orphaned record from a delete of a parent record or an update of a foreign key value.

Refer to the data integrity notes for a review of these concepts.
