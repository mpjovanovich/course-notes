---
title: Converting Between Bases
course: SDEV120
---

~.toc

- [Converting Between Bases](#converting-between-bases)
  - [Positional Notation](#positional-notation)
  - [Binary Numbers in Computing](#binary-numbers-in-computing)
    - [Why are they Used?](#why-are-they-used)
    - [Convert: Binary to Decimal](#convert-binary-to-decimal)
      - [Example 1](#example-1)
      - [Example 2](#example-2)
    - [Convert: Decimal to Binary](#convert-decimal-to-binary)
      - [Example 1](#example-1-1)
      - [Example 2](#example-2-1)
    - [Binary Addition](#binary-addition)
      - [Example 1](#example-1-2)
      - [Example 2](#example-2-2)
  - [Hexadecimal Numbers in Computing](#hexadecimal-numbers-in-computing)
    - [Convert: Hex to Binary](#convert-hex-to-binary)
      - [Example 1](#example-1-3)
      - [Example 2](#example-2-3)

/~

# Converting Between Bases

## Positional Notation

Each digit in a number represents a power of its base.

We follow an algorithm to get the result:

1. Multiply each digit by the base raised to the power of its position.
2. Add the results.

_Note: any number raised to the power of 0 is 1._

**Example**

Let's remind ourselves how base 10 works:

(324)<sub>10</sub> =

|     | 3                   |     | 2                   |     | 4                   |
| --- | ------------------- | --- | ------------------- | --- | ------------------- |
| =   | 3 \* 10<sup>2</sup> | +   | 2 \* 10<sup>1</sup> | +   | 4 \* 10<sup>0</sup> |
| =   | 3 \* 100            | +   | 2 \* 10             | +   | 4 \* 1              |
| =   | 300                 | +   | 20                  | +   | 4                   |

## Binary Numbers in Computing

Numbers in base 2 are called **_binary_** numbers: { 0, 1 }

### Why are they Used?

- Digital signal can be in one of two states:
  - **_Off = 0_**
  - **_On = 1_**

### Convert: Binary to Decimal

We simply follow the positional notation algorithm.

#### Example 1

Convert the binary number to decimal: (111)<sub>2</sub>

|     | 1                  |     | 1                  |     | 1                  |
| --- | ------------------ | --- | ------------------ | --- | ------------------ |
| =   | 1 \* 2<sup>2</sup> | +   | 1 \* 2<sup>1</sup> | +   | 1 \* 2<sup>0</sup> |
| =   | 1 \* 4             | +   | 1 \* 2             | +   | 1 \* 1             |
| =   | 4                  | +   | 2                  | +   | 1                  |

= (7)<sub>10</sub>

#### Example 2

Convert the binary number to decimal: (1101)<sub>2</sub>

|     | 1                  |     | 1                  |     | 0                  |     | 1                  |
| --- | ------------------ | --- | ------------------ | --- | ------------------ | --- | ------------------ |
| =   | 1 \* 2<sup>3</sup> | +   | 1 \* 2<sup>2</sup> | +   | 0 \* 2<sup>1</sup> | +   | 1 \* 2<sup>0</sup> |
| =   | 1 \* 8             | +   | 1 \* 4             | +   | 0 \* 2             | +   | 1 \* 1             |
| =   | 8                  | +   | 4                  | +   | 0                  | +   | 1                  |

= (13)<sub>10</sub>

### Convert: Decimal to Binary

To convert a decimal number to binary, we follow an algorithm:

1. Divide the decimal number by 2.
2. Record the remainder.
3. Repeat steps 1 and 2 until the quotient is 0.
4. The binary number is the remainders in reverse order.

#### Example 1

Convert the decimal number to binary: 12<sub>(10)</sub>

| Division | Quotient | Remainder | Binary Digit |
| :------: | :------: | :-------: | :----------: |
|  12 / 2  |    6     |     0     |      0       |
|  6 / 2   |    3     |     0     |      0       |
|  3 / 2   |    1     |     1     |      1       |
|  1 / 2   |    0     |     1     |      1       |

Answer: **_(1100)<sub>2</sub>_**

#### Example 2

Convert the decimal number to binary: (21)<sub>10</sub>

| Division | Quotient | Remainder | Binary Digit |
| :------: | :------: | :-------: | :----------: |
|  21 / 2  |    10    |     1     |      1       |
|  10 / 2  |    5     |     0     |      0       |
|  5 / 2   |    2     |     1     |      1       |
|  2 / 2   |    1     |     0     |      0       |
|  1 / 2   |    0     |     1     |      1       |

Answer: **_(10101)<sub>2</sub>_**

### Binary Addition

Same as decimal addition except - When carrying numbers into the next column we represent them in binary form.

When adding a column you can either have (depending on remainder and row values):

- zero = 0
- one = 1
- two = 10
- three = 11

#### Example 1

Calculate (0111)<sub>2</sub> + (1110)<sub>2</sub>.

|     1 |     1 |     1 |       |       |
| ----: | ----: | ----: | ----: | ----: |
|       |     0 |     1 |     1 |     1 |
|     + |     1 |     1 |     1 |     0 |
| **1** | **0** | **1** | **0** | **1** |

- Does this tie out with the result we obtain if we convert to decimal then add?

#### Example 2

Calculate (1011)<sub>2</sub> + (1101)<sub>2</sub>.

|     1 |     1 |     1 |     1 |       |       |
| ----: | ----: | ----: | ----: | ----: | ----: |
|       |     1 |     0 |     1 |     1 |     1 |
|     + |     1 |     1 |     0 |     1 |     0 |
| **1** | **1** | **0** | **0** | **0** | **1** |

- Does this tie out with the result we obtain if we convert to decimal then add?

## Hexadecimal Numbers in Computing

The most important takeaway for us:

_When you see hexadecimal, know that you're looking at a binary number - even though you're not seeing the zeroes and ones._

### Convert: Hex to Binary

Recall:

- The prefix **0x** is used to indicate a hexadecimal number.

- Each hex digit represents a **nibble** (4 bits).

To convert a hexadecimal number to binary, we simply take each hex digit and convert it its binary equivalent.

#### Example 1

Convert the hexadecimal number to binary: 0x24

When we see 0x24, we're looking at a byte (8 bits):

| 2   |     |     |     |     | 4   |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ?   | ?   | ?   | ?   |     | ?   | ?   | ?   | ?   |

So we convert to binary...

2 = (0010)<sub>2</sub>

4 = (0100)<sub>2</sub>

Then plug in the result:

| 2   |     |     |     |     | 4   |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0   | 0   | 1   | 0   |     | 0   | 1   | 0   | 0   |

Final result = 00100100

#### Example 2

Convert the hexadecimal number to binary: 0xA1

Nothing different here, we just have to know that the letters represent numbers.

A = (10)<sub>10</sub> = (1010)<sub>2</sub>

1 = (1)<sub>10</sub> = (0001)<sub>2</sub>

Plugging in:

| A   |     |     |     |     | 1   |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 0   | 1   | 0   |     | 0   | 0   | 0   | 1   |

Final result = 10100001
