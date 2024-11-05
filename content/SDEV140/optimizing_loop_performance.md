---
title: Optimizing Loop Performance
course: SDEV140
---

~.toc


/~

# Optimizing Loop Performance

## Performance Analysis

We can use **Big O notation** to analyze the performance of algorithms.

We say that a loop runs through `n` iterations, so...

- A single loop that runs through `n` iterations has a time complexity of `O(n)`.
- A nested loop that runs through `n` iterations has a time complexity of `O(n^2)`.

## Strategies

- Short circuit compound conditions
- Minimize the number of iterations.
- Reduce the amount of work done in each iteration.

### Example: Most Common Outcomes First

If you have an `and` or `or` condition, and you know that one of the conditions is likely or unlikely, put the outcome first that will reduce the number of comparisons.

Remember your truth tables:

- `and`: if we hit a false, the second half doesn't need to be checked
- `or`: if we hit a true, the second half doesn't need to be checked

~.focusContent.demo

In this example we give special achievement awards to elementary students who have an A+ grade and perfect attendance.

Most students don't have an A+ grade, so check that first. Programming languages are written so that they won't check "perfect attendance" unless the student has an A+.

```python
grade = int(input("Enter your grade (0-100): "))
perfect_attendance = input("Did you have perfect attendance? (y/n): ") == "y"

if grade >= 98 and perfect_attendance:
    print("You get a special achievement award!
``` 
/~


~.focusContent.demo

In this example users are prompted to reset the password if it's past the expiration date or if a "force reset" flag is set by an administrator.

In most cases it will be the expiration date that triggers the password reset, so check that first.

```python
password_expired = input("Has your password expired? (y/n): ") == "y"
force_reset = input("Was your password reset by an administrator? (y/n): ") == "y"

if password_expired or force_reset:
    print("You must reset your password.")
```

/~

### Example: Quit While You're Ahead

If there's no need to continue iterating, then exit the loop early.

~.focusContent.demo

Here's a program that searches for a value in a list. Once we find the value, we can quit early.

Let's try searching for 'd', then for 'Z'. How many iterations does each take?

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

If you can do an operation outside the loop instead of inside, then do it outside.

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

## Premature Optimization

Having gone through these strategies, you might be tempted to optimize every part of your code...

<span style="font-size: 2em; color: red; font-weight: bold; text-transform: uppercase; text-decoration: underline; background-color: yellow; padding: 10px; border: 5px dashed red;">**DON'T DO IT.**</span>

**You should only optimize code that is causing performance issues.**

In almost all cases, a focus on code clarity and readability will produce a more maintainable program that performs better.

When in doubt: **measure.** Is your "improvement" actually an improvement?

### Measuring Performance

Later in your career you may consider using performance analysis techniques to identify bottlenecks in your code.

- Log files
- Timers
- Memory / CPU / Network usage
- Profilers that track execution paths (e.g. find number of times a function is called)
