---
title: Selection
course: SDEV120
---

- [Decision](#decision)
  - [Single Alternative](#single-alternative)
    - [Example Algorithm](#example-algorithm)
      - [Pseudocode](#pseudocode)
      - [Flowchart](#flowchart)
    - [Python `if` Statement](#python-if-statement)
      - [Demo Programs](#demo-programs)
  - [Dual Alternative](#dual-alternative)
    - [Example Algorithm](#example-algorithm-1)
      - [Pseudocode](#pseudocode-1)
      - [Flowchart](#flowchart-1)
    - [Python `if, else` Statement](#python-if-else-statement)
      - [Demo Programs](#demo-programs-1)
  - [Nested Decision Structures](#nested-decision-structures)
    - [Example Algorithm](#example-algorithm-2)
      - [Pseudocode](#pseudocode-2)
      - [Flowchart](#flowchart-2)

# Decision

**Selection** is the process of taking an action based on a condition.

This decision must resolve to a **boolean** value, which is either `true` or `false`.

In other words, it must use an **boolean expression** to make the decision.

## Single Alternative

A **single alternative decision structure** yields control to a process only if some boolean expression is true.

![Single Alternative Decision](images/single_alternative.png)

### Example Algorithm

Charge Customer for Item - v1

#### Pseudocode

```plaintext
BEGIN
    Begin point of sales transaction
    Scan all items

    IF customer is a rewards member:
        Apply discount
    END IF

    Complete point of sales transaction
END
```

#### Flowchart

_Do in class. Keep for later._

### Python `if` Statement

Anything inside the code block (indented at the if’s level) will be evaluated only if the “if” expression evaluates to true.

The expression for the if statement can be arbitrarily complex - the only constraint is that it must evaluate to True or False.

```python
if x:
    # do something
```

Examples:

```python
if x:
if x == True:
if has_account == False:
if a > b:
if is_admin and current_page == 'User Management':
if is_admin == False or user_logged_in == False:
```

#### Demo Programs

Number is even

- Order processing logic:
  - Default ship date = 5 days from order date
  - If payment not received, ship date = 14 days from order date
  - If out of stock, ship date = 30 days from order date
  - If rush order, ship date = 1 days from order date

(We will do even or odd in a single program shortly.)

## Dual Alternative

A **dual alternative decision structure** yields control to one of two processes based on the truthfulness of a given boolean condition.

![Dual Alternative Decision](images/dual_alternative.png)

Dual alternative example: Open communication channel with landing aircraft.

- “Runway is clear?”
  - True - Direct aircraft to land.
  - False - Send aircraft to hold pattern.

### Example Algorithm

Charge Customer for Item - v2

#### Pseudocode

```plaintext
BEGIN
    Begin point of sales transaction
    Scan all items

    IF customer is a rewards member:
        Apply discount

    Get payment method

    IF payment method is credit card:
        Swipe card
    ELSE
        Take cash
    END IF

    End point of sales transaction
END
```

#### Flowchart

_Do in class._

### Python `if, else` Statement

```python
if x:
    # do something
else:
    # do something else
```

#### Demo Programs

_Do in class: Flowchart, code._

- Number is even/odd

## Nested Decision Structures

We can put decision structures into the flow of execution from another decision. These are called nested decisions.

- Is it cold outside?
  - Yes
    - Is it snowing?
      - Yes
        - Wear boots
      - No
        - Wear shoes
  - No
    - Wear sandals

### Example Algorithm

Charge Customer for Item - v3

#### Pseudocode

```plaintext
BEGIN
    Begin point of sales transaction
    Scan all items

    IF customer is a rewards member:
        Apply discount

    Get payment method

    IF payment method is credit card:
        Swipe card

        IF payment is declined:
            Deny payment
            Shelve items for restocking
    ELSE
        Take cash

        IF change is due:
            Give change
    END IF

    End point of sales transaction
END
```

#### Flowchart

_Do in class._

<!-- ## Fallthrough Decisions

We can chain together arbitrary amounts of decisions to represent “fallback logic” - if, else if, else if, … else.

We do not always need a final “else”.

![Fallthrough Decision](images/grading_program.png)

What happens if we don't use else if here?

### Example Algorithm

Charge Customer for Item - v3

#### Pseudocode

```plaintext
BEGIN
    Begin point of sales transaction
    Scan all items

    IF customer is a rewards member:
        Apply discount

    Get payment method

    IF payment method is credit card:
        Swipe card
    ELSE IF payment method is cash:
        Take cash
    ELSE
        Deny payment
        Shelve items for restocking
    END IF

    End point of sales transaction
END
```

#### Flowchart

_Do in class._

### Python `if, elif, else` Statement

```python
if x:
    # do something
elif y:
    # do something else
else:
    # do something else
```

#### Demo Programs

- [Percent to Grade Program](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/grade_calc_if_elif_else.py)
- Simple calculator

## Nested Decision Structures

We can put decision structures into the flow of execution from another decision. These are called nested decisions.

- Is it cold outside?
  - Yes
    - Is it snowing?
      - Yes
        - Wear boots
      - No
        - Wear shoes
  - No
    - Wear sandals

### Example Algorithm

Charge Customer for Item - v4

### Pseudocode

```plaintext
BEGIN
    Begin point of sales transaction
    Scan all items

    IF customer is a rewards member:
        Apply discount

    Get payment method

    IF payment method is credit card:
        Swipe card
    ELSE IF payment method is cash:
        Take cash
        If cash is greater than total:
            Give change
    END IF

    End point of sales transaction
END
```

### Flowchart

_Do in class._ -->
