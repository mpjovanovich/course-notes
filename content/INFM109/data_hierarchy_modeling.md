---
title: Data Hierarchy
course: INFM109
---

~.toc

- [The Data Hierarchy](#the-data-hierarchy)
- [Data Modeling](#data-modeling)
  - [Entities and Relationships](#entities-and-relationships)
    - [Primary Key](#primary-key)
    - [Foreign Key](#foreign-key)
    - [Cardinality](#cardinality)
    - [Modeling a Domain: Library Checkout System](#modeling-a-domain-library-checkout-system)

/~

# The Data Hierarchy

Data that has inherent structure is often stored in a **database** in the following way:

| Name     | Description                     |
| -------- | ------------------------------- |
| Field    | A single piece of data          |
| Record   | A collection of related fields  |
| Table    | A collection of related records |
| Database | A collection of related tables  |

# Data Modeling

When building software or information systems, we need to think about how to represent all of the data that we need to store.

This is called **data modeling**.

## Entities and Relationships

An **Entity Relationship Diagram (ERD)** is a diagram that represents the **entities** and **relationships** between them in a database.

Entities are the "things" that we want to store information about. They may be concrete objects (like a person or a car) or abstract concepts (like a bank account or purchase information).

### Primary Key

A **primary key** is a unique identifier for an entity. It is a field or set of fields that uniquely identifies an entity.

~.focusContent.example

Think about why we're often given an ID number when we sign up for a new service:

- Insurance policy number
- Student ID number
- Credit card number
- Email address

The ID number is used to uniquely identify the entity. We can't just use name because there might be multiple people with the same name!

/~

### Foreign Key

A **foreign key** is a field that references another entity. It is what connects or associates the entities together.

### Cardinality

The **cardinality** of a relationship is the number of entities that can be associated with another entity.

The markup below can be interpreted as:

**_For each X instance of this entity, there can be Y instances of the connected entity._**

| Cardinality | Description  |
| ----------- | ------------ |
| 1:1         | One-to-one   |
| 1:N         | One-to-many  |
| M:N         | Many-to-many |

Together, these three components form a model of the data within the system.

~.focusContent.exercise

### Modeling a Domain: Library Checkout System

Given the following entities, create an ERD for a library checkout system:

1. Book (id, ISBN, title, author, publication_year)
1. Member (id, name, email, phone)
1. Loan (id, checkout_date, due_date)

Identify the:

- Primary keys
- Foreign keys
- Cardinality of the relationships

/~
