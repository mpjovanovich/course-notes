---
title: Converting Between Bases
course: SDEV120
---

~~wrapHtml(div,schedule){

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

}

# Converting Between Bases

## Positional Notation

Each digit in a number represents a power of its base.

We follow an algorithm to get the result:

1. Multiply each digit by the base raised to the power of its position.
2. Add the results.

_Note: any number raised to the power of 0 is 1._

**Example**

Let's remind ourselves how base 10 works:

324<sub>(10)</sub> =

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

= 7<sub>(10)</sub>

#### Example 2

Convert the binary number to decimal: (1101)<sub>2</sub>

|     | 1                  |     | 1                  |     | 0                  |     | 1                  |
| --- | ------------------ | --- | ------------------ | --- | ------------------ | --- | ------------------ |
| =   | 1 \* 2<sup>3</sup> | +   | 1 \* 2<sup>2</sup> | +   | 0 \* 2<sup>1</sup> | +   | 1 \* 2<sup>0</sup> |
| =   | 1 \* 8             | +   | 1 \* 4             | +   | 0 \* 2             | +   | 1 \* 1             |
| =   | 8                  | +   | 4                  | +   | 0                  | +   | 1                  |

= 13<sub>(10)</sub>

~~wrapHtml(div,focusContent){

<p class="focusContentTitle">Pneumonic:</p>

_1-eightsy 1-foursy 1-twosy one bottles of beer on the wall..._

In decimal we speak in terms of ones, tens, hundreds, etc.; "one-thousand one-hundred ten".

You can think of binary columns from right to left as onesy, twosy, foursy, eightsy, sixteensy etc.

Counting up...

- 0111 = 1-foursy 1-twosy one = 7
- 1000 = 1-eightsy = 8
- 1001 = 1-eightsy one = 9
- 1010 = 1-eightsy two = 10

}

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

Convert the decimal number to binary: 21<sub>(10)</sub>

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

Calculate 0111<sub>2</sub> + 1110<sub>2</sub>.

|     1 |     1 |     1 |       |       |
| ----: | ----: | ----: | ----: | ----: |
|       |     0 |     1 |     1 |     1 |
|     + |     1 |     1 |     1 |     0 |
| **1** | **0** | **1** | **0** | **1** |

- Does this tie out with the result we obtain if we convert to decimal then add?

#### Example 2

Calculate 1011<sub>2</sub> + 1101<sub>2</sub>.

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

2 = 0010<sub>2</sub>

4 = 0100<sub>2</sub>

Then plug in the result:

| 2   |     |     |     |     | 4   |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0   | 0   | 1   | 0   |     | 0   | 1   | 0   | 0   |

Final result = 00100100

#### Example 2

Convert the hexadecimal number to binary: 0xA1

Nothing different here, we just have to know that the letters represent numbers.

A = 10<sub>10</sub> = 1010<sub>2</sub>

1 = 1<sub>10</sub> = 0001<sub>2</sub>

Plugging in:

| A   |     |     |     |     | 1   |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 0   | 1   | 0   |     | 0   | 0   | 0   | 1   |

Final result = 10100001

<!-- #### Examples


##### Example 3

Convert the decimal number to hex: (37)<sub>10</sub>

| Division | Quotient | Remainder | Hex Digit |
| :------: | :------: | :-------: | :-------: |
|  37/16   |    2     |     5     |     5     |
|   2/16   |    0     |     2     |     2     |

Answer: (25)<sub>16</sub> = **0x25**

#### Binary to Hex (and Reverse)

Hex offers a nice, compact way to represent binary numbers.

- Break binary number into groups of 4 bits (called a **nibble**).
  - Each nibble is guaranteed to be a number from 0-15; 0-F in hex.
- Convert each nibble to hex.
- Concatenate the results - put them back together.

<figure>
    <span>
        <img src="images/binary_to_hex.png" style="">
    </span>
    <figcaption>
        Binary to Hex
    </figcaption>
</figure>

<p class="demo">Demo:</p>

Which hex digits can we represent with four bits?

