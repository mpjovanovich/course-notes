---
title: Intro to Computer Numbering Systems
course: SDEV120
---

~.toc

- [Intro to Computer Numbering Systems](#intro-to-computer-numbering-systems)
  - [Everyday Numbering Systems](#everyday-numbering-systems)
    - [Base 10](#base-10)
    - [Base 12 and 24](#base-12-and-24)
    - [Base 60](#base-60)
  - [Computer Numbering Systems](#computer-numbering-systems)
    - [Binary](#binary)
    - [Hexadecimal](#hexadecimal)

/~

# Intro to Computer Numbering Systems

We can use any number of symbols to represent the same numeric value.

Example: write the number “ten” in base 1 through 10

| Base | Symbols                                            | Representation 10<sub>(10)</sub> |
| :--- | :------------------------------------------------- | :------------------------------: |
| 1    | { 1 }                                              |            1111111111            |
| 2    | { 0, 1 }                                           |               1010               |
| 3    | { 0, 1, 2 }                                        |               101                |
| 4    | { 0, 1, 2, 3 }                                     |                22                |
| 5    | { 0, 1, 2, 3, 4 }                                  |                20                |
| 6    | { 0, 1, 2, 3, 4, 5 }                               |                14                |
| 7    | { 0, 1, 2, 3, 4, 5, 6 }                            |                13                |
| 8    | { 0, 1, 2, 3, 4, 5, 6, 7 }                         |                12                |
| 9    | { 0, 1, 2, 3, 4, 5, 6, 7, 8 }                      |                11                |
| 10   | { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }                   |                10                |
| ...  | ...                                                |               ...                |
| 16   | { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F } |                A                 |

To indicate the base of a number, we use a subscript. These are not the same number:

- 10<sub>(2)</sub>
- 10<sub>(10)</sub>

## Everyday Numbering Systems

### Base 10

- Our "counting" numbering system.
- Numbers in base 10 are called **_decimal_** numbers.
- Probably evolved from counting on fingers.

### Base 12 and 24

- Used for time
  - 12 hours in half day
  - 24 hours in day

### Base 60

- Used for time
  - 60 seconds in minute
  - 60 minutes in hour

## Computer Numbering Systems

### Binary

Numbers in base 2 are called **_binary_** numbers: { 0, 1 }

These are the building blocks of all data in a computer.

Distiguished from decimal numbers by the prefix **_0b_**, or by using the subscript **_2_**:

- 0b1010
- 0b1111
- (1010)<sub>2</sub>
- (1111)<sub>2</sub>

### Hexadecimal

Numbers in base 16 are called **_hexadecimal_** numbers: { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F }

Hexadecimal is way to write binary numbers in a more compact form.

Distiguished from decimal numbers by the prefix **_0x_**. Does not typically use the subscript **_16_**.

- 0x1A
- 0x10
