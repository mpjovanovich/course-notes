---
title: Functions and Modularity
course: SDEV140
---

~.toc

- [Functions in Python](#functions-in-python)
  - [What are Functions?](#what-are-functions)
  - [How are Functions Used?](#how-are-functions-used)
  - [Key Components](#key-components)
  - [Basic Examples](#basic-examples)
  - [Why do we use Functions?](#why-do-we-use-functions)
  - [Function Naming Conventions](#function-naming-conventions)
  - [Parameters vs. Arguments](#parameters-vs-arguments)
    - [Parameters](#parameters)
    - [Arguments](#arguments)
  - [Walkthrough: Creating an HTML Report](#walkthrough-creating-an-html-report)
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

## Basic Examples

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

Functions typically start with a verb:

_Get input data:_

```python
def get_user_input()
def get_first_name()
def get_age()
def get_first_record()
```

_Process some data:_

```python
def calculate_tax()
def filter_items_by_user()
def sort_items()
def format_items()
```

_Boolean checks:_

```python
def is_user_logged_in()
def is_user_admin()
def has_permission()
def contains_item()
```

## Parameters vs. Arguments

### Parameters

A **parameter** is the variable in the function definition.

_Function definition:_

```python
# thing is the parameter
def do_something(thing):
    # Function body
```

### Arguments

An **argument** is the value passed to the function when it is called.

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

## Walkthrough: Creating an HTML Report

~.focusContent.demo

**Let's try a few functions:**

In this demo we will create a program that prints an HTML document that displays the items in a list. The end result of the report should look something like this:

```html
<head>
  <title>My Report</title>
</head>
<body>
  <h1>My Report</h1>
  <p>Available items as of today:</p>
  <ul>
    <li>Apples</li>
    <li>Oranges</li>
    <li>Pears</li>
  </ul>
</body>
```

\* _Note: our HTML will have to be mashed into one line so that we can use f-strings_

Functions:

- Start with `create_html_report` function - the main function that creates the HTML document
- Pass in the title as a parameter and add to the HTML
- Create a `create_html_element` function to wrap text in a tag
  - Pass description to create_html_report
  - Use to create h1 and p tags
- Create a `create_ul` function to create an unordered list
  - Pass in the list of items
  - Loop through the list and create a list item for each element

<!-- - Get user input as integer, loop until valid input -->

/~

## Refactoring

**Refactoring** is the process of restructuring code without changing its external behavior.

~.focusContent.demo

**Refactor the Following:**

We can clean up this program by breaking it into smaller functions:

- `calculate_dog_age`
- `print_greeting`

```python
# Program to greet people and tell them their age in dog years
print("Welcome to the Dog Age Calculator!")

name1 = "Alice"
age1 = 15
dog_age1 = age1 * 7
print(f"Hello, {name1}, you are {age1} years old")
print(f"In dog years you are {dog_age1} years old")
print()

name2 = "Bob"
age2 = 12
dog_age2 = age2 * 7
print(f"Hello, {name2}, you are {age2} years old")
print(f"In dog years you are {dog_age2} years old")
print()

name3 = "Charlie"
age3 = 14
dog_age3 = age3 * 7
print(f"Hello, {name3}, you are {age3} years old")
print(f"In dog years you are {dog_age3} years old")
print()
```

/~

### Useful Function Hint

Get user input as float / integer, loop until valid input...

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
