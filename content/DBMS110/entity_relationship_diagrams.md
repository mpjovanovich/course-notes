---
title: Entity Relationship Diagrams
course: DBMS110
---

~.toc

- [Entity Relationship Diagrams](#entity-relationship-diagrams)
  - [Entities](#entities)
  - [Relationships](#relationships)

/~

# Entity Relationship Diagrams

An **entity relationship diagram (ERD)** is a diagram that represents:

- The **entities** in a database
- The **relationships** between the entities

## Entities

An **entity** is a "thing" that we want to store information about. It may be a concrete object (like a person or a car) or an abstract concept (like a bank account or purchase information).

Entities in an ERD must have the following characteristics:

- Rectangle shape
- Entity name at the top
- Attributes listed inside the rectangle
- Data type of each attribute
- Primary key indicator (sometimes "PK", underline, key icon)

## Relationships

A **relationship** is a connection between two entities. It may be a one-to-one relationship, a one-to-many relationship, or a many-to-many relationship.

These are associated with foreign keys in the tables (discussed in the previous section).

Relationships in an ERD must have the following characteristics:

- Related entities are connected by a line (not all entities are related to all other entities)
- Lines should connect from the foreign key of one entity to the primary key of the other entity
- A cardinality indicator should be shown on the edge between the entities
