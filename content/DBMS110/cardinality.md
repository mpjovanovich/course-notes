---
title: Cardinality
course: DBMS110
---

~.toc

- [Cardinality](#cardinality)
  - [Connecting Entities with Cardinality Notation](#connecting-entities-with-cardinality-notation)
  - [Update:](#update)
  - [Shorthand Notation](#shorthand-notation)
  - [Examples and Exercises](#examples-and-exercises)

/~

# Cardinality

We've seen how entities can be related to other entities using foreign keys.

**Cardinality** describes how many instances of one entity can be associated with one instance of another entity.

## Connecting Entities with Cardinality Notation

Quantifiers are arranged in pairs to show minimum and maximum possible values. Let's say we have the quantifiers 0 and 1.

This translates to:

> For some entity X there may be at minimum 0 and at maximum 1 instance of entity Y.

## Update:

https://creately.com/guides/cardinality-symbols/

Chen vs Crow's foot vs UML Notation...

## Shorthand Notation

ERDs should have the full descriptive quantifiers for cardinality; however, it is common to use the following shorthand notations when discussing a relationship at a high level:

| Shorthand | Description  |
| --------- | ------------ |
| 1:1       | One to One   |
| 1:M       | One to Many  |
| M:N       | Many to Many |

In this shorthand, the minimum values are omitted.

## Examples and Exercises

~.focusContent.example

**Person to Vehicle**

There will be a pair of quantifiers for each direction of the relationship. These are placed at the edges of the relationship.

<figure>
  <img src="images/cardinality_example1.svg" style="width: 40%;height: auto;">
</figure>

- Each person is associated with at minimum zero and at most many vehicles.
- Each vehicle is associated with at minimum one and at most one person.

/~

~.focusContent.exercise

**Person to Driver's License**

> A person can have at minimum zero and at most one driver's license.
> A driver's license can be associated with at minimum one and at most one person.

/~

~.focusContent.exercise

**Author to Book**

> An author can be associated with at minimum zero and at most many books.
> A book can be associated with at minimum one and at most one author.

/~

~.focusContent.exercise

**Pet Sitting Service v1**

Identify the entities and fields in the given scenario, then create an ERD:

```
You are creating a pet sitting application. Clients sign up and enter any pets they have into the system. A client can then selects an available sitter for a specific time to come and watch his or her pets.
```

/~
