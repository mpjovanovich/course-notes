---
title: Loops
course: SDEV120
---

- [Loops](#loops)
  - [Why Loops?](#why-loops)
- [Indefinite Loops](#indefinite-loops)
  - [`while` Loops](#while-loops)
  - [Step Values](#step-values)
  - [Off by One Errors](#off-by-one-errors)
  - [Nested Loops](#nested-loops)
  - [Sentinel Values](#sentinel-values)

# Loops

## Why Loops?

~~fig(70){https://timmousk.com/wp-content/uploads/2022/03/2-6.jpg}

- Loops are commonly used to:
  - repeat a block of code
  - iterate over a collection of data
- Loops can run zero to infinite times depending on the condition and inputs.
- **Iteration** = one execution of the loop body.

<!--
```
for some_start_value to some_end_value:
    # loop body
```

```
for each item in some_collection:
    # loop body
``` -->

<!-- # Definite Loops

Used when we know in advance how many times we want to iterate.

## `for` Loops

Used when we know exactly how many times the loop should run.

- Initialize loop control variable.
- Test loop control variable.
- Alter loop control variable.
- Test until the entry condition is false.

Python doesn't have a traditional `for` loop; most languages do.

### The range() Function

```python
## There are three "overloads" for the range function, so we can
## Write a python loop in different ways. These are all the same:
for i in range( 0, 10, 1 ):
      ## do some work ten times
for i in range( 0, 10 ):
      ## do some work ten times
for i in range( 10 ):
    ## do some work ten times
```

- Range returns a list of numbers.
- We can then iterate over the list.
- The i is optional.
  - ```python
    for _ in range( 10 ):
        ## do some work ten times
    ```

<p class="demo">Demos:</p>

[Harmonic Series](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/harmonic_series_loop.py)

[Print Multiples](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/print_multiples.py)

### "C style" Syntax

Many languages use "C style" syntax for loops, as shown below.

For this reason I require that you call the range function shown above with all three arguments.

```cpp
#include <stdio.h>

int main() {

    /////////////////////////////////////////
    // Prints numbers 0-9
    /////////////////////////////////////////
    for (int i = 0; i < 10; i++) {
        // A print statement in C
        printf("%d\n", i);
    }

    return 0;
}
```

### Changing the Step

- The **counter** does not have to increment / decrement by one.
- We can change the **step size**.

```python
for i in range( 10, 101, 10 ):
    ## do some work using the numbers 10, 20, ..., 100
```
-->

# Indefinite Loops

Used when we don't know how many times the loop should run.

## `while` Loops

**Python**

```python
while some_condition == True:
    ## do some work
```

<p class="demo">Demos:</p>

- Print multiples of x up to n
- Harmonic series: 1 + 1/2 + 1/3 + 1/4 + 1/5 + ... + 1/n
- Base numbering table: n^0, n^1, n^2, n^3, n^4, n^5...

[Calculate Exponents](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/calculate_exponents.py)

## Step Values

- We can **increment** or **decrement** the step value by a value other than 1.
- We don't have to use `i`, `j`, `k`, etc for the loop control variable, but it's a convention in many languages.

```python
## Prints 0, 2, 4, 6, 8
i = 0
while i < 10:
    print( i )
    i = i + 2
```

```python
## Prints 10, 9, 8, ..., 1
i = 10
while i > 0:
    print( i )
    i = i - 1
```

## Off by One Errors

- Be mindful of the inclusiveness of the range function.
- **Start inclusive** and **end exclusive**.
- [start, end)
- When using while, also be mindful of < vs <= and > vs >=.

<!--
```python
## Prints 0-9
for i in range( 0, 10, 1 ):
    print( i )
```
-->

```python
## Prints 1-9, not 1-10
i = 1
while i < 10:
    print( i )
    i += 1
```

## Nested Loops

- A **nested loop** is a loop inside another loop.
- The inner loop is executed completely for each iteration of the outer loop.
- The loop body is offset by indenting the code block for the body

```python
## Nested while loop

# OUTER LOOP
i = 0
while i < 3:
    # INNER LOOP
    j = 0
    while j < 2:
        print( i, j )
        j += 1
    i += 1

# OUTPUT: 0 0, 0 1, 1 0, 1 1, 2 0, 2 1
```

<!-- # Controlled Loops with "break" and "continue"

## Break

We can "short-circuit" a loop using the `break` statement.

This will immediately exit the loop, much like a `return` statement exits a function.

```python
## Will only print 0-4
i = 0
while i < 10:
    if i == 5:
        break
    print( i )
    i += 1
```

Example scenario:

- Searching for a value in a list. Once you've found the value, you don't need to keep searching. We will cover this when we do arrays.

## Continue

We can skip the rest of the loop body but not break out of the whole loop using the `continue` statement.

```python
## Will skip 5
for i in range( 10 ):
    if i == 5:
        continue
    print( i )
```
-->

## Sentinel Values

A **sentinel value** is a special value that signals the end of a loop.

```python
## Sentinel value using -1 to indicate the end of the loop

```

~~demo{

[Name Sentinal](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/name_sentinal.py)

}

A main use case is to allow the user to enter data until they are done...

```python
## Sentinal value
name = ""
while name != "done":
    name = input( "Enter a name or 'done' to quit: " )
    print( name )
```
