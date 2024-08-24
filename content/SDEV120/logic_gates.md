---
title: Logic Gates
course: SDEV120
---

- [Logic Gates](#logic-gates)
  - [Foundations](#foundations)
  - [Basic Gates](#basic-gates)
  - [Circuits](#circuits)
    - [The Clock](#the-clock)
    - [Magnitude Comparator](#magnitude-comparator)

# Logic Gates

For an excellent logic gate sandbox, see: [Logic.ly](https://logic.ly/demo).

## Foundations

- Computers recognize only two states, based on the presence or absence of an electrical signal.
  - High voltage = 1 = true
  - Low voltage = 0 = false
- A **logic gate** is a device that performs a logical operation on one or more binary inputs and produces a single binary output.
- A **circut** is a collection of logic gates that work together to perform a specific task.

## Basic Gates

The logical connectives that we've learned so far have corresponding logic gates.

The truth table for each gate matches the truth table for the corresponding logical connective.

<p class="demo">Demo:</p>

Logic.ly

~~fig{images/basic_logic_gates.png}

## Circuits

We can combine logic gates to create more complex circuits.

### The Clock

The **clock** is a special signal that is used to synchronize the operations of a computer. For now, we just need to know:

- The clock signal changes from 0 to 1 and back to 0 at regular intervals.
- Computer circuits may change their state (0 or 1) when the clock signal changes.

### Magnitude Comparator

A **magnitude comparator** is a combinational circuit that compares two numbers and determines their relative magnitudes.

~~exercise{

_One bit magnitude comparator:_

~~fig{images/one_bit_magnitude_comparator.png}

[one_bit_magnitude_comparer.logicly](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/one_bit_magnitude_comparer.logicly)

**Problem 1:**

Assume that A = 1, B = 1.

For each output:

a) Translate the circuit into a boolean expression.
b) Plug the above values into the circuit and solve.

_Hint:_ Remember your truth tables and the fact that 1 = true and 0 = false.

~~summary( Output: A < B ) {

**a)**

- ¬A ∧ B

**b)**

- 0 ∧ 1 = False

}

~~summary( Output: A > B ) {

- A ∧ ¬B
- 1 ∧ 0 = False

}

~~summary( Output: A = B ) {

- ¬( (¬A ∧ B) ∨ (A ∧ ¬B) )
- A ∨ ¬B ∧ ¬A ∨ B
- A ∨ (¬B ∧ ¬A) ∨ B
- 1 ∨ (0 ∧ 0) ∨ 1
- 1 ∨ 0 ∨ 1 = True

}

**Problem 2:**

What is the boolean expression for the output of the circuit?

}
