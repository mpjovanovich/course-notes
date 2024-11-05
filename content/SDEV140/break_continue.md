---
title: Break and Continue
course: SDEV140
---

~/

- [Controlled Loops with "break" and "continue"](#controlled-loops-with-break-and-continue)
  - [Break](#break)
  - [Continue](#continue)

/~


# Controlled Loops with "break" and "continue"

## Break

We can "short-circuit" a loop using the `break` statement.

This will immediately exit the loop, much like a `return` statement exits a function.

```python
## Will only print 0-4
for i in range( 0, 10, 1 ):
    if i == 5:
        break
    print( i )
```

Example scenario:

- Searching for a value in a list. Once you've found the value, you don't need to keep searching. We will cover this when we do arrays.

## Continue

We can skip the rest of the loop body but not break out of the whole loop using the `continue` statement.

```python
## Will skip 5
for i in range( 0, 10, 1 ):
    if i == 5:
        continue
    print( i )
```

Example scenario:

- Loop through a course roster and print all students except those who have withdrawn. You'd use a `continue` statement to skip the withdrawn students.
