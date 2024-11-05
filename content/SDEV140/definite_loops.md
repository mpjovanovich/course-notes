---
title: Definite Loops
course: SDEV140
---

~.toc

- [Definite Loops](#definite-loops)
  - [Advantages of `for` Loops over `while` Loops](#advantages-of-for-loops-over-while-loops)
  - [`for` Loops Syntax](#for-loops-syntax)
  - [Alternate Step Values](#alternate-step-values)
  - [Default Values](#default-values)
  - [Signalling Unused Index Variable](#signalling-unused-index-variable)

/~

# Definite Loops

Used when we know ahead of time how many times the loop should run.

## Advantages of `for` Loops over `while` Loops

- Easier to understand
- No leftover loop control variables
- Compiler optimizations

## `for` Loops Syntax

In Python, the range function is:

- Start inclusive
- End exclusive

```python
for i in range( start, stop, step ):
    ## do some work
```

_Example:_

```python
## Print numbers 1-4
for i in range( 1, 5, 1 ):
    print( i )
```

## Alternate Step Values

Just as with `while` loops, we can use an alternate step value. We do this by changing the third argument.

```python
## What will this print?
for i in range( 0, 10, 2 ):
    print( i )
```

## Default Values

The `range` function may be called with one, two, or three arguments.

- The default step value is 1.
- The start value defaults to 0.

_In this course we will only use the three-argument form, because most other programming languages use this form._

**Two-argument form:**

Step by 1 if not specified.

```python
for i in range( start, stop ):
    print( i )
```

**One-argument form:**

Step by 1 and start at 0 if not specified.

```python
for i in range( stop ):
    print( i )
```

## Signalling Unused Index Variable

If we don't need the loop index variable, you may see the underscore (`_`) used as the variable name.

This is a convention to signal that the loop variable is unused, but it's not required.

```python
for _ in range( 0, 10, 1 ):
    ## Will print "Hello" 10 times
    print( "Hello" )
```