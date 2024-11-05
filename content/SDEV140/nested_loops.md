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
  - [Performance Analysis](#performance-analysis)
  - [Optimizing Loop Performance](#optimizing-loop-performance)
    - [Example: Quit While You're Ahead](#example-quit-while-youre-ahead)
  - [Example: Don't Work Harder, Work Smarter...](#example-dont-work-harder-work-smarter)

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

## Performance Analysis

We can use **Big O notation** to analyze the performance of algorithms.

We say that a loop runs through `n` iterations, so...

- A single loop that runs through `n` iterations has a time complexity of `O(n)`.
- A nested loop that runs through `n` iterations has a time complexity of `O(n^2)`.

## Optimizing Loop Performance

- Minimize the number of iterations.
- Reduce the amount of work done in each iteration.

### Example: Quit While You're Ahead

~.focusContent.demo

Search for a value in a list. Once we find the value, we can quit early.

Let's try searchnig for 'd', then for 'Z'. How many iterations does each take?

```python
# We usually use -1 to indicate "not found"
found_index = -1
search_string = "Super duper really long string that we don't want to search all the way through."
search_value = input( "Enter the letter to search for: " )

for letter in search_string:
    if letter == search_value:
        found_index = search_string.index( letter )
        # We can quit early because we found the value
        # What happens if we remove the break statement?
        break

print( f"Found {search_value} at index {found_index}" )
```

/~

## Example: Don't Work Harder, Work Smarter...

~.focusContent.demo

Let's say we have a program that fetches item quantities from a database, then calculates prices based on the quantities.

In the examples below we're just using dummy data, so we're not concerned about the actual results. We're only concerned with the number of operations being performed.

Both programs will get the correct results, but one is better than the other.

**Version 1 - Inefficient:**
```python
import time

def get_quantity():
    # Simulating a slow database call
    time.sleep(0.1)
    return 5

# Calculate prices for 5 items
for item in range(5):
    # We're fetching the same quantity multiple times unnecessarily
    qty = get_quantity()
    price = qty * 10
    print(f"Item {item}: ${price}")
```

**Version 2 - Optimized:**
```python
import time

def get_quantity():
    # Simulating a slow database call
    time.sleep(0.1)
    return 5

# Fetch quantity once, outside the loop
qty = get_quantity()

# Calculate prices for 5 items
for item in range(5):
    price = qty * 10
    print(f"Item {item}: ${price}")
```

In Version 1, we make 5 database calls (one per item).
In Version 2, we make only 1 database call.

If each database call takes 0.1 seconds:
- Version 1 takes: 0.5 seconds (5 calls)
- Version 2 takes: 0.1 seconds (1 call)

This is a common optimization pattern:
1. Identify operations that don't need to be repeated
2. Move them outside the loop
3. Store the results in variables
4. Use the stored results inside the loop

/~
