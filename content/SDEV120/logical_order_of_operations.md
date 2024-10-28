---
title: Propositional Logic - Order of Operations
course: SDEV120
---

~.schedule

- [Order of Operations](#order-of-operations)
  - [Arithmetic Order of Operations](#arithmetic-order-of-operations)
    - [Modulus](#modulus)
    - [Practice Problems](#practice-problems)
  - [Logical Order of Operations](#logical-order-of-operations)
    - [Practice Problems](#practice-problems-1)

/~

# Order of Operations

## Arithmetic Order of Operations

| Precedence | Operator | Description    |
| :--------: | :------- | :------------- |
|     1      | ()       | Parentheses    |
|     2      | ^        | Exponent       |
|     3      | \*       | Multiplication |
|     3      | /        | Division       |
|     3      | %        | Modulus        |
|     4      | +        | Addition       |
|     4      | -        | Subtraction    |
|     5      | =        | Assignment     |

Order of operations:

- Expressions in brackets evaluate before the outside of the brackets
- Operators with higher precedence evaluate first
- Expressions evaluate left to right

### Modulus

The **modulus** operator returns the remainder of a division operation.

**_Examples:_**

```
4 % 2   = 2, R0 = 0
5 % 2   = 2, R1 = 1
11 % 9  = 1, R2 = 2
1 % 7   = 0, R1 = 1
```

### Practice Problems

<details>
    <summary>Solve: 100 - 25 * 3 / 5 </summary>
    <div>
        <p>100 - ((25 * 3) / 5)</p>
        <p>100 - (75 / 5)</p>
        <p>100 - 15</p>
        <p>85</p>
    </div>
</details>

<details>
    <summary>Solve: 32 / 4 + 12 / 6 - 9 % 2</summary>
    <div>
        <p>(32 / 4) + (12 / 6) - (9 % 2)</p>
        <p>8 + 2 - 1</p>
        <p>9</p>
    </div>
</details>

## Logical Order of Operations

| Precedence | Operator | Description |
| :--------: | :------- | :---------- |
|     1      | ()       | Parentheses |
|     2      | ¬        | Negation    |
|     3      | ∧        | Conjunction |
|     4      | ∨        | Disjunction |

### Practice Problems

For the following values of x, y, and z:

```
x = True, y = True, z = True
x = False, y = False, z = False
x = True, y = True, z = False
```

Plug in the values and evaluate the following expressions:

```
1. x ∧ y ∧ z
2. x ∨ y ∧ z
3. ( x ∨ y ) ∧ z
4. ¬x ∧ y
5. ¬( x ∧ y )
6. ¬( x ∨ y )
```
