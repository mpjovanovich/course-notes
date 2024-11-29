---
title: Numeric Data Types
course: SDEV120
---

~.toc

- [Numeric Data Types](#numeric-data-types)
  - [Integer](#integer)
    - [Example Usage](#example-usage)
    - [Size and Range](#size-and-range)
    - [Unsigned Integers](#unsigned-integers)
    - [Signed Integers](#signed-integers)
  - [Floating Point](#floating-point)
    - [Example Usage](#example-usage-1)
    - [Size and Range](#size-and-range-1)

/~

<figure>
  <img src="https://imgs.xkcd.com/comics/large_number_formats.png" alt="" style="width: 100%;height: auto;">
</figure>

# Numeric Data Types

When computers are running a program, they must **allocate** (reserve / check out) memory to hold the data that they use. Data types tell the computer how much memory to allocate and how to interpret the data when they use it.

## Integer

**Integers** are **whole numbers**.

They are represented in computer memory by a fixed number of bits.

### Example Usage

Most programming languages have fairly consistent naming conventions for data types. Here is an example in C#.

```csharp
// Declare and initialize a signed 32 bit integer
int age = 42;

// Declare and initialize a signed 64 bit integer
long distance = 1000000000000;
```

\*Reminder: Python does not require you to declare the data type of a variable, but many other languages do. We will cover typed languages in more detail later.

### Size and Range

| Data Type       | Number of Bits |                   Range (Exponents) |                                        Range (Friendly) |
| --------------- | -------------: | ----------------------------------: | ------------------------------------------------------: |
| 8-bit unsigned  |              8 |              0 to 2<sup>8</sup> - 1 |                                                0 to 255 |
| 8-bit signed    |              8 |   -2<sup>7</sup> to 2<sup>7</sup>-1 |                                             -128 to 127 |
| 16-bit unsigned |             16 |             0 to 2<sup>16</sup> - 1 |                                             0 to 65,535 |
| 16-bit signed   |             16 | -2<sup>15</sup> to 2<sup>15</sup>-1 |                                       -32,768 to 32,767 |
| 32-bit unsigned |             32 |             0 to 2<sup>32</sup> - 1 |                                      0 to 4,294,967,295 |
| 32-bit signed   |             32 | -2<sup>31</sup> to 2<sup>31</sup>-1 |                         -2,147,483,648 to 2,147,483,647 |
| 64-bit unsigned |             64 |             0 to 2<sup>64</sup> - 1 |                         0 to 18,446,744,073,709,551,615 |
| 64-bit signed   |             64 | -2<sup>63</sup> to 2<sup>63</sup>-1 | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |

### Unsigned Integers

**Unsigned integers** are positive whole numbers.

We have 2<sup>n</sup> possible values, where n is the number of bits in the data type.

An 8-bit unsigned integer can represent 2<sup>8</sup> = 256 values, 0 to 255.

~.focusContent.exercise.mathTable.hideHeaderRow

|     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 0   | 0   | 0   | 0   | 0   | 0   | 1   |

<details>
    <summary>What does the above 8 bit unsigned integer represent?</summary>
    <div>
        <p>128 + 1 = 129</p>
    </div>
</details>

/~

### Signed Integers

**Signed integers** can be positive or negative.

They use a **sign bit** to indicate the sign of the number. If the sign bit is 0, the number is positive. If the sign bit is 1, the number is negative.

- We lose one possible value because we have to represent the sign.
- The value range is now centered around 0.

~.focusContent.exercise.mathTable.hideHeaderRow

|     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 0   | 0   | 0   | 0   | 0   | 0   | 1   |

<details>
    <summary>What does the above 8 bit signed integer represent?</summary>
    <div>
        <p>-1. The sign bit is 1, so the remaining portion (00000001) is negative.</p>
    </div>
</details>

/~

## Floating Point

**Floating point** numbers are numbers that may have a fractional part (not whole numbers).

As with integers, the number of bits used to represent a floating point number determines the **precision** of the number.

<figure>
  <img src="https://www.baseclass.io/newsletter/floating-point-numbers/layout.png" alt="" style="width: 100%;height: auto;">
</figure>

They are represented in computer memory using three parts, with a fixed number of bits for each part:

- **Sign Bit**: 0 for positive, 1 for negative
- **Mantissa**: the base value
- **Exponent**: we will multiply the mantissa by 2 raised to the power of this exponent

~.focusContent.example

Deconstruct the following 16-bit floating point number:

```
0010010011000000
```

| Sign | Exponent | Mantissa   |
| ---- | -------- | ---------- |
| 0    | 01000    | 1001100000 |

Picking apart the pieces:

- Sign: 0 (positive)
- Exponent: 1000<sub>(2)</sub> = 8
- Mantissa: 1.1001100000<sub>(2)</sub>. _\*We implicitly add a 1 to the front of the mantissa._

So we now have:

- 1.1001100000<sub>(2)</sub> x 2<sup>8</sup>

Because we're in base 2 we can simply move the decimal point 8 places to the right:

- 11001100.0<sub>(2)</sub>

_Note: This is a simplification, but it's fairly close to the actual IEEE standard - what your computer is doing._

/~

### Example Usage

Below is an example of how to declare and initialize floating point numbers in C#.

```csharp
// Declare and initialize a 32 bit floating point number
float PI = 3.14159;

// Declare and initialize a 64 bit floating point number
double SUPER_ACCURATE_PI = 3.1415926535897932384626433832795028841971
```

### Size and Range

Imagine a series of digits, 45017568. You can think of a floating point number as (not exactly, but roughly) being able to represent the following values:

- 45017568
- 4501756.8
- 450175.68
- 45017.568
- 4501.7568
- 450.17568
- 45.017568
- 4.5017568
- 0.45017568

Looking at the range of values for floating point numbers, we can see that it's constrained by where the decimal point can be placed.

In this case we trade off precision for range. Using the above example we could not represent "45017568.84501756"
