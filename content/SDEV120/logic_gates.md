---
title: Logic Gates
course: SDEV120
---

- [Logic Gates](#logic-gates)
  - [Foundations](#foundations)
  - [Basic Gates](#basic-gates)
  - [Combining Gates](#combining-gates)

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

## Combining Gates

We can combine gates to create more complex **circuits**.

A **magnitude comparator** is a combinational circuit that compares two numbers and determines their relative magnitudes.

~~demo{

_One bit magnitude comparator:_

~~fig{images/one_bit_magnitude_comparator.png}

Assume that A = 1, B = 1.

Plug these values into the circuit and trace the logic the three possible outputs.

_Hint:_ Remember your truth tables and the fact that 1 = true and 0 = false.

~~summary( **Trace the steps that lead to A < B** ) {

- ¬A ∧ B
- 0 ∧ 1 = False

}

**What is the logic circuit for A > B?**

- A ∧ ¬B
- 1 ∧ 0 = False

**What is the logic circuit for A = B?**

- ¬( (¬A ∧ B) ∨ (A ∧ ¬B) )
- A ∨ ¬B ∧ ¬A ∨ B
- A ∨ (¬B ∧ ¬A) ∨ B
- 1 ∨ (0 ∧ 0) ∨ 1
- 1 ∨ 0 ∨ 1 = True

}
