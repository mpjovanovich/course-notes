---
title: Numeric Data Types
course: SDEV120
---

~.toc

- [Numeric Data Types](#numeric-data-types)
  - [Integer](#integer)
    - [Reference Table](#reference-table)
    - [Programming Example](#programming-example)
    - [Unsigned Integers](#unsigned-integers)
    - [Signed Integers](#signed-integers)
  - [Floating Point](#floating-point)
    - [Programming Example](#programming-example-1)
    - [Walkthrough](#walkthrough)
    - [Considerations:](#considerations)
  - [Important Consequences of Numeric Data Types](#important-consequences-of-numeric-data-types)
    - [Overflow](#overflow)
    - [Underflow](#underflow)
    - [Truncation](#truncation)
    - [Rounding Errors](#rounding-errors)

/~

<figure>
  <img src="https://imgs.xkcd.com/comics/large_number_formats.png" alt="" style="width: 100%;height: auto;">
</figure>

# Numeric Data Types

When computers are running a program, they must **allocate** (reserve / check out) memory to hold the data that they use. Data types tell the computer how much memory to allocate and how to interpret the data when they use it.

## Integer

**Integers** are **whole numbers**.

They are represented in computer memory by a fixed number of bits.

### Reference Table

| Data Type       | Number of Bits |                   Range (Exponents) |                                        Range (Friendly) |
| --------------- | -------------: | ----------------------------------: | ------------------------------------------------------: |
| 8-bit unsigned  |              8 |                  0 to 2<sup>8</sup> |                                                0 to 255 |
| 8-bit signed    |              8 |   -2<sup>7</sup> to 2<sup>7</sup>-1 |                                             -128 to 127 |
| 16-bit unsigned |             16 |                 0 to 2<sup>16</sup> |                                             0 to 65,535 |
| 16-bit signed   |             16 | -2<sup>15</sup> to 2<sup>15</sup>-1 |                                       -32,768 to 32,767 |
| 32-bit unsigned |             32 |                 0 to 2<sup>32</sup> |                                      0 to 4,294,967,295 |
| 32-bit signed   |             32 | -2<sup>31</sup> to 2<sup>31</sup>-1 |                         -2,147,483,648 to 2,147,483,647 |
| 64-bit unsigned |             64 |                 0 to 2<sup>64</sup> |                         0 to 18,446,744,073,709,551,615 |
| 64-bit signed   |             64 | -2<sup>63</sup> to 2<sup>63</sup>-1 | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |

### Programming Example

Most programming languages have fairly consistent naming conventions for data types. Here is an example in C#.

[https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types]()

```csharp
// Declare and initialize a signed 32 bit integer
int age = 42;

// Declare and initialize a signed 64 bit integer
long distance = 1000000000000;
```

\*Reminder: Python does not require you to declare the data type of a variable, but many other languages do. We will cover typed languages in more detail later.

### Unsigned Integers

**Unsigned integers** are positive whole numbers.

We have 2<sup>n</sup> possible values, where n is the number of bits in the data type.

An 8-bit unsigned integer can represent 2<sup>8</sup> = 256 values, 0 to 255.

_Quiz:_

| 1   | 0   | 0   | 0   | 0   | 0   | 0   | 1   |
| --- | --- | --- | --- | --- | --- | --- | --- |

<details>
    <summary>What does the above 8 bit unsigned integer represent?</summary>
    <div>
        <p>128 + 1 = 129</p>
    </div>
</details>

### Signed Integers

**Signed integers** can be positive or negative.

They use a **sign bit** to indicate the sign of the number. If the sign bit is 0, the number is positive. If the sign bit is 1, the number is negative.

- We lose one possible value because we have to represent the sign.
- The value range is now centered around 0.

_Quiz:_

| 1   | 0   | 0   | 0   | 0   | 0   | 0   | 1   |
| --- | --- | --- | --- | --- | --- | --- | --- |

<details>
    <summary>What does the above 8 bit signed integer represent?</summary>
    <div>
        <p>-1. The sign bit is 1, so the remaining portion (00000001) is negative.</p>
    </div>
</details>

## Floating Point

**Floating point** numbers are numbers that may have a fractional part (not whole numbers).

As with integers, the number of bits used to represent a floating point number determines the **precision** of the number.

<figure>
  <img src="https://www.baseclass.io/newsletter/floating-point-numbers/layout.png" alt="" style="width: 100%;height: auto;">
</figure>

They are represented in computer memory using three parts, with a fixed number of bits for each part:

- **Sign Bit**: 0 for positive, 1 for negative
- **Exponent**: tells us where the decimal point should be
- **Mantissa**: the value (that will have a decimal point somewhere in it)

### Programming Example

[https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types]()

```csharp
// Declare and initialize a 32 bit floating point number
float pi = 3.14159;

// Declare and initialize a 64 bit floating point number
double super_accurate_pi = 3.1415926535897932384626433832795028841971
```

### Walkthrough

Let's pretend that we have a 16-bit floating point number:

| Sign | Exponent | Mantissa   |
| ---- | -------- | ---------- |
| 0    | 01000    | 1001100000 |

Result:

- Sign: 0 (positive)
- Exponent: 1000<sub>(2)</sub> = 8
- Mantissa: 1.1001100000<sub>(2)</sub>. \*We implicitly add a 1 to the front of the mantissa.

So the result is:

- 1.1001100000<sub>(2)</sub> x 2<sup>8</sup>

_Note: This is a simplification, but it's fairly close to the actual IEEE standard - what your computer is doing._

### Considerations:

**Range**

Looking at the range of values for floating point numbers, we can see that it's constrained by where the decimal point can be placed.

Imagine a series of digits, 45017568. You can think of a floating point number as being able to represent the following values:

- 45017568
- 4501756.8
- 450175.68
- 45017.568
- 4501.7568
- 450.17568
- 45.017568
- 4.5017568
- 0.45017568

## Important Consequences of Numeric Data Types

### Overflow

**Overflow** is when a value exceeds the maximum representable value of a data type.

If I have an 8-bit unsigned integer and I try to add 1 to 255, I will get an exception, or the value will wrap around to 0.

_We can't reproduce this in Python because it will automatically handle overflow._

### Underflow

**Underflow** is when a value is closer to zero than the smallest representable value that a data type can hold.

If I have a floating point number and end up with a result that is something like 0.000000...0001, I may lose precision.

_We can't reproduce this in Python because it will automatically handle underflow._

### Truncation

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

_Case Study: Binary arithmetic errors_

```python
# Print 0.3 (base 10)
print(0.1 + 0.2)

# Print 0.1 (base 10) with 50 decimal places
print(f'{0.1:.50f}')
```

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

### Rounding Errors

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
