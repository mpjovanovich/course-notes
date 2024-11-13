---
title: Midterm Study Guide
course: SDEV120
---

### M01: Algorithms and Structured Programming

#### Algorithms

- What is an algorithm?
- What are algorithms used for in computing?
- What are the three elements of structured programming?

#### Pseudocode

- What is it?
- Why is it used?
- Basic guidelines for writing pseudocode
- Given some pseudocode - follow it and determine the output

#### Flowcharts

- Know the symbols
- Given a flowchart - follow it and determine the output

### M03: Boolean Algebra

#### Terms

- Proposition
- Logical connective
- Unary operator
- Binary operator
- Negation (logical NOT)
- Conjunction (logical AND)
- Disjunction (logical OR)
- Exclusive OR (logical XOR)

#### Logical operators

- Know the mathematical symbols (∨, ∧, ¬, ⊕)
- Know order of operations

#### Truth tables

- Be able to create truth table for three basic logical operators
- Given some statement, express with propositions and connectives (e.g. "Jonny is either a cat or a dog.")
- Be able to plug propositions into a truth table and determine the output (like problems 3 and 4 on the homework)

#### Misc

- DeMorgan's Laws: how to distribute negation over conjunction and disjunction
- Modulo operator: be able to solve basic problems (5 % 2 = 1, 7 % 10 = 7)
- Decision trees: given some tree and a set of inputs, be able to determine the leaf node that is reached

### M04: Functional Arithmetic and Expression Parsing

#### Terms

- Syntax
- Literal
- Variable
- Operator
- Operand

_Other:_

- What's the difference between a statement (it does something) and an expression (it returns something)?

#### Trees

- Know terms: node, root, leaf, parent, child
- How does the post-order traversal algorithm work?
  - Given some tree - In what order are nodes visited?

#### Abstract Syntax Trees

- What is an abstract syntax tree?
- Given some tree, what is the expression that it represents?
- Given some expression, how would you draw a tree?
  - If there is a function in the tree, how do you expand it?

#### Algebraic Functions

Be able to evaluate:

- Composed functions, e.g. f(g(x))
- Functions with multiple arguments, e.g. f(x, y)
- Functions with boolean logic, e.g. f(x, y, z) = x AND y OR z

### M0X: System Modeling

#### UML

- What is UML?
- In what scenarios would UML documentation be appropriate?
- For the five diagrams that we covered, what is the purpose of each?
  - Class diagram
  - Use case diagram
  - Sequence diagram
  - Activity diagram
  - State diagram

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
