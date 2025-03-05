---
title: Final Study Guide
course: SDEV120
---

~.toc

- [Final Exam Study Guide](#final-exam-study-guide)
    - [M06: Intro to Programming](#m06-intro-to-programming)
      - [Coding Environments](#coding-environments)
      - [Input, Output, and Comments in Python](#input-output-and-comments-in-python)
      - [Variables and Constants](#variables-and-constants)
      - [Data Types](#data-types)
    - [M07: Selection Structures](#m07-selection-structures)
      - [Selection Structures](#selection-structures)
    - [M08: Loops and Iteration](#m08-loops-and-iteration)
      - [Programming with Loops](#programming-with-loops)
      - [Step Values](#step-values)
    - [M09: Data Representation and Encoding](#m09-data-representation-and-encoding)
      - [Intro to Computer Numbering Systems](#intro-to-computer-numbering-systems)
      - [Binary Numbers](#binary-numbers)
      - [Hexadecimal Numbers](#hexadecimal-numbers)
      - [Metric System for Computing](#metric-system-for-computing)
      - [Bitwise Operations](#bitwise-operations)
      - [Numeric Data Types](#numeric-data-types)
      - [Text Data Types](#text-data-types)
    - [M10: Programming Paradigms](#m10-programming-paradigms)
      - [Turing and Computability](#turing-and-computability)
      - [Von Neumann Architecture](#von-neumann-architecture)
      - [Evolution of Computing](#evolution-of-computing)
      - [Evolution of Programming](#evolution-of-programming)

/~

# Final Exam Study Guide

### M06: Intro to Programming

#### Coding Environments

- Know what an IDE (Integrated Development Environment) is used for: better support when writing code

#### Input, Output, and Comments in Python

- Be able to read simple Python code snippets and determine what will be printed
  - Understand comments, input(), print()

#### Variables and Constants

- Know how to identify constants in code snippets
- Understand different variable naming conventions (camelCase, snake_case, PascalCase)
- Know best practices for variable naming in specific contexts (specific names, minimal abbreviations)

#### Data Types

- Know basic data types (integers, floating-point numbers, strings, booleans)
- Understand that each data type is stored differently in memory
- A larger numeric data type of the same value can store a larger range of values (e.g. 32 vs 64 bit int)
- Number of bits determines possible values
  - 8 bits can hold 2^8 values
  - 16 bits can hold 2^16 values

### M07: Selection Structures

#### Selection Structures

- Understand when you need an "if" needs an "else" clause, and when it does not
- Understand the concept of nesting control structures (placing one control structure inside another)
  - Control structure = selection (if) or iteration (loop / while)

### M08: Loops and Iteration

#### Programming with Loops

- Why would you use a loop? What does it allow us to do?
- What is an iteration?
- Understand that step values are not always 1, and can increment or decrement
- Understand what an infinite loop is
- Be able to trace through loop code and determine the output

#### Step Values

### M09: Data Representation and Encoding

#### Intro to Computer Numbering Systems

- Know base for binary, decimal, hex
- Understand the primary reasons for using different numbering systems in computing

#### Binary Numbers

- Convert simple binary numbers to decimal

#### Hexadecimal Numbers

- Know the prefix used to denote hexadecimal notation (0x)
- Be able to convert between binary and hexadecimal (e.g., find the binary equivalent of hex value A1)
- Know that the decimal number 37 can be represented in binary, decimal, and hexadecimal

#### Metric System for Computing

- Be able to convert between file sizes:
  - 8 b (bits) equals 1 B (Byte)
  - Everything else goes up by a factor of 2^10 (1024)
    - 1024B = 1KiB
    - 1024KiB = 1MiB
    - ...

#### Bitwise Operations

- Be able to perform a bitwise AND operation given some bits and a bitmask

#### Numeric Data Types

- Understand that computer data types cannot accurately represent all numbers

#### Text Data Types

- Understand that ASCII and Unicode both represent characters as integers in a lookup table
- What is whitespace?

### M10: Programming Paradigms

#### Turing and Computability

- Know what a Turing machine is (a theoretical computing model that defines what is computable)

#### Von Neumann Architecture

- Know general purpose of components in Von Neumann architecture
- Know general purpose of the subcomponents of CPU

#### Evolution of Computing

- Understand what Moore's Law refers to (transistor density on a chip)
- Know the primary purpose of the computer clock (synchronizing operations)
- Understand what transistors are used for in computing
- Know what GPUs (Graphic Processing Unit) are used for, other than rendering graphics
- Understand that all programs must be loaded into memory before they can run
- Know that all code must be converted to machine code to run on a computer

#### Evolution of Programming

- Understand the difference between compiled and interpreted code
- Know what terms 1st, 2nd, 3rd GL computing languages mean
