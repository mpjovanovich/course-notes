---
title: Data Types
course: SDEV120
---

~~wrapHtml(div,schedule){

- [Data Types](#data-types)
  - [Checking Data Type in Python](#checking-data-type-in-python)
  - [Numeric Data Types](#numeric-data-types)
  - [Text Data Types](#text-data-types)
  - [Boolean Data Types](#boolean-data-types)
  - [Compound Data Types](#compound-data-types)

}

# Data Types

- A **data type** tells the compiler or interpreter what type of data a variable / constant is allowed and intended to hold.
- Lets the computer know how to store and handle the data at a low level.

## Checking Data Type in Python

```python
x = 5
print(type(x))  # <class 'int'>

name = "Dave Duncan"
print(type(name))  # <class 'str'>
```

## Numeric Data Types

- **Integer** (int) - whole numbers
  - -11
  - 0
  - 42
- **Floating Point** (float) - numbers with a decimal point
  - 3.14
  - 0.0
  - -1.333333333

## Text Data Types

Use single or double quotes to create a string.

- **Character** (char) - single letter, number, or symbol
  - 'a'
  - 'Z'
  - '7'
  - '!'
- **String** (str) - sequence of characters
  - "Hello, World!"
  - "SDEV120"
  - "123" (note: this is a string, not an integer b/c of the quotes)

## Boolean Data Types

- **Boolean** (bool) - True or False
- Capitalize the first letter in Python
- Often start with "is"

Best to use positive names for boolean variables to avoid double negatives.

_Good:_

```python
is_remote_student = True
is_admin = False
has_positive_balance = True
```

_Bad:_

```python
not_remote_student = False
not_admin = True
has_negative_balance = False
```

## Compound Data Types

- Many other data types are built from these basic types.
  - Date and Time
  - Lists
  - Dictionaries
  - Tuples
  - etc.

We will use only primitive (not compound) data types in this course.
