---
title: Final Study Guide
course: SDEV120
---

~.toc

- [Not Covered](#not-covered)
- [Covered](#covered)
  - [M04: Intro to Programming](#m04-intro-to-programming)
    - [Coding Environments](#coding-environments)
    - [Input, Output, and Comments in Python](#input-output-and-comments-in-python)
    - [Variables and Constants](#variables-and-constants)
    - [Data Types](#data-types)
  - [M07: Selection Structures](#m07-selection-structures)
  - [M08: Repetition](#m08-repetition)
  - [Decisions and Loops](#decisions-and-loops)
  - [M09: Data Representation and Encoding](#m09-data-representation-and-encoding)
    - [Intro to Computer Numbering Systems](#intro-to-computer-numbering-systems)
    - [Converting Between Bases](#converting-between-bases)
    - [Applications for Binary and Hexadecimal](#applications-for-binary-and-hexadecimal)
    - [Metric System for Computing](#metric-system-for-computing)
    - [Numeric Data Types](#numeric-data-types)
    - [Text Data Types](#text-data-types)
  - [M10: Programming Paradigms](#m10-programming-paradigms)
    - [Turing and Computability](#turing-and-computability)
    - [Von Neumann Architecture](#von-neumann-architecture)
    - [Evolution of Computing](#evolution-of-computing)
    - [Evolution of Programming](#evolution-of-programming)

/~

## Not Covered

Overflow topics

## Covered

### M04: Intro to Programming

#### Coding Environments

- How is an **IDE** different from a **text editor**?
- What does it mean to **debug** code?
- What is a **debugger**? This is more specific than the concept of debugging. It's a tool that helps you debug code, typically by setting **breakpoints** and stepping through code.

#### Input, Output, and Comments in Python

- Know what code comments are used for in general
- Know how to write comments in Python
- Know how to use the `input()` function
- Know how to use the `print()` function

#### Variables and Constants

- What is a **variable**?
- What is a **constant**?
- What naming conventions should you follow for variables and constants?
  - **Camel Case**, **Pascal Case**, **snake case** / **underscore case**
  - Best practices for descriptive variable names (which of these names is better...)
- Know the words **declare**, **initialize**, and **assign** in the context of variables

#### Data Types

- Given some variable value, match it to the correct data type

### M07: Selection Structures

- Single vs dual alternative decisions; what is the difference?
- Is an "else" condition (dual alternative) always necessary?
- When do we hit an "else" condition?
- Given a decision (Python or flowchart), determine what will print.
- _You do not need to know fallthrough decisions, "elif"_

### M08: Repetition

- Why use loops?
- What is an **iteration**?
- What does it mean to **increment** or **decrement** a value?
- What is an **infinite loop**? Given some snippet of code, determine if it will run forever.
- What is an **off-by-one error**? Given some snippet of code, determine what needs to go in the loop condition to get the desired output.

### Decisions and Loops

- What is **nested** structure?
  - Given a nested decision (Python or flowchart), determine what will print.
  - Given a nested loop (Python or flowchart), determine what will print.
  - In a nested loop know terminology for **outer loop** and **inner loop**.

### M09: Data Representation and Encoding

#### Intro to Computer Numbering Systems

- Which numbering systems are most commonly used in computing and why?
- What are the symbols for the following numbering systems?
  - Binary
  - Decimal
  - Hexadecimal
- How do I know which base I'm looking at?
  - Subscript (primarily decimal and binary)
  - Prefix (primarily hex)

#### Converting Between Bases

- Convert
  - Binary to decimal
  - Hex to binary
- Add two binary numbers

#### Applications for Binary and Hexadecimal

- How are hexadecimal numbers used to represent colors?
- How can we tell that an IPv6 address represents more values than an IPv4 address?
- How do **bitwise operators** work?
- What is a **bitmask**?
- What is a **bit array**?
  - Given a binary number, a bit array, and a bitwise operator, determine the output.
  - You don't have to know the symbols for bitwise operators, a description will be given to you.
  - E.g. "Given the binary number 1010 perform a bitwise XOR with 1100."

#### Metric System for Computing

- "-bi" vs "-lo" prefixes = binary vs decimal
- Know all of the prefixes and their ordering in the binary chart. This needs to be memorized.
- Know how to convert between binary metric units.

  - "Convert 1 ??B to ??B"
  - Always change by a factor of 2^10, 1024...
  - Except for bytes - 8 bits in a byte

- Know the domains in which decimal or binary prefixes are used.
  - Memory sizes = binary
  - Data transfer rates = decimal

#### Numeric Data Types

- What is the difference between **signed** and **unsigned** numbers?
- "How many values can be represented by a [?]-bit unsigned integer? Provide your answer as a power of 2."
- Can computer data types accurately represent all numbers?

#### Text Data Types

- How are characters represented in a computer?
- How is ASCII different from Unicode?
- Why would you use one over the other?

### M10: Programming Paradigms

#### Turing and Computability

- What is a **Turing machine**? You don't need to know how to use it.
- Why was Turing's work on computability important for the development of computers?:
  - Turing's work formalized the concept of algorithmic computation in a way that could be implemented by a machine.

#### Von Neumann Architecture

- What major issues did the Von Neumann architecture solve (what was the problem with previous architectures)?
- Major takeaways of VN Arch:
  - Every program must be loaded into **memory** (not storage / disc) before it can be executed.
  - Every instruction and piece of data must be loaded into the **CPU** before it can be executed.
  - The CPU has its own memory, called **registers**.

#### Evolution of Computing

- What is a **transistor**?
- An **integrated circuit**, or **chip**, is made up of **transistors**.
- What does **Moore's Law** say?

#### Evolution of Programming

- Difference betwen 1st, 2nd, 3rd generation programming languages.
- Machine code = binary code; everything must be converted to machine code before it can run
- Assembly language = primitive instructions that reflect what the processor can do
- Compiled = translated to machine code ahead of time
- Interpreted = translated to machine code as it runs
