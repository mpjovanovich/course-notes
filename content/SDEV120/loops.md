---
title: Loops
course: SDEV120
---

~.toc

- [Loops](#loops)
  - [Why Loops?](#why-loops)
- [Types of loops](#types-of-loops)
  - [`while` Loops](#while-loops)
  - [Step Values](#step-values)
  - [Off by One Errors](#off-by-one-errors)
  - [Nested Loops](#nested-loops)
  - [Sentinel Values](#sentinel-values)
    - [Priming Read](#priming-read)

/~

# Loops

## Why Loops?

<figure>
 <img src="https://timmousk.com/wp-content/uploads/2022/03/2-6.jpg" alt="" style="width: 70%;height: auto;">
</figure>

- Loops are commonly used to:
  - repeat a block of code
  - iterate over a collection of data
- Loops can run zero to infinite times depending on the condition and inputs.
- **Iteration** = one execution of the loop body.

# Types of loops

**Definite Loops**: We know how many times the loop should run.

**Indefinite Loops**: We don't know how many times the loop should run.

Any definite loop can be written as an indefinite loop, so we will focus on indefinite loops.

## `while` Loops

**Python**

```python
while some_condition == True:
    ## do some work
```

_Example:_

```python
## Print numbers 1-4
i = 1
while i <= 4:
    print( i )

    ## Increment the loop control variable
    ## If we forget this, the loop will run forever (infinite loop)
    i += 1
```

_Do in class: flowchart for the above code._

~.focusContent.demo

- Print multiples of x up to n (x _ 1, x _ 2, x _ 3, ..., x _ n)
- Harmonic series: 1/1 + 1/2 + 1/3 + 1/4 + 1/5 + ... + 1/n
- Base numbering table: n^0, n^1, n^2, n^3, n^4, n^5...

/~

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

Flowchart for the above:

<figure>
  <img src="images/nested_flowchart.svg" alt="" style="width: 100%;height: auto;">
</figure>

## Sentinel Values

A **sentinel value** is a special value that signals the end of a loop.

A main use case is to allow the user to enter data until they are done...

```python
## Sentinal value
name = ""
while name != "quit":
    name = input( "Enter a name or 'quit' to exit: " )

    ## A real program might do some work here, like add to a database...

    print( name )
```

### Priming Read

Note the problem with the above code snippet... the word "quit" is printed out at the end. Let's fix it.

- The first read of the sentinel value is called a **priming read**.
- This is done before the loop starts.

```python
## Sentinal value with priming read
name = input( "Enter a name or 'quit' to exit: " )
while name != "quit":
    print( name )

    ## We check our loop exit condition again at the end of the loop
    name = input( "Enter a name or 'quit' to exit: " )
```

_Examples:_

- Enter grades until the user enters -1. Calculate the sum and average.
