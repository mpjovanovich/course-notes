---
title: Cardinality
course: DBMS110
---

~.toc

- [Cardinality](#cardinality)
  - [Cardinality Quantifiers](#cardinality-quantifiers)
  - [Cardinality Notation](#cardinality-notation)
  - [Connecting Entities with Cardinality Notation](#connecting-entities-with-cardinality-notation)
  - [Describing Cardinality in Practice](#describing-cardinality-in-practice)
  - [Crow's Foot Notation](#crows-foot-notation)

/~

# Cardinality

We've seen how entities can be related to other entities using foreign keys.

**Cardinality** describes how many instances of one entity can be associated with one instance of another entity.

## Cardinality Quantifiers

The possible cardinality quantifiers are:

| Cardinality Quantifier | Description |
| ---------------------- | ----------- |
| 0                      | Zero        |
| 1                      | One         |
| \*                     | Many        |

## Cardinality Notation

These quantifiers may be combined together in the following format:

```
[minimum possible]..[maximum possible]
```

_Examples:_

| Cardinality | Description              |
| ----------- | ------------------------ |
| 0..1        | Zero to one              |
| 1..1        | One to one (exactly one) |
| 0..\*       | Zero to many             |
| 1..\*       | One to many              |
| \*..\*      | Many to many             |

## Connecting Entities with Cardinality Notation

When connecting entities in an ERD, we add the cardinality notation next to the entity that "belongs" to.

There will be one set of quantifiers for each of the the two connected entities.

~.focusContent.example

**Person to Driver's License**

TODO: create image in draw.io

**Author to Book**

TODO: create image in draw.io

/~

## Describing Cardinality in Practice

Even though the ERD may have more descriptive quantifiers for cardinality, it is more common to use the following terms:

- One to One
- One to Many
- Many to Many

The "zero" possibility is implied or omitted.

~.focusContent.example

**One to One vs One to Many Scenarios**

There is a _one to one_ relationship between person and driver's license:

- A person can have zero or one driver's license.
- A driver's license can be associated with only one person.

There is a _one to many_ relationship between author and book:

- An author may have written zero to many books.
- A book can be written by only one author.

/~

## Crow's Foot Notation

An alternative to the `X..Y` notation is to use **Crow's Foot Notation**.

This provides a quick visual way to identify the cardinalities in a relationship.

<figure>
  <img src="https://www.inf.usi.ch/faculty/soule/teaching/2014-spring/2014-03-07/images/crows-feet-notation.png" style="width: 80%;height: auto;">
</figure>
