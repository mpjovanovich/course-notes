---
title: Indefinite Loops
course: SDEV140
---

~.toc

- [Indefinite Loops](#indefinite-loops)
  - [`while` Loops](#while-loops)
  - [Priming Reads](#priming-reads)

/~

# Indefinite Loops

Used when we don't know how many times the loop should run.

The condition that controls whether we enter the loop is called the **entry condition**.

## `while` Loops

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

~.focusContent.demo

[Calculate Exponents](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/calculate_exponents.py)

/~

## Priming Reads

Note the problem with the below code snippet... the word "quit" is printed out at the end. Let's fix it.

```python
## ################################
## Bad program...
## ################################
name = ""
while name != "quit":
    name = input( "Enter a name or 'quit' to exit: " )
    ## ... do some work here, e.g. write to a file ...
    print( name )
```

- The first read of the sentinel value is called a **priming read**.
- This is done before the loop starts.

```python
## ################################
## Good program...
## ################################

## Priming read
name = input( "Enter a name or 'quit' to exit: " )
while name != "quit":
    print( name )
    ## ... do some work here, e.g. write to a file ...
    name = input( "Enter a name or 'quit' to exit: " )
```


~.focusContent.demo

**Program the following:**

Enter grades until the user enters -1. Calculate the sum and average.

/~
