---
title: Logic Gates
course: SDEV120
---

TODO: MACRO LIBRARY EXPLODED. "TOO MANY NESTED MACROS" ERROR.
TODO: MACRO LIBRARY EXPLODED. "TOO MANY NESTED MACROS" ERROR.
TODO: MACRO LIBRARY EXPLODED. "TOO MANY NESTED MACROS" ERROR.
TODO: MACRO LIBRARY EXPLODED. "TOO MANY NESTED MACROS" ERROR.
TODO: MACRO LIBRARY EXPLODED. "TOO MANY NESTED MACROS" ERROR.
TODO: MACRO LIBRARY EXPLODED. "TOO MANY NESTED MACROS" ERROR.
TODO: MACRO LIBRARY EXPLODED. "TOO MANY NESTED MACROS" ERROR.
TODO: MACRO LIBRARY EXPLODED. "TOO MANY NESTED MACROS" ERROR.
TODO: MACRO LIBRARY EXPLODED. "TOO MANY NESTED MACROS" ERROR.
TODO: MACRO LIBRARY EXPLODED. "TOO MANY NESTED MACROS" ERROR.
TODO: MACRO LIBRARY EXPLODED. "TOO MANY NESTED MACROS" ERROR.
TODO: MACRO LIBRARY EXPLODED. "TOO MANY NESTED MACROS" ERROR.

- [Logic Gates](#logic-gates)
  - [Foundations](#foundations)
  - [Basic Gates](#basic-gates)
  - [Circuits](#circuits)
    - [Comparing Values](#comparing-values)
      - [One bit magnitude comparator:](#one-bit-magnitude-comparator)
    - [Keeping Values in Memory](#keeping-values-in-memory)
      - [SR (Set-Reset) Latch](#sr-set-reset-latch)
    - [Synchronizing Information](#synchronizing-information)
      - [The Clock](#the-clock)
      - [SR Flip-Flop](#sr-flip-flop)
    - [Combining Simple Circuits](#combining-simple-circuits)
      - [Building an Alarm System](#building-an-alarm-system)

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

### Comparing Values

A **magnitude comparator** is a type of combinational circuit that compares two numbers.

#### One bit magnitude comparator:

~~fig{images/one_bit_magnitude_comparator.png}

[One Bit Magnitude Comparator - Logicly](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/one_bit_magnitude_comparer.logicly)

_Exercise:_

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

### Keeping Values in Memory

#### SR (Set-Reset) Latch

The **SR latch** is a simple form of flip-flop that can store one bit of information as memory so that it isn't lost when the clock signal changes.

When in the **hold** state, the outputs remain the same.

They will only change when either the **set** or **reset** input is activated.

_Inputs / Outputs:_

- S = Set signal
- R = Reset signal
- Q = Output

_Truth Table:_

|                     | S   | R   | Q   |
| ------------------- | --- | --- | --- |
| **Set Condition**   | 1   | 0   | 1   |
| **Reset Condition** | 0   | 1   | 0   |
| **Hold Condition**  | 0   | 0   | 1   |

_Circuit:_

[SR Latch - Logicly](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/set_reset_latch.logicly)

### Synchronizing Information

In digital circuits, we need to be precise about when information is updated.

#### The Clock

~~fig{http://watson.latech.edu/book/circuits/images/rsflipflopholdone.png}

The **clock** is a special signal that is used to synchronize the operations of a computer. For now, we just need to know:

- The clock pulses electrical signals at regular intervals.
- A high signal indicates "true", or 1.
- A low signal indicates "false", or 0.
- One up and down pulse (taken together) is called a **clock cycle**.

#### SR Flip-Flop

The **SR flip-flop** extends the SR latch by adding a clock signal.

This signal allows the flip-flop to store information only when the clock signal changes.

_Inputs / Outputs:_

- C = Clock signal
- S = Set signal
- R = Reset signal
- Q = Output

_Truth Table:_

Same as above, except now the output can only change on a rising edge (uptick) of the clock signal.

Falling edges of the clock (downticks) cut off the input signals.

|                               | C   | S   | R   | Q   |
| ----------------------------- | --- | --- | --- | --- |
| **Set Condition**             | 1   | 1   | 0   | 1   |
| **(Waiting) Set Condition**   | 0   | 1   | 0   | 1   |
| **Reset Condition**           | 1   | 0   | 1   | 0   |
| **(Waiting) Reset Condition** | 1   | 0   | 1   | 0   |
| **Hold Condition**            | 0   | 0   | 0   | 1   |

_Circuit:_

[SR Flip-Flop - Logicly](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/set_reset_flip_flop.logicly)

### Combining Simple Circuits

Now that we have the basic building blocks, let's build something practical.

~~demo{

#### Building an Alarm System

_Scenario:_

In this demo, we'll build a simple alarm system. We'll assume a LiDAR motion sensor is feeding a signal into our system (S).

This motion sensor will tolerate movement up to a certain threshold value (T). We'll hardcode this to zero.

There is a reset button (R) that can be used to turn off the alarm.

_Components:_

- **One bit magnitude comparator**:

  - Compare the signal coming from our motion sensor to a threshold value.

- **SR flip-flop**:
  - Synchronize incoming signals.
  - Toggle the alarm on and off based on the sensor and the reset button signals.
  - Retain alarm state via latch.

_Circuit:_

[Alarm System - Logicly](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/alarm_system.logicly)

}
