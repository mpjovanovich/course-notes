---
title: Modeling M:N Relationships
course: DBMS110
---

~.toc

- [Modeling Many-to-Many (M:N) Relationships](#modeling-many-to-many-mn-relationships)
  - [Process for Modeling M:N Relationships](#process-for-modeling-mn-relationships)
  - [Example: Author to Book](#example-author-to-book)
  - [Exercises](#exercises)
  - [Full Walkthrough](#full-walkthrough)

/~

# Modeling Many-to-Many (M:N) Relationships

When identifying entities and relationships at a high level, we often encounter many-to-many (M:N) relationships.

When designing a database, these deserve special attention.

~.focusContent.note

Review of cardinality shorthand notation:

| Cardinality | Description  |
| ----------- | ------------ |
| 1:1         | One-to-one   |
| 1:N         | One-to-many  |
| M:N         | Many-to-many |

/~

## Process for Modeling M:N Relationships

When we encounter an M:N relationship, we need to create a new entity to represent the relationship.

This new entity is called an **associative entity**.

Often times it simply contains foreign keys to the entities involved in the relationship. It may also contain other attributes specific to an occurace of the relationship.

## Example: Author to Book

How can our database handle the case where an author can write multiple books and a book can have multiple authors (co-authors)?

_Problem:_

This model will not work - how can we assign multiple authors to a book?

```
Author (
    [PK] Author ID,
    Author Name
)

Book (
    [PK] Book ID,
    [FK] Author ID,
    Book Title
)
```

_Solution:_

We need to create a new entity to represent the relationship between authors and books.

```
Author (
    [PK] Author ID,
    Author Name
)

AuthorBook (
    [PK, FK] Author ID,
    [PK, FK] Book ID,
)

Book (
    [PK] Book ID,
    Book Title
)
```

Here's an example of a co-authored book in our finished model:

**Author Table:**

| Author ID | Author Name  |
| --------- | ------------ |
| 1         | Bobby Beebop |
| 2         | Jenny Neejen |

**AuthorBook Table:**

Both authors have contributed to the book!

| Author ID | Book ID |
| --------- | ------- |
| 1         | 1       |
| 2         | 1       |

**Book Table:**

| Book ID | Book Title      |
| ------- | --------------- |
| 1       | The Book of Bop |

## Exercises

Let's build a basic ERD for the following:

- Actor to Movie
- Owner to Pet (update our pet sitting example)

## Full Walkthrough

We're now ready to take our class database and fully normalize it.
