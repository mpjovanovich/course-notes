---
title: Data Type Challenges and Limitations
course: SDEV120
---

~.toc

- [Data Type Challenges and Limitations](#data-type-challenges-and-limitations)
  - [Truncation](#truncation)
  - [Rounding Errors](#rounding-errors)
  - [Overflow](#overflow)
  - [Underflow](#underflow)

/~

# Data Type Challenges and Limitations

## Truncation

**Truncation** occurs when a number is cut off to fit within the available bits.

This can be due to:

- We can accurately represent the number, but not with the amount of bits in the data type.
- We can't accurately represent the number at all. E.g.
  - Sqaure root of 2 can't be represented exactly (irrational numbers)
  - 1/3 can't be represented exactly in decimal or binary (repeating decimal)
  - \*1/10 can't be represented exactly in binary.

~.focusContent.example

_Binary can only represent numbers that are a sum of powers of 2!_

Positions to the right of the decimal point are negative powers of 2

Remember that negative exponents are fractions:

- 2<sup>-1</sup> = 1/2<sup>1</sup> = 1/2
- 2<sup>-2</sup> = 1/2<sup>2</sup> = 1/4
- 2<sup>-3</sup> = 1/2<sup>3</sup> = 1/8
- ...

**Binary 1/2**

(0.1)<sub>2</sub> = 1/2.

**Binary 1/4**

(0.01)<sub>2</sub> = 1/4.

/~

~.focusContent.demo

_Case Study: Binary arithmetic errors_

```python
# Print 0.3 (base 10)
print(0.1 + 0.2)

# Print 0.1 (base 10) with 50 decimal places
print(f'{0.1:.50f}')
```

/~

~.focusContent.demo

_Case Study: Compounding truncation errors_

You are a programmer at a large corporation. You're asked to write a report calculating the tax for all purchases in the month of January. You write two versions of the code:

**Version 1**

```python
TAX_RATE = 0.3

# Loop and sum a bunch of numbers, multiplying by 0.1 each time:
total = 0

# We're pretending that "i" is the cost of some item
for i in range(10000):
    # Calculate the tax for each item
    item_tax = i * TAX_RATE

    # Add the tax to the total
    total = total + item_tax

# Print the total
print(f'Total: {total:.10f}')
```

**Version 2**

```python
TAX_RATE = 0.3
total = 0

# We're again pretending that "i" is the cost of some item
for i in range(10000):
    # Add the cost of the item to the total cost
    total = total + i

# Calculate the tax
total = total * TAX_RATE

# Print the total
print(f'Total: {total:.10f}')
```

Version 1 calculates the tax for each item and adds it to the total. Version 2 adds the cost of each item to the total and then calculates the tax at the end.

Does the output of the two programs match? Why or why not?

/~

**Real Life Consequences**

Depending on what type of application you are writing, truncation errors can be more or less serious. For a simple web app to help users track a habit, it doesn't matter if numbers are off by a small fraction.

In other cases errors can be more serious.

~.focusContent.example

[Case Study: Patriot Missile Failure](https://barrgroup.com/blog/lethal-software-defects-patriot-missile-failure)

> During the Gulf War, twenty-eight U.S. soldiers were killed and almost one hundred others were wounded when a nearby Patriot missile defense system failed to properly track a Scud missile launched from Iraq. The cause of the failure was later found to be a programming error in the computer embedded in the Patriot’s weapons control system.

> Time is kept continuously by the system's internal clock in tenths of seconds but is expressed as an integer... To predict where the Scud will next appear, time ... must be expressed as \[a\] real number.

> Because of the way the Patriot computer performs its calculations and the fact that its registers \[memory slots\] are only 24 bits long, the conversion of time from an integer to a real number cannot be any more precise than 24 \[bits\].

> The GAO reports that the problem was an accumulating linear error of .003433 seconds per 1 hour of uptime

> Specifically, after about 20 hours, the inaccurate time calculation becomes sufficiently large to cause the radar to look in the wrong place for the target. Consequently, the system fails to track and intercept the Scud

/~

## Rounding Errors

When rounding is done at intermediate steps in a calculation, the final result may be off by a small amount.

_Case Study: Intermediate Rounding Errors_

You are a scientist working on a physics project. In your final report you will need an output rounded to two decimal places. You write two versions of the code:

**Version 1**

```python
i = 0
total = 0
PI = 0.13159

while i < 1000:
    # Add PI to the total
    total = total + PI

    # Round to 2 decimal places
    total = round(total, 2)

    # Increment i to keep the loop going
    i = i + 1

print(total)
```

**Version 2**

```python
i = 0
total = 0
PI = 0.13159

while i < 1000:
    # Add PI to the total
    total = total + PI

    # Increment i to keep the loop going
    i = i + 1

# Round to 2 decimal places
total = round(total, 2)

print(total)
```

Version 1 rounds the total at each step, while Version 2 rounds the total at the end.

Do the two versions of the program produce the same output? Why or why not?

## Overflow

**Overflow** is when a value exceeds the maximum representable value of a data type.

If I have an 8-bit unsigned integer and I try to add 1 to 255, I will get an exception, or the value will wrap around to 0.

_We can't reproduce this in Python because it will automatically handle overflow._

## Underflow

**Underflow** is when a value is closer to zero than the smallest representable value that a data type can hold.

If I have a floating point number and end up with a result that is something like 0.000000...0001, I may lose precision.

_We can't reproduce this in Python because it will automatically handle underflow._
