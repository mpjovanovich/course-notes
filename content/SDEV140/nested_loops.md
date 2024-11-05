---
title: Nested Loops
course: SDEV140
---

~.toc

- [Nested Loops](#nested-loops)
  - [Basic Syntax](#basic-syntax)
  - [Loop Variable Names](#loop-variable-names)
  - [Example: Multiplication Table](#example-multiplication-table)
    - [Version 1:](#version-1)
    - [Version 2](#version-2)
    - [Version 3](#version-3)
  - [Example: Pattern Printing](#example-pattern-printing)

/~

# Nested Loops

A **nested loop** is a loop inside another loop. We refer to the two loops as the **outer loop** and the **inner loop**.

## Basic Syntax

```python
## Outer loop
for i in range(0, 3, 1):
    ## Inner loop
    for j in range(0, 4, 1):
        print(f"i={i}, j={j}")
```

## Loop Variable Names

Common conventions for nested loop variables:

- Outer loop: `i`
- Inner loop: `j`
- Additional inner loops: `k`, `l`, `m`
- Or more descriptive names like `row`, `col` if working with tables or grids

## Example: Multiplication Table

### Version 1:

~.focusContent.demo

Let's create a multiplication table for the numbers 1 through 10.

```python
for i in range( 1, 11, 1 ):
    for j in range( 1, 11, 1 ):
        print( f"{i * j:3}", end=" " )
    print()
```

/~

### Version 2

~.focusContent.demo

We can clean it up using best practices by extracting the constants.

```python
START = 1
END = 10

for i in range( START, END + 1, 1 ):
    for j in range( START, END + 1, 1 ):
        print( f"{i * j:3}", end=" " )
    print()
```

/~

### Version 3

~.focusContent.demo

We can make this more dynamic by asking the user for the base and end numbers.

```python
## Get the starting and ending number for the multiplication table
start = int( input( "Enter the starting number: " ) )
end = int( input( "Enter the ending number: " ) )

## Print the multiplication table
for i in range( start, end + 1, 1 ):
    for j in range( start, end + 1, 1 ):
        print( f"{i * j:3}", end=" " )
    print()
```

/~

## Example: Pattern Printing

```python
## Prints a triangle pattern
for i in range(0, 5, 1):
    for j in range(0, i + 1, 1):
        print("*", end="")
    print()  ## New line after each row
```

Output:

```
*
**
***
****
*****
```
