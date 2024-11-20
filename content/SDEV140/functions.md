---
title: Functions and Modularity
course: SDEV140
---

~.toc

- [Functions in Python](#functions-in-python)
  - [What are Functions?](#what-are-functions)
  - [How are Functions Used?](#how-are-functions-used)
  - [Key Components](#key-components)
  - [Examples](#examples)
  - [Why do we use Functions?](#why-do-we-use-functions)
  - [Function Naming Conventions](#function-naming-conventions)
  - [Parameters vs. Arguments](#parameters-vs-arguments)
  - [Walkthrough](#walkthrough)
  - [Refactoring](#refactoring)

/~

# Functions in Python

## What are Functions?

Functions are reusable blocks of code that perform a specific task. They can be called multiple times with different inputs to perform the same task. Functions operate like a mini-program within a program.

Functions are a way to:

- Take data as input (Optionally)
- Perform some operations
- Return data as output (Optionally)

## How are Functions Used?

_Definition:_

A function is first **defined**.

This definition is a very simple program that fulfills a specific task. You might think of it as template that's waiting to be used.

_Call:_

A function is then **called** using its name followed by parentheses. The function may be called as many times as needed throughout the program.

Larger complex programs are built by combining many simple functions.

## Key Components

**Anatomy:**

```python
def function_name(parameter1, parameter2, ...):
    # Function body
    return value
```

| Component     | Description                                                                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Identifier    | The name of the function. In Python this is preceded by the `def` keyword.                                                                                                           |
| Parameters    | Data that the function takes as input. These are the variables that are "plugged in" to the function. There may be no variables or many variables. These are wrapped in parenthesis. |
| Return value  | Data that the function returns as output. This data is returned to the **caller**. In Python this is done using the `return` keyword.                                                |
| Function body | The code inside the function. This is indented one level from the `def` keyword.                                                                                                     |

## Examples

Let's look at some examples of functions with different inputs and outputs.

~.focusContent.example

**Function with no inputs and no outputs:**

_Definition:_

```python
def add_numbers():
    sum = 1 + 2
    print(sum)
```

_Call:_

```python
add_numbers()
```

/~

~.focusContent.example

**Function with input:**

_Definition:_

```python
def add_one (num):
    sum = num + 1
    print(sum)
```

_Call:_

```python
add_one(5)
```

/~

~.focusContent.example

**Function with multiple inputs:**

_Definition:_

```python
def add_two_numbers(num1, num2):
    sum = num1 + num2
    print(sum)
```

_Call:_

```python
add_two_numbers(1, 2)
```

/~

~.focusContent.example

**Function with inputs and outputs:**

_Definition:_

```python
def add_two_numbers(num1, num2):
    sum = num1 + num2
    return sum
```

_Call:_

```python
result = add_two_numbers(1, 2)
print(result)
```

/~

## Why do we use Functions?

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

## Parameters vs. Arguments

A **parameter** is the variable in the function definition.

An **argument** is the value passed to the function when it is called.

_Function definition:_

```python
# thing is the parameter
def do_something(thing):
    # Function body
```

_Function call:_

We can pass a literal value as the argument...

```python
# "jumping" is the argument that we pass to the function
do_something("jumping")
```

Or we can pass a variable as the argument...

```python
# activity is the argument that we pass to the function
activity = "jumping"
do_something(activity)
```

## Walkthrough

~.focusContent.demo

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
