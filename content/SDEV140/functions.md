---
title: Functions and Modularity
course: SDEV140
---

~.toc

- [Functions in Python](#functions-in-python)
  - [Why Use Functions?](#why-use-functions)
  - [Function Naming Conventions](#function-naming-conventions)
  - [Function Definition](#function-definition)
  - [Key Components](#key-components)
  - [Parameters vs. Arguments](#parameters-vs-arguments)
  - [Examples](#examples)
  - [Refactoring](#refactoring)

/~

# Functions in Python

## Why Use Functions?

**Code Reuse**

- Implement the **Don't Repeat Yourself** (DRY) principle
- Write code once, use multiple times

**Code Organization**

- Break complex programs into manageable pieces
- Apply **single responsibility principle**
- Each function should have a clear, specific purpose

**Code Readability**

- Use descriptive, verb-based function names
- Make code self-documenting

## Function Naming Conventions

User input:

```python
def get_user_input()
def get_user_input_as_int()
```

Getters and setters:

```python
def get_account_balance()
def update_account_balance()
```

Boolean checks:

```python
def is_user_logged_in()
def is_user_admin()
```

Data processing:

```python
def calculate_tax()
def filter_items_by_user()
```

## Function Definition

```python
def function_name(parameter1, parameter2, ...):
    # Function body
    return value
```

## Key Components

| Component     | Description                                                                |
| ------------- | -------------------------------------------------------------------------- |
| Identifier    | The name of the function.                                                  |
| Parameters    | Zero or more values that the function takes as input.                      |
| Return value  | A value returned by the function (even if that value is `None` or `void`). |
| Function body | The code inside the function.                                              |

## Parameters vs. Arguments

A **parameter** is the variable in the function definition.

An **argument** is the value passed to the function when it is called.

_Function definition:_

```python
# thing = parameter
def do_something(thing):
    # Function body
```

_Function call:_

```python
# jump = argument
do_something("jumping")
```

Variable names for parameters and arguments do not have to match:

```python
activity = "jumping"
do_something(activity)
```

We will see why when we discuss **scope**.

## Examples

~.focusContent.example

**Let's try a few functions:**

- A simple `print_header` function for a report (no arguments)
- Wrap some text in an HTML `<p>` tag
- Wrap some text in a tag provided as a parameter
- Calculate the sum of a list of numbers
- Find the index of an item in a list
- Print items in a list formatted in a specific way
- Get user input as integer

/~

## Refactoring

**Refactoring** is the process of restructuring code without changing its external behavior.

~.focusContent.demo

**Let's take a messy program and refactor it using functions:**

```python
# messy_program.py
# TODO
```

/~

<!-- ## Function Composition

### Nested Function Calls

```python
def add_one(x):
    return x + 1

def add_five(x):
    return x + 5

result = add_five(add_one(3))  # (3 + 1) + 5 = 9
```

### Method Chaining

```python
text = "  Hello, World!  "
# Strip whitespace,
# convert to lowercase,
# replace "world" with "Python"
cleaned_text = text.strip().lower().replace("world", "Python")
```

## The Call Stack

### Stack Data Structure

LIFO (last in, first out) data structure.

<figure>
    <span>
        <img src="https://miro.medium.com/v2/resize:fit:640/1*lb-0r80YYhcnoVcQ3HY-1g.gif" style="">
    </span>
    <figcaption>
        <a href="https://medium.com/@todoroski97/data-structure-stack-17b80ed3bfa9">The Stack Data Structure</a>
    </figcaption>
</figure>

### Stack Frames

A stack frame:

- Represents the execution context of a single function call.
- Contains all data relevant to the function call.
- Exists only during the execution of a function call.

### Call Stack

The call stack:

- Keeps track of the sequence of function calls in a program
- Is composed of stack frames
- Exists for the lifetime of a program

**Stack overflow** = when the call stack grows too large, and the program runs out of memory.

## Variable Scope

```python
# Global scope
total = 100

def calculate_discount():
    # Local scope
    discount_rate = 0.1
    return total * discount_rate

print(total)  # Accessible
# print(discount_rate)  # Would raise NameError
```

## Named Arguments

Up until now we have used **positional arguments** - the order of arguments determines how they're "plugged in".

We can also pass **named arguments** to a function by name. Useful when function has many parameters.

```python
def greet( first_name, last_name ):
    print(f"Hello, {first_name} {last_name}!")

## All of these are equivalent
greet( "Billy", "Billy" )
greet( first_name="Billy", last_name="Billy" )
greet( last_name="Bornsen", first_name="Billy" )
```

## Default Parameters

We can provide default values for parameters.

Useful when most of the time we want to use the same value in function call.

```python
def greet( name="Jumping Jennifer" ):
    print(f"Hello, {name}!")

greet() # prints "Hello, Jumping Jennifer!"
greet("Dancing Denise") # prints "Hello, Dancing Denise!"
```

E.g.: the `print()` function has a default value for the `end` parameter.

```python
# Default implementation: print("Hello", end="\n")
# Let's change the default value of end to a space
print("Hello", end=" ")
print("Jumping Jennifer!")
```

If we have both default and non-default parameters, non-defaults must come first.

```python
def greet( name="Jumping Jennifer", greeting ):
    print(f"{greeting}, {name}!")

greet("Hello") # SyntaxError: non-default argument follows default argument
```

## Review: Best Practices

- Keep functions small and focused.
- Use meaningful names.
- Prefer returning values over modifying global state.
- Handle potential errors. Document any exceptions that may be raised. -->
