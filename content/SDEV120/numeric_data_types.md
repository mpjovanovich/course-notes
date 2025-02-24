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

# Numeric Data Types

<figure>
  <img src="https://imgs.xkcd.com/comics/large_number_formats.png" alt="" style="width: 100%;height: auto;">
</figure>

When a program runs, it needs memory to store its data. Different types of data (like numbers or text) need different amounts of memory. We call these different types "data types".

Python makes coding easier by figuring out the data type for you automatically. For example:

```python
age = 42        # Python sees this is a number
name = "John"   # Python sees this is text
```

Other languages like C# require you to specify the data type. For example:

```csharp
// Tell C# this is a regular-sized number (int)
int age = 42;

// Tell C# this is a big number (long)
long distance = 1000000000000;
```

What's the difference between these number types? Why do we need different sizes? Let's explore how computers store numbers and why these differet types are available to us.

## Integer

**Integers** are **whole numbers**.

### Size and Range

We will refer to this table of ranges throughout the discussion...

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

As with integers, the number of bits used to represent a floating point number determines the **precision** of the number. The decimal point "floats" to the left or right to accommodate the value.

## Implementation Details

<figure>
  <img src="https://www.baseclass.io/newsletter/floating-point-numbers/layout.png" alt="" style="width: 100%;height: auto;">
</figure>

Floating point numbers are represented in computer memory using three parts, with a fixed number of bits for each part:

- **Sign Bit**: 0 for positive, 1 for negative
- **Mantissa**: the base value
- **Exponent**: we will multiply the mantissa by 2 raised to the power of this exponent

~.focusContent.example

Deconstruct the following 16-bit floating point number, assuming a sign bit, 5 bit exponent, and 10 bit mantissa:

```
0001001011000000
```

| Sign | Exponent | Mantissa   |
| ---- | -------- | ---------- |
| 0    | 00010    | 0101100000 |

Picking apart the pieces:

- Sign: 0 (positive)
- Exponent: 00010<sub>(2)</sub> = 2
- Mantissa: 1.1011000000<sub>(2)</sub>. _\*We implicitly add a 1 to the front of the mantissa._

So we now have:

- 1.1011000000<sub>(2)</sub> x 2<sup> 2</sup>

Because we're in base 2 we can simply move the decimal point 2 places to the right:

- 110.11000000<sub>(2)</sub>
- Our starting number was the floating point representation of the decimal number 6.75

/_Note: this is not the actual IEEE standard for floating point numbers; we did some simplification._/

/~
