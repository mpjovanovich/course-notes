---
title: Logic Gates
course: SDEV120
---

- [Logic Gates](#logic-gates)
  - [Foundations](#foundations)
  - [Basic Gates](#basic-gates)
  - [Circuits](#circuits)
    - [The Clock](#the-clock)
    - [Comparing Values](#comparing-values)
      - [One bit magnitude comparator:](#one-bit-magnitude-comparator)
    - [Keeping Values in Memory](#keeping-values-in-memory)
      - [SR (Set-Reset) Latch](#sr-set-reset-latch)

# Logic Gates

For an excellent logic gate sandbox, see: [Logic.ly](https://logic.ly/demo).

## Foundations

- Computers recognize only two states, based on the presence or absence of an electrical signal.

  - High voltage = 1 = true
  - Low voltage = 0 = false

- A **logic gate** is a device that performs a logical operation on one or more binary inputs and produces a single binary output.

## Basic Gates

The logical connectives that we've learned so far have corresponding logic gates.

The truth table for each gate matches the truth table for the corresponding logical connective.

<p class="demo">Demo:</p>

Logic.ly

~~fig{images/basic_logic_gates.png}

## Circuits

We can combine logic gates to create **circuits**.

These circuits can do things like:

- Arithmetic (addition, subtraction, etc.)
- Comparison (greater than, less than, equal)
- Memory storage
- ...

### The Clock

~~fig{http://watson.latech.edu/book/circuits/images/rsflipflopholdone.png}

The **clock** is a special signal that is used to synchronize the operations of a computer. For now, we just need to know:

- The clock pulses electrical signals at regular intervals.
- A high signal indicates "true", or 1.
- A low signal indicates "false", or 0.
- One up and down pulse (taken together) is called a **clock cycle**.

### Comparing Values

A **magnitude comparator** is a type of combinational circuit that compares two numbers.

~~exercise{

#### One bit magnitude comparator:

~~fig{images/one_bit_magnitude_comparator.png}

[One Bit Magnitude Comparator - Logicly](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/one_bit_magnitude_comparer.logicly)

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

### Keeping Values in Memory

A **flip-flop** is a circuit that can store a single bit of information, so that it's not lost when the clock signal changes.

~~demo{

#### SR (Set-Reset) Latch

The **SR latch** is a simple form of flip-flop that can store one bit of information.

When in the **hold** state, the outputs remain the same.

They will only change when either the **set** or **reset** input is activated.

_Inputs / Outputs:_

- S = Set signal
- R = Reset signal
- Q = Output
- Q' = Inverted output

_Truth Table:_

|                     | S   | R   | Q   | Q'  |
| ------------------- | --- | --- | --- | --- |
| **Set Condition**   | 1   | 0   | 1   | 0   |
| **Reset Condition** | 0   | 1   | 0   | 1   |
| **Hold Condition**  | 0   | 0   | 1   | 1   |

_Circuit:_

[Set Reset Latch - Logicly](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/set_reset_latch.logicly)

}
