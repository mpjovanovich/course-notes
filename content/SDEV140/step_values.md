---
title: Step Values
course: SDEV140
---

~toc

- [Step Values](#step-values)
  - [Off by One Errors](#off-by-one-errors)

/~

# Step Values

- We can **increment** or **decrement** the step value by a value other than 1.
- We don't have to use `i`, `j`, `k`, etc for the loop control variable, but it's a convention in many languages.

```python
## "Print even numbers" algorithm
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