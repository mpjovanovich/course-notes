---
title: Solving Problems with Truth Tables
course: SDEV120
---

~.toc

- [Solving Problems with Truth Tables](#solving-problems-with-truth-tables)
  - [The General Process](#the-general-process)
    - [Set Up the Table](#set-up-the-table)
    - [Solve for the Given Expression](#solve-for-the-given-expression)
  - [Examples](#examples)
    - [Basic Example](#basic-example)
    - [De Morgan's Laws](#de-morgans-laws)
    - [Exclusive Or](#exclusive-or)

/~

# Solving Problems with Truth Tables

## The General Process

The general process for solving problems with truth tables is as follows:

### Set Up the Table

**1) _Determine the number of rows needed._**

Number of rows = 2<sup>n</sup> where n is the number of variables

- 1 variable = 2<sup>1</sup> = 2 rows
- 2 variables = 2<sup>2</sup> = 4 rows
- 3 variables = 2<sup>3</sup> = 8 rows
- 4 variables = 2<sup>4</sup> = 16 rows
- ...

**2) _Write the header columns._**

- One column for each variable
- One column for the logical expression you are solving for

**3) _Follow the algorithm below until you hit the last T/F alternating column._**

- Fill first column with top half T and bottom half F. Move to the next column.
- For each block of consecutive T or F in the previous column fill the next column with half T and half F
- Repeat until you hit the last T / F alternating column

### Solve for the Given Expression

**4) _Plug in the values for each row and solve for the last column._**

We may either:

- Solve each row as an individual problem
- Use bookkeeping rows, then solve for the last column in one go

## Examples

### Basic Example

**Evaluate the truth table for ¬A ∧ B ∨ C:**

_There are 3 variables, so we need 2<sup>3</sup> = 8 rows._

| A   | B   | C   |
| :-- | :-- | :-- |
| T   | T   | T   |
| T   | T   | F   |
| T   | F   | T   |
| T   | F   | F   |
| F   | T   | T   |
| F   | T   | F   |
| F   | F   | T   |
| F   | F   | F   |

_Now fill in the last column with the logical expression that you are trying to solve for._

| A   | B   | C   | ¬A ∧ B ∨ C |
| :-- | :-- | :-- | :--------- |
| T   | T   | T   |            |
| T   | T   | F   |            |
| T   | F   | T   |            |
| T   | F   | F   |            |
| F   | T   | T   |            |
| F   | T   | F   |            |
| F   | F   | T   |            |
| F   | F   | F   |            |

_Plug in the values for each row and solve for the last column._

- Row 1:

  - ¬T ∧ T ∨ T
  - F ∧ T ∨ T
  - F ∨ T
  - T

Put T in the last column.

| A   | B   | C   | ¬A ∧ B ∨ C |
| :-- | :-- | :-- | :--------- |
| T   | T   | T   | T          |
| T   | T   | F   |            |
| ... | ... | ... |            |

- Row 2:
  - ...

_Alternatively, use bookkeeping rows:_

| A   | B   | C   | ¬A  | ¬A ∧ B | ¬A ∧ B ∨ C |
| :-- | :-- | :-- | --- | ------ | ---------- |
| T   | T   | T   | F   | F      | T          |
| T   | T   | F   | F   | F      | F          |
| ... | ... | ... | ... | ...    | ...        |

_Continue until all rows are filled in._

### De Morgan's Laws

De Morgan's Laws are a set of rules that allow us to distribute negation across conjunction and disjunction:

```
¬(P ∧ Q) ≡ ¬P ∨ ¬Q
¬(P ∨ Q) ≡ ¬P ∧ ¬Q
```

_Exercise:_ Let's check for logical equivalence using a truth table:

Rule 1:

| P   | Q   | (P ∧ Q) | ¬(P ∧ Q) |
| --- | --- | ------- | -------- |
| T   | T   |         |          |
| T   | F   |         |          |
| F   | T   |         |          |
| F   | F   |         |          |

| P   | Q   | ¬P  | ¬Q  | ¬P ∨ ¬Q |
| --- | --- | --- | --- | ------- |
| T   | T   |     |     |         |
| T   | F   |     |     |         |
| F   | T   |     |     |         |
| F   | F   |     |     |         |

Rule 2:

| P   | Q   | (P ∨ Q) | ¬(P ∨ Q) |
| --- | --- | ------- | -------- |
| T   | T   |         |          |
| T   | F   |         |          |
| F   | T   |         |          |
| F   | F   |         |          |

| P   | Q   | ¬P  | ¬Q  | ¬P ∧ ¬Q |
| --- | --- | --- | --- | ------- |
| T   | T   |     |     |         |
| T   | F   |     |     |         |
| F   | T   |     |     |         |
| F   | F   |     |     |         |

### Exclusive Or

Most programming languages don't have an exclusive or operator.

How do we represent exclusive or if we don't have this?

```
P is true AND Q is false OR P is false AND Q is true:

(P ∧ ¬Q) ∨ (¬P ∧ Q)
```

_Exercise:_ Let's check for logical equivalence using a truth table...
