---
title: Final Study Guide
course: SDEV120
---

~.toc

- [M07: Logic Gates and Circuits](#m07-logic-gates-and-circuits)
- [M08: Data Representation and Encoding](#m08-data-representation-and-encoding)
  - [Numeric Data Types](#numeric-data-types)
  - [Intro to Computer Numbering Systems](#intro-to-computer-numbering-systems)
  - [Binary Numbers](#binary-numbers)
  - [Hexadecimal Numbers](#hexadecimal-numbers)
  - [Metric System for Computing](#metric-system-for-computing)
  - [Bitwise Operations](#bitwise-operations)
  - [Numeric Data Types](#numeric-data-types-1)
  - [Text Data Types](#text-data-types)
- [M09: Programming Paradigms](#m09-programming-paradigms)
  - [Turing and Computability](#turing-and-computability)
    - [Von Neumann Architecture](#von-neumann-architecture)
    - [Evolution of Computing](#evolution-of-computing)
  - [Evolution of Programming](#evolution-of-programming)

/~

### M02: Intro to Programming

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

### M05: Selection Structures

- Single vs dual alternative decisions; what is the difference?
- Is an "else" condition (dual alternative) always necessary?
- When do we hit an "else" condition?
- Given a decision (Python or flowchart), determine what will print.
- _You do not need to know fallthrough decisions, "elif"_

### M06: Loops and Iteration

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

### M08: Data Representation and Encoding

#### Numeric Data Types

#### Intro to Computer Numbering Systems

- What base are decimal, binary, and hex?
- What are the prefixes and conventions that let you know if you're looking at a binary / hex value?

#### Binary Numbers

- Convert: Binary to Decimal
- Binary Addition

#### Hexadecimal Numbers

- Convert: Binary to Hex
- Convert: Hex to Binary

#### Metric System for Computing

- Prefixes from byte through gibibyte.
- How many bits in a byte? 8
- What's the factor to convert for all other units? 2^10 = 1024
- Reasoning behind binary ("bi") prefixes as opposed to decimal (binary for memory because it accurately reflects what computer is doing)

#### Bitwise Operations

- Perform a bitmask operation (bitwise AND)

#### Numeric Data Types

- What is an integer?
- What is a floating point number?
- How does number of bits (generally, having more or less) on the data type affect the range of values that can be stored?

#### Text Data Types

- What is a character?
- How are characters encoded in computing?
- What is ASCII?
- What is Unicode?
- What is whitespace?

### M09: Programming Paradigms

#### Turing and Computability

- What is a Turing Machine?
- Why was it important for the field of computing?

##### Von Neumann Architecture

- What are the components of the Von Neumann Architecture?
- Terminology: "Memory" vs "disc" / "storage"
- Know how the fetch / decode / execute cycle works

##### Evolution of Computing

- What is a transistor?
- What is an integrated circuit?
- What is Moore's Law?
- What are some considerations with regard to major trends in computing advancement that may be significant?
  - Cost of Compute
  - Energy Efficiency and Sustainability (GPU's, used in AI, burn a lot of power)
  - Resource Scarcity and Material Innovation
  - Processor Architectures (non-von-neumann specialized processors; GPU, but also new ones)
  - Network and Data Transfer (better / faster networks)
  - Quantum Computing (currently expensive, but may become cheaper and pose new benefits and risks)

#### Evolution of Programming

- Coding evolution
  - First fen = machine code = binary
  - Second gen = assembly = processor specific instruction sets
  - Third gen = compiled and interpreted code = more human readable (e.g. Python)
- The purpose of compiling or interpreting code is to...
- Name five programming languages.
