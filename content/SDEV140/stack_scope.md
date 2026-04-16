---
title: Call Stack and Variable Scope
course: SDEV140
---

~.toc

- [The Call Stack](#the-call-stack)
  - [Stack Data Structure](#stack-data-structure)
  - [Stack Frames](#stack-frames)
  - [Call Stack](#call-stack)
- [Variable Scope](#variable-scope)
  - [Local Scope](#local-scope)
  - [Function Inputs and Outputs](#function-inputs-and-outputs)
  - [Global Scope](#global-scope)
  - [Function Best Practices](#function-best-practices)

/~

# The Call Stack

The **call stack**:

- Keeps track of the sequence of function calls in a program
- Is composed of stack frames
- Exists for the lifetime of a program

## Stack Data Structure

A **stack** is a LIFO (last in, first out) data structure.

<figure>
    <span>
        <img src="https://miro.medium.com/v2/resize:fit:640/1*lb-0r80YYhcnoVcQ3HY-1g.gif" style="">
    </span>
    <figcaption>
        <a href="https://medium.com/@todoroski97/data-structure-stack-17b80ed3bfa9">The Stack Data Structure</a>
    </figcaption>
</figure>

## Stack Frames

A **stack frame** is a data structure that contains all relevant information that's needed to execute a function, including its variables. Each function gets its own isolated workspace -- it's much like a snapshot of all of the data about a function at a given point in time.

The **execution context** is the stack frame that's currently being executed. The computer only "pays attention" to the current execution context, and knows nothing about the other stack frames.

For a simple program with no functions (we would typically call this a **script**), the call stack only has one stack frame. It's typically called the **global script** when referring to it.

## Call Stack

Programs are made up of functions that call other functions.

When a program calls a function, a new stack frame is created for that function call and **pushed** onto the top of the call stack. The execution context is then switched to the new stack frame.

Each function operates as if it is its own mini-program, with its own set of variables. When the function finishes, its stack frame is **popped** off the stack, and all of its variables are destroyed.

_Example:_

For the following program:

```python
def is_even(number):
    number_is_even = number % 2 == 0
    return number_is_even

def describe_number(value):
    # Call the helper function
    even_result = is_even(value)

    # Print formatted output
    if even_result:
        print(f"{value} is even.")
    else:
        print(f"{value} is odd.")

# The program starts here
describe_number(8)
```

The call stack would look like this:

```
3. is_even       <- Current execution context if we are inside is_even
2. describe_number
1. Global script
```

Let's try it in VS Code. Run the program, and then open the call stack in the debugger...

~.focusContent.note

A **stack overflow** occurs when the call stack grows too large, and the program runs out of memory.

This is usually caused by a recursive function that calls itself without a base case (i.e., a condition to stop the recursion).

**Try it out!**

Run this for a stack overflow, on the house:

```python
def infinite_recursion():
    infinite_recursion()

infinite_recursion()
```

/~

# Variable Scope

**Scope** is the region of a program where a variable is accessible.

## Local Scope

Any variable that is used within a function is either:

- Passed in as a parameter
- Created within the function

These variables are called **local variables**. They are only accessible within the function where they are defined. This is because they are part of the function's stack frame, and are destroyed when the function returns.

~.focusContent.lookout

Trying to access a local variable outside of its function will cause an error.

```python
def print_name():
    name = "Alice"
    print(name)

## This works fine...
print_name()

## This will cause an error - name only exists within the function
print(name)
```

/~

~.focusContent.example

**Exploring Variable Scope with the Debugger**

Let's use VS Code's debugger to examine the call stack for the "is_even" program above.

/~

## Function Inputs and Outputs

_Inputs_

Data flows into functions through **parameters**. These parameters are **passed by value**, which means that the function receives a copy of the value (not the original value). We will see why this matters later.

If we want to modify the value of a variable that was passed in and access it later, we do so by returning the modified value.

~.focusContent.example

**Basic Input Example**

```python
def print_formatted_name(first_name, last_name):
    formatted = f"{last_name}, {first_name}"
    print(formatted)

first = input("Enter your first name: ")
last = input("Enter your last name: ")
print_formatted_name(first, last)
```

/~

_Outputs_

Data flows out of functions through **return values**.

If we want to return a value to the caller, we do so by using the `return` keyword.

~.focusContent.example

**Basic Output Example**

```python
def get_formatted_name(first_name, last_name):
    formatted = f"{last_name}, {first_name}"
    # Instead of using the value here, return it to the caller
    # and let them use it as they see fit.
    return formatted

first = input("Enter your first name: ")
last = input("Enter your last name: ")
formatted = get_formatted_name(first, last)
print(f"Formatted name: {formatted}")
```

/~

~.focusContent.lookout

**Void Functions**

All functions return a value, even if that value is `None` (in Python) or `void` (in most other languages).

Functions that do not return a (useful) value are called **void functions**. We can prove to ourselves that these functions return `None` by assigning the result to a variable and printing it.

```python
def print_formatted_name(first_name, last_name):
    formatted = f"{last_name}, {first_name}"
    print(formatted)

first = input("Enter your first name: ")
last = input("Enter your last name: ")
result = print_formatted_name(first, last)
print(result)  # None
```

Some other languages require the use of a `void` keyword to indicate that a function does not return a value, so it's worth being aware of this concept.

/~

## Global Scope

Variables defined outside of any function are called **global variables**.

When Python encounters a variable name inside a function, it first checks the function's local scope. If the variable is not found locally, Python checks the global scope. This means that functions can **read** global variables without them being passed as parameters.

However, if a function **assigns** a value to a variable name, Python treats it as a new local variable -- it will not modify the global variable.

In general, global variables should be used sparingly. You might use a global variable if you have a read-only constant that is used in many places in your program:

```python
def print_student_record(student_id):
    print(f"Student ID: {student_id}, Program: {PROGRAM_CODE}")

def print_course_info():
    print(f"Course Code: {PROGRAM_CODE}")

# Global variable - other functions can "see" this
PROGRAM_CODE = "SDEV140"

print_student_record("A12345")
print_course_info()
```

~.focusContent.lookout

**Variable Masking**

Updating a local variable will not affect the value of a variable that was passed in, even if those variables have the same name. Using the same variable name for different purposes is called **variable masking**, and we should try to avoid this.

**_The function creates its own local variable, which is a copy of the value passed in._** Updating this local variable does not affect the value of the variable that was passed in.

Take a look at the Stack Trace in the VS Code debugger to see how this works.

```python
def update_name(name):
    name = name.upper()
    print(name)  # ALICE

name = "Alice"
print(name)  # Alice
update_name(name)
print(name)  # Alice
```

This is a foundational concept in programming - make sure you understand it well!

/~

## Function Best Practices

- Functions should receive data through **parameters** and return data through **return values**.
- Avoid using global variables from within functions when possible -- it makes code harder to understand and debug.
- If you need a global variable, use it as a read-only constant (e.g., `PROGRAM_CODE = "SDEV140"`).
