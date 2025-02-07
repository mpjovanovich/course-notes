---
title: Syntax and Expressions
course: SDEV120
---

~.toc

- [Syntax and Expressions](#syntax-and-expressions)
  - [Syntax](#syntax)
    - [Natural Language Syntax](#natural-language-syntax)
    - [Programming Language Syntax](#programming-language-syntax)
  - [Literals and Variables](#literals-and-variables)
  - [Operators](#operators)
    - [Comparison Operators in Python](#comparison-operators-in-python)
    - [Logical Operators in Python](#logical-operators-in-python)
  - [Expressions](#expressions)

/~

# Syntax and Expressions

In this lecture, we'll explore how to build a programming language from the ground up. To do so we'll need to understand the basic components of code: syntax, literals, variables, operators, expressions, and statements.

## Syntax

**Syntax** is the set of rules that defines how symbols can be arranged to form valid code.

### Natural Language Syntax

English has its own set of rules: Capitalization, punctuation, sentence structure, etc.

~.focusContent.example

**Good English:**

"I went to the store."

**Bad English:**

"\*went STore!! (tothe) saturday I,"

/~

### Programming Language Syntax

Each programming language has its own syntax.

~.focusContent.example

```python
x = 5 # Synactically correct
5 = x # Syntax error - we assign from right to left
```

/~

<!-- ## Literals and Variables

The most basic components of code are literals and variables.

- **Literals** are fixed values.
- **Variables** (and constants) are placeholders for values.

```python
# Say "hello" using a string literal:
print("hello")

# Assign a string literal to a variable, then use it to say "hello":
greeting = "hello"
print(greeting)
``` -->

## Operators

Code is primarily made up of operators, operands, expressions, and statements.

**Operators** are symbols that perform operations on values.

- Arithmetic operators: `+`, `-`, `*`, `/`, `//`, `%`, `**`
- Comparison operators: `==`, `!=`, `<`, `>`, `<=`, `>=`
- Logical operators: `and`, `or`, `not`

**Operands** are the values that operators act on.

- `5`, `x`, `True`

### Comparison Operators in Python

A comparison always returns a boolean value, either `True` or `False`.

| Operator | Description              |
| -------- | ------------------------ |
| ==       | Equal to                 |
| !=       | Not equal to             |
| <        | Less than                |
| >        | Greater than             |
| <=       | Less than or equal to    |
| >=       | Greater than or equal to |

```python
# Comparing two literals in Python
print(5 == 5) # True
print(5 != 5) # False
```

### Logical Operators in Python

| Operator | Description |
| -------- | ----------- |
| and      | conjunction |
| or       | disjunction |
| not      | negation    |

```python
print( True and False ) # False
print( True or False ) # True
print( not True ) # False
```

## Expressions

Expressions are combinations of literals, variables, and operators that evaluate to a value.

```python
# Returns 2
3 - 1

# Returns 1 (single value can be an expression)
1

# Returns value of x + value of y
x + y

# Returns True if x is greater than 4, False if not
x > 4
```