- [logic.ly](https://logic.ly/demo/)

<figure>
    <span>
        <img src="images/hex_bit_switch.png" style="">
    </span>
    <figcaption>
        Four bits to hex.
    </figcaption>
</figure>

##### Example 1

<details>
    <summary>Convert binary to hex: (10100010)<sub>2</sub></summary>
    <div>
        <ul>
            <li><span style="font-weight:bold;color: lightblue;">(1010)<sub>2</sub></span> <span style="font-weight:bold;color: orange;">(0010)<sub>2</sub></span></li>
            <li><span style="font-weight:bold;color: lightblue;">(10)<sub>10</sub></span> <span style="font-weight:bold;color: orange;">(2)<sub>10</sub></span></li>
            <li><span style="font-weight:bold;color: lightblue;">(A)<sub>16</sub></span> <span style="font-weight:bold;color: orange;">(2)<sub>16</sub></span></li>
            <li><span style="font-weight:bold;">0xA2</span></li>
        </ul>
    </div>
</details>

##### Example 2

<details>
    <summary>Convert hex to binary: 0xF0FF</summary>
    <div>
        <ul>
            <li>
                <span style="font-weight:bold;color:lightblue;">(F)<sub>16</sub></span>&nbsp;
                <span style="font-weight:bold;color:orange;">(0)<sub>16</sub></span>&nbsp;
                (F)<sub>16</sub>&nbsp;
                (F)<sub>16</sub>
            </li>
            <li>
                <span style="font-weight:bold;color:lightblue;">(15)<sub>10</sub></span>&nbsp;
                <span style="font-weight:bold;color:orange;">(0)<sub>10</sub></span>&nbsp;
                (15)<sub>10</sub>&nbsp;
                (15)<sub>10</sub>
            </li>
            <li>
                <span style="font-weight:bold;color:lightblue;">(1111)<sub>2</sub></span>&nbsp;
                <span style="font-weight:bold;color:orange;">(0000)<sub>2</sub></span>&nbsp;
                (1111)<sub>2</sub>&nbsp;
                (1111)<sub>2</sub>
            </li>
            <li><span style="font-weight:bold;">1111000011111111</span></li>
        </ul>
    </div>
</details>

## Binary Arithmetic and Encodings

### Binary Addition

Same as decimal addition except - When carrying numbers into the next column we represent them in binary form.

When adding a column you can either have (depending on remainder and row values):

- zero = 0
- one = 1
- two = 10
- three = 11

##### Example 1

Calculate 0111<sub>2</sub> + 1110<sub>2</sub>.

|     1 |     1 |     1 |       |       |
| ----: | ----: | ----: | ----: | ----: |
|       |     0 |     1 |     1 |     1 |
|     + |     1 |     1 |     1 |     0 |
| **1** | **0** | **1** | **0** | **1** |

- Does this tie out if we calc in decimal?...


### Complement Encoding

<figure>
    <span>
        <img src="https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/binary-bin7.gif" style="">
    </span>
    <figcaption>
        <a href="https://www.electronics-tutorials.ws/binary/signed-binary-numbers.html">Positive Signed Binary Number</a>
    </figcaption>
</figure>

<figure>
    <span>
        <img src="https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/binary-bin8.gif" style="">
    </span>
    <figcaption>
        <a href="https://www.electronics-tutorials.ws/binary/signed-binary-numbers.html">Negative Signed Binary Number</a>
    </figcaption>
</figure>

**_Complement_** = negation

**_Most significant bit (MSB)_** = digit with the greatest value.

**_Big-endian_** = MSB on left

**_Little-endian_** = MSB on right

#### Why Use It?

- Easy to implement in hardware.
  - Binary adder
- Easy to add and subtract.

#### One's Complement Encoding

- Used in early computers.
- Positive numbers do not change.
- Negative numbers are represented by flipping all bits.
- Make sure to represent in correct number of bits (4, 8, 16, 32, 64, etc.)

Subtraction:

- Take one's complement of second number.
- Add two numbers.
- Discard any carry over from MSB.
- Add 1 to result.

##### Example 1

Find the one's complement of 01001110.

- Answer: 10110001

##### Example 2

Find 7<sub>10</sub> - 4<sub>10</sub> using one’s complement subtraction.

- 7<sub>10</sub> = 0111<sub>2</sub>
- 4<sub>10</sub> = 0100<sub>2</sub>
- One’s complement of 4<sub>10</sub> = -4<sub>10</sub> = 1011<sub>2</sub>
- 0111<sub>2</sub> + 1011<sub>2</sub> = 1 0010<sub>2</sub>
- Ignore overflow bit: ~~1~~ 0010<sub>2</sub>
- Add one: 0010<sub>2</sub> + 1 = 0011<sub>2</sub>

##### Example 3

<p class="demo">Walkthrough:</p>

Find 1111<sub>2</sub> - 0110<sub>2</sub> using one’s complement subtraction.

#### Two's Complement Encoding

- Used in modern computers.
- Positive numbers do not change.
- Negative numbers are represented by flipping all bits and adding 1.
- Make sure to represent in correct number of bits (4, 8, 16, 32, 64, etc.)

Subtraction:

- Take two's complement of second number.
- Add two numbers.
- _Don’t need the extra step at the end to add one._
  - If there is carry over from MSB, discard it. Result is positive.
  - If there is no carry over from MSB, take two's complement of result. Result is negative.

##### Example 1

Find the two's complement of 01001110.

- One's complement: 10110001
- Add 1: 10110001 + 1 = 10110010
- Answer: 10110010

##### Example 2

Find 7<sub>10</sub> - 4<sub>10</sub> using two’s complement subtraction.

- 7<sub>10</sub> = 0111<sub>2</sub>
- 4<sub>10</sub> = 0100<sub>2</sub>
- Two’s complement of 4<sub>10</sub> = -4<sub>10</sub> + 1 = 1011<sub>2</sub> + 1 = 1100<sub>2</sub>
- 0111<sub>2</sub> + 1100<sub>2</sub> = 1 0011<sub>2</sub>
- Ignore overflow bit: ~~1~~ 0011<sub>2</sub>

##### Example 3

Find 4<sub>10</sub> - 7<sub>10</sub> using two’s complement subtraction.

- 4<sub>10</sub> = 0100<sub>2</sub>
- 7<sub>10</sub> = 0111<sub>2</sub>
- Two’s complement of 7<sub>10</sub> = -7<sub>10</sub> + 1 = 1000<sub>2</sub> + 1 = 1001<sub>2</sub>
- 0100<sub>2</sub> + 1001<sub>2</sub> = 1101<sub>2</sub>
- No overflow bit, so result is negative. We need to take the two's complement of the result.
  - Two's complement of 1101<sub>2</sub> = 0010<sub>2</sub> + 1 = 0011<sub>2</sub> -->

<!-- ### Bitwise Operations -->

<!-- #### Bitmasking -->

<!-- #### Bitshifting -->

```

```
