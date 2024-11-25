---
title: File Parsing
course: SDEV140
---

~.toc

- [File Parsing](#file-parsing)
  - [Validating Data](#validating-data)
  - [Cleaning Data](#cleaning-data)
  - [Example: Parsing a CSV File](#example-parsing-a-csv-file)
  - [Useful Functions](#useful-functions)
  - [Shorthand Conditionals](#shorthand-conditionals)
  - [Truthy / Falsy Values](#truthy--falsy-values)
  - [Validation Patterns: Guard Clauses](#validation-patterns-guard-clauses)
  - [Third Party Libraries](#third-party-libraries)

/~

# File Parsing

**File parsing** is the process of extracting and transforming data from a file into a usable format.

We should not trust data in a file to conform to our expectations.

## Validating Data

**Data validation** is the process of ensuring that data is correct and useful.

- Check for empty lines
- Check for missing fields
- Check data types
- Check data ranges
- Check for invalid characters
- Check for bad data formats

## Cleaning Data

Data should be validated and cleaned.

- **Trim** / **strip** whitespace
  - Remove tabs, spaces, and newlines from the beginning and end of a string
  - These terms are used interchangeably depending on the programming language
- **Normalize** / **standardize** data
  - Convert data to a consistent format
  - For example,
    - Convert all text to lowercase for case-insensitive comparisons
    - Convert dates to a consistent format
    - ...
- Remove **duplicates**

## Example: Parsing a CSV File

~.focusContent.exercise

Suppose we have a CSV file with the following data:

```csv
Name,Email,Phone
Alice,alice@mail.ez,555-555-1234
Bob,bob@mail,555-555-5678
Alice,alice@mail.ez,555-555-1234
Jane, jane@mail.ez,555-555-9012
Tom,tom@mail.ez,

Zane,zane@mail.ez,555-3456
```

What are some potential issues with this data?

/~

## Useful Functions

| Function     | Description                                              |
| ------------ | -------------------------------------------------------- |
| `strip()`    | Remove whitespace from the beginning and end of a string |
| `split()`    | Split a string into a list of strings using a delimiter  |
| `len()`      | Get the length of a string or list                       |
| `contains()` | Check if a string contains a substring                   |

## Shorthand Conditionals

We do not have to write `== True` within a conditional statement. It is implied (assumed to be there) if you leave it out.

```python
## These are equivalent:
if has_permission == True:
if has_permission:
```

## Truthy / Falsy Values

Many languages such as Python have a concept of **truthy** and **falsy** values.

It's a syntax feature that allows for concise conditional statements.

- An empty string is considered `False`
- A non-empty string is considered `True`

```python
## These are equivalent:
if name != "":
if name:
```

```python
## These are also equivalent:
if name == "":
if not name:
```

~.focusContent.example

Let's rewrite a code snippet using truthy / falsy values.

**Before:**

```python
name = input("Enter your name: ")
if name != "":
    print(f"Hello, {name}!")
else:
    print("You must enter a name.")
```

**After:**

```python
name = input("Enter your name: ")
if name:
    print(f"Hello, {name}!")
else:
    print("You must enter a name.")
```

/~

## Validation Patterns: Guard Clauses

It is often useful to use **guard clauses** to validate data.

A guard clause is a conditional statement that returns early if the condition is not met. These can be used in loops via the `break` or `continue` statements.

~.focusContent.example

In the code snippet below, we will parse a CSV file line by line.

Several uses of guard clauses are demonstrated, as shown in the code comments.

```python
## Parsing a CSV file...
for line in file:
    ## Strip whitespace from the line
    line = line.strip()

    ## Guard: Skip empty lines
    ## (Remember: An empty string is considered False)
    if not line:
        continue

    ## Get the items in the line
    line_items = line.split(",")

    ## Guard: Validate the number of items in the line
    if len(line_items) != 3:
        print(f"Invalid number of items in line: {line}")
        continue

    ## Assume first item is a record number
    record_number = line_items[0]

    ## Guard: Validate the record number is not empty
    if not record_number:
        print(f"Invalid record number: {record_number}")
        continue

    ## Guard: Validate the record number is a number
    if not record_number.isdigit():
        print(f"Invalid record number: {record_number}")
        continue

    ## ... continue processing the line
```

/~

## Third Party Libraries

Many programming languages have third-party libraries that can help with file parsing.

- Python: `csv`, `pandas`, `openpyxl`, `xlrd`...

No need to reinvent the wheel. Use these libraries when appropriate.
