---
title: Binary Numbers
course: SDEV120
---

~.toc

- [Binary Numbers](#binary-numbers)
  - [Positional Notation](#positional-notation)
  - [Convert: Binary to Decimal](#convert-binary-to-decimal)
  - [Convert: Decimal to Binary](#convert-decimal-to-binary)
  - [Binary Addition](#binary-addition)

/~

# Binary Numbers

Numbers in base 2 are called **_binary_** numbers: { 0, 1 }

- Digital signal can be in one of two states:
  - **_Off = 0_**
  - **_On = 1_**

## Positional Notation

Each digit in a number represents a power of its base.

We follow an algorithm to get the result:

1. Multiply each digit by the base raised to the power of its position.
2. Add the results.

_Note: any number raised to the power of 0 is 1._

~.focusContent.example.mathTable

Let's remind ourselves how base 10 works:

324<sub>10</sub> =

|     | 3              |     | 2              |     | 4              |
| --- | -------------- | --- | -------------- | --- | -------------- |
|     | \*             |     | \*             |     | \*             |
|     | 10<sup>2</sup> |     | 10<sup>1</sup> |     | 10<sup>0</sup> |
| =   | 300            | +   | 20             | +   | 4              |

Answer: **_324<sub>10</sub>_**

/~

## Convert: Binary to Decimal

We simply follow the positional notation algorithm.

~.focusContent.example.mathTable.firstRowLabels.lastRowResult

**Example 1**

Convert the binary number to decimal: 111<sub>2</sub>

|     | 1             |     | 1             |     | 1             |
| --- | ------------- | --- | ------------- | --- | ------------- |
|     | \*            |     | \*            |     | \*            |
|     | 2<sup>2</sup> |     | 2<sup>1</sup> |     | 2<sup>0</sup> |
| =   | 4             | +   | 2             | +   | 1             |

Answer: **_7<sub>10</sub>_**

/~

~.focusContent.example.mathTable.firstRowLabels.lastRowResult

**Example 2**

Convert the binary number to decimal: 1101<sub>2</sub>

|     | 1             |     | 1             |     | 0             |     | 1             |
| --- | ------------- | --- | ------------- | --- | ------------- | --- | ------------- |
|     | \*            |     | \*            |     | \*            |     | \*            |
|     | 2<sup>3</sup> |     | 2<sup>2</sup> |     | 2<sup>1</sup> |     | 2<sup>0</sup> |
| =   | 8             | +   | 4             | +   | 0             | +   | 1             |

Answer: **_13<sub>10</sub>_**

/~

## Convert: Decimal to Binary

To convert a decimal number to binary, we follow an algorithm:

1. Divide the decimal number by 2.
2. Record the remainder.
3. Repeat steps 1 and 2 until the quotient is 0.
4. The binary number is the remainders in reverse order.

~.focusContent.example.mathTable.lastColResult

**Example 1**

Convert the decimal number to binary: 12<sub>(10)</sub>

| Division | Quotient | Remainder | Binary Digit |
| :------: | :------: | :-------: | :----------: |
|  12 / 2  |    6     |     0     |      0       |
|  6 / 2   |    3     |     0     |      0       |
|  3 / 2   |    1     |     1     |      1       |
|  1 / 2   |    0     |     1     |      1       |

Answer: **_1100<sub>2</sub>_**

/~

~.focusContent.example.mathTable.lastColResult

**Example 2**

Convert the decimal number to binary: 21<sub>10</sub>

| Division | Quotient | Remainder | Binary Digit |
| :------: | :------: | :-------: | :----------: |
|  21 / 2  |    10    |     1     |      1       |
|  10 / 2  |    5     |     0     |      0       |
|  5 / 2   |    2     |     1     |      1       |
|  2 / 2   |    1     |     0     |      0       |
|  1 / 2   |    0     |     1     |      1       |

Answer: **_10101<sub>2</sub>_**)

/~

## Binary Addition

Same as decimal addition except - When carrying numbers into the next column we represent them in binary form.

When adding a column you can either have (depending on remainder and row values):

- zero = 0
- one = 1
- two = 10
- three = 11

~.focusContent.example.mathTable.hideHeaderRow.lastRowResult

**Example 1**

Calculate 0111<sub>2</sub> + 1110<sub>2</sub>.

|     |       |       |       |       |       |
| --- | ----: | ----: | ----: | ----: | ----: |
| R:  |     1 |     1 |     1 |       |       |
|     |       |     0 |     1 |     1 |     1 |
|     |     + |     1 |     1 |     1 |     0 |
|     | **1** | **0** | **1** | **0** | **1** |

Answer: **_10101<sub>2</sub>_**

- Does this tie out with the result we obtain if we convert to decimal then add?

/~

~.focusContent.example.mathTable.hideHeaderRow.lastRowResult

**Example 2**

Calculate 1011<sub>2</sub> + 1101<sub>2</sub>.

|     |       |       |       |       |       |
| --- | ----: | ----: | ----: | ----: | ----: |
| R:  |       |     1 |     1 |     1 |     1 |
|     |       |     1 |     0 |     1 |     1 |
|     |     + |     1 |     1 |     0 |     1 |
|     | **1** | **1** | **0** | **0** | **0** |

Answer: **_11000<sub>2</sub>_**

- Does this tie out with the result we obtain if we convert to decimal then add?

/~
