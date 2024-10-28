---
title: Input, Output, and Comments in Python
course: SDEV120
---

~.schedule

- [Code Comments](#code-comments)
- [Output in Python](#output-in-python)
- [Input in Python](#input-in-python)

/~

~~fig{https://imgs.xkcd.com/comics/code_quality_2.png}

# Code Comments

**Comments** are lines of code that are not actually executed by the computer. They may be used to:

- Provide metadata about the code (author, date, etc.)
- Explain what the code does
- Disable code temporarily
- Make notes as code is being developed

To create a comment in Python, use the `#` symbol. Anything after the `#` will be ignored by the Python interpreter. For example:

```python
# This program calculates the area of a circle...
```

# Output in Python

To output information in Python, you can use the **`print()`** function. Whatever is in between the parentheses will be displayed in the console.

_Example:_

```python
# Printing a string
print("SDEV 120 is the best class.")

# Printing a number
x = 1
print(x)
```

_Common Mistakes:_

**Forgetting Quotes**

Remember to wrap any strings (text) in single or double quotes.

```
# Will not work
print(SDEV 120 is the best class.)
```

**Forgetting Parentheses**

The `print()` function requires parentheses. If you forget them, you will get a syntax error.

```
# Will not work
print "SDEV 120 is the best class."
```

# Input in Python

To get input from the user, you can use the **`input()`** function. This function will display a prompt to the user and wait for them to press the `Enter` key.

_Example:_

```python
# Get the user's name
name = input("Enter your name: ")
```

_Common Mistakes:_

**Forgetting the Assignment**

The `input()` function will return the user's input, but you need to store it in a variable.

```python
# Will not give an error, but doesn't do anything useful
input("Enter your name: ")
```

**Sloppy Prompts**

The **prompt** - the text that the user sees in the console - will be displayed exactly as it is written inside of the quotes.

It is good practice to include a space at the end of the prompt (before the closing quote) to separate it from the user's input.

Run the following two commands and write your name in the console. Note the difference:

```python
name = input("Enter your name:")
```

```python
name = input("Enter your name: ")
```
