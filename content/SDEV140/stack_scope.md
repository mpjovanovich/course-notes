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
  - [Global Scope](#global-scope)
  - [Function Scope](#function-scope)
  - [Scope Examples](#scope-examples)

/~

# The Call Stack

The **call stack**:

- Keeps track of the sequence of function calls in a program
- Is composed of stack frames
- Exists for the lifetime of a program

## Stack Data Structure

A **stack** is a LIFO (last in, first out) data structure.

It's like laying down a stack of cards. You can only add or remove cards from the top of the stack.

<figure>
    <span>
        <img src="https://miro.medium.com/v2/resize:fit:640/1*lb-0r80YYhcnoVcQ3HY-1g.gif" style="">
    </span>
    <figcaption>
        <a href="https://medium.com/@todoroski97/data-structure-stack-17b80ed3bfa9">The Stack Data Structure</a>
    </figcaption>
</figure>

## Stack Frames

A **stack frame** is a data structure that contains all relevant information that's needed to execute a function. It's much like a snapshot of all of the data about a function at a given point in time.

The **execution context** is the stack frame that's currently being executed. The computer only "pays attention" to the current execution context, and knows nothing about the other stack frames.

For a simple program with no functions (we would typically call this a **script**), the call stack only has one stack frame. It's typically called the **global script** when referring to it.

## Call Stack

When a program calls a function, a new stack frame is created for that function call and **pushed** onto the top of the call stack. The execution context is then switched to the new stack frame. Each function operates as if it is its own program.

_Example:_

For the following program:

```python
def greet(name):
    message = f"Hello, {name}!"
    return message

def main():
    user = "Alice"
    result = greet(user)
    print(result)

main()
```

The call stack would look like this:

```
3. greet(name="Alice")     <- Current execution context
2. main()
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

**Scope** is the region of a program where a variable is accessible. In Python, there are two types of scope:

- **Global scope**: accessible everywhere in the program
- **Function scope**: accessible only within the function where it's defined

## Global Scope

Variables defined outside of any function are called **global variables**. They are accessible everywhere in the program, even within functions.

In general, global variables should be used sparingly. You might use a global variable if you have a read only constant value that is used in many places in your program:

```python
PROGRAM_CODE = "SDEV140"

# Program code is used here...
def print_student_record(student_id):
    print(f"Student ID: {student_id}, Program: {PROGRAM_CODE}")

# and here...
def print_course_info():
    print(f"Course Code: {PROGRAM_CODE}")

print_student_record("A12345")
print_course_info()
```

## Function Scope

More typically, any variable that needs to be used within a function is either:

- Passed in as a parameter
- Created within the function

These variables are called **local variables**. They are only accessible within the function where they are defined.

This is because they are part of the function's stack frame, and are not accessible outside of that frame.

## Scope Examples

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

~.focusContent.lookout

Updating a local variable will not affect the value of a variable that was passed in.

**_The function creates its own local variable, which is a copy of the value passed in_**. Updating this local variable does not affect the value of the variable that was passed in.

Take a look at the Stack Trace in the VS Code debugger to see how this works.

```python
def update_name(name):
    # This "name" is actually a completely new local variable with no connection
    # to the name variable in the outer scope
    name = name.upper()
    print(name)  # ALICE

name = "Alice"
print(name)  # Alice
update_name(name)
print(name)  # Alice
```

/~

~.focusContent.example

If we want to modify the value of a variable that was passed in and access it later, we do so by returning the modified value.

```python
def update_name(name):
    name = name.upper()
    return name

name = "Alice"
name = update_name(name)
print(name)  # ALICE
```

/~
