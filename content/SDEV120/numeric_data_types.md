---
title: Numeric Data Types
course: SDEV120
---

~~wrapHtml(div,schedule){

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

}

~~fig{https://imgs.xkcd.com/comics/large_number_formats.png}

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

~~fig{https://www.baseclass.io/newsletter/floating-point-numbers/layout.png}

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

**Precision**

Some fractions in decimal notation can't be represented exactly in binary. For example, 0.1 can't be represented exactly in binary.

When the computer does math with floating point numbers, the part of the number that can't fit in the available bits is **truncated**. This can lead to **rounding errors**.

_Case Study: Why am I seeing this weird number???_

```python
print(0.1 + 0.2)
```

_Case Study: But aren't these the same???_

You are a programmer at a large corporation. You're asked to write a report calculating the tax for all purchases in the month of January. You write two versions of the code:

**v1**

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

**v2**

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

Does the output of the two programs match? Why or why not?
