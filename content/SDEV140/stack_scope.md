---
title: Call Stack and Variable Scope
course: SDEV140
---

~.toc

- [The Call Stack](#the-call-stack)
  - [Stack Data Structure](#stack-data-structure)
  - [Stack Frames](#stack-frames)
  - [Call Stack](#call-stack)

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

A **stack frame** is a data structure that contains all relevant information that's needed to execute a function.

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

<!--
# Variable Scope

```python
# Global scope
total = 100

def calculate_discount():
    # Local scope
    discount_rate = 0.1
    return total * discount_rate

print(total)  # Accessible
# print(discount_rate)  # Would raise NameError
``` -->
