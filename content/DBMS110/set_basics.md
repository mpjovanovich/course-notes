---
title: Set Basics
course: DBMS110
---

~.toc

- [Set Basics](#set-basics)
  - [Definition of a Set](#definition-of-a-set)
  - [The Null Set](#the-null-set)
  - [Subsets](#subsets)
  - [Venn Diagrams](#venn-diagrams)
  - [Relation to SQL](#relation-to-sql)

/~

# Set Basics

## Definition of a Set

A **set** is a collection of **distinct**, **unordered** elements.

An **element** is an item in a set.

Sets are denoted with **curly braces**.

In math, we often give it a name with a capital letter, just like a variable (which uses a lowercase letter).

We might say:

```
Let A = { a, b, c }
```

Because sets are unordered, this also means that:

```
A = { b, c, a }
A = { c, b, a }
```

~.focusContent.exercise

**One word, to word, three words, set?**

Are the words in the above sentence a set?

/~

~.focusContent.exercise

**Set Notation Practice**

Write the colors of the rainbow using set notation.

/~

## The Null Set

The **null set** or **empty set** is the set that contains no elements. It is denoted with the symbol `∅`.

```
Let A = {}
```

It might seem like it's of limited use, but it comes up very often in math and computer science. Think of sets as possible solutions for a problem.

- What is the set of people swimming in the pond outside? = {}
- What is the set of people who have wings? = {}
- What is the set of numbers that are both even and odd? = {}

## Subsets

A set B is a **subset** of a set A if every element of B is also an element of A.

```
Let A = { a, b, c }
Let B = { a, b, c, d, e }
Therefore A is a subset of B.
```

~.focusContent.note

A **proper subset** is a subset that is not equal to the set. This is almost always what we mean when we say "subset" casually, but in formal math you must be aware that a set is also a subset of itself.

```
Let A = { a, b, c }
Let B = { b, c, a }

Therefore A is a subset of B, but...
A is not a proper subset of B.
```

/~

## Venn Diagrams

A **Venn diagram** is a visual representation of sets that uses circles to represent the sets. It may or may not show the elements inside the sets.

~.focusContent.example

**Identifying parts of a Venn diagram**

Let's use a Venn diagram to find mammals and live in water.

```
Let A = animals that live in water
Let B = animals that are mammals

A = { dolphin, whale, shark, octopus, squid, jellyfish }
B = { fox, human, squirrel, dolphin, whale, lion }

Draw the Venn diagram and describe different parts.
```

/~

~.focusContent.example

**Identifying relationships in a Venn diagram**

Let's use a Venn diagram to find colors that are primary colors.

```
Let A = colors
Let B = primary colors

A = { yellow, red, blue, purple, orange, black, white, green }
B = { red, yellow, blue }

Draw the Venn diagram and describe the relationship between the sets.
```

/~

## Relation to SQL

We are studying sets because they are the foundation of SQL. Most tables are sets. SQL is a way of using set operations to build a **result set** that is the end result of a query. It may use many intermediate sets along the way to build the result set.

```sql
-- Subset of colors
SELECT * FROM Colors WHERE name = 'red'
```

~.focusContent.note

**But my tables have duplicates?**

_SQL Tables_

Most tables are sets, but we may sometimes see tables that have duplicate elements. We will learn how to **normalize** them later to remove the duplicates.

/~
