---
title: Midterm Study Guide
course: SDEV120
---

---

Most missed topics, F24:

- Pascal vs camel case
- There is no "decimal" data type; it's called a "float"
- Nested loops - how to determine the output
- De Morgan's law clarification (not always necessary - you can solve inside parentheses then negate)
- f ( f ( x ) )
- Modulo (non two case)

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

### M02: Boolean Algebra

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

### M03: Functional Arithmetic and Expression Parsing

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

### M04: Logic Gates and Circuits

- Given a circuit diagram (image of a logicly diagram), determine the output - is the light on or off given some on / off condition for the inputs.
- What is the computer clock used for?... Synchronizing instruction execution and data transfer among components of the computer.

### M05: System Modeling

#### SDLC

...

#### UML

- What is UML?
- In what scenarios would UML documentation be appropriate?
- For the five diagrams that we covered, what is the purpose of each?
  - Class diagram
  - Use case diagram
  - Sequence diagram
  - Activity diagram
  - State diagram
