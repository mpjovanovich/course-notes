---
title: Input / Output
course: SDEV200
---

~.toc

- [Output](#output)
- [Input](#input)
  - [Basic Usage](#basic-usage)
  - [Scanner Methods](#scanner-methods)
  - [The Input Buffer](#the-input-buffer)

/~

# Output

We use the following methods to output data to the console:

| Method                 | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| `System.out.print()`   | Prints the data to the console without a newline.                     |
| `System.out.println()` | Prints the data to the console with a newline.                        |
| `System.out.printf()`  | Prints the data to the console with a newline, using a format string. |

These methods are overloaded to accept many different types of data.

```java
System.out.println("Hooray printing!");
System.out.println(123);
System.out.println(123.456);
System.out.println(true);
```

# Input

To read input from the console, we use the `Scanner` class.

## Basic Usage

We must first import the `Scanner` class from the `java.util` package, then create a `Scanner` object and pass `System.in` to the constructor.

Unlike Python's `input()` function, we prompt the user for input using a print function call prior to reading the input.

After reading all input, we should close the `Scanner` object to free up resources.

```java
import java.util.Scanner;

class Test {
  public static void main(String[] args) {
    // Create a Scanner object
    Scanner scanner = new Scanner(System.in);

    // Prompt the user to enter some text
    System.out.print("Enter some text: ");

    // Read the text entered by the user
    String text = scanner.nextLine();

    // Print the text entered by the user
    System.out.println("--- User Text ---");
    System.out.println(text);

    // Close the Scanner object to free resources
    scanner.close();
  }
}
```

~.focusContent.lookout

When prompting the user for input, be sure to use the `print()` method, not `println()`.

Otherwise the prompt will be followed by a line break.

/~

## Scanner Methods

The `Scanner` class has methods for reading different types of data.

| Method                 | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| `scanner.next()`       | Reads the next token from the console as a String.         |
| `scanner.nextLine()`   | Reads the next line of input from the console as a String. |
| `scanner.nextInt()`    | Reads the next integer from the console.                   |
| `scanner.nextLong()`   | Reads the next long from the console.                      |
| `scanner.nextFloat()`  | Reads the next float from the console.                     |
| `scanner.nextDouble()` | Reads the next double from the console.                    |

```java
System.out.print("Enter your age: ");
int age = scanner.nextInt();
```

## The Input Buffer

The **input buffer** is the area of memory where the input is stored.

The `Scanner` reads and **consumes** from the input buffer in units called **tokens**.

Tokens are delimited by whitespace (spaces, tabs, and newlines) by default.

Tokens remain in the buffer until they are consumed.

~.focusContent.lookout

Except for `nextLine()`, the methods above consume a single token at a time. If you are reading a piece of data using one of these methods that is followed by a newline, you will need to consume the newline before reading again.

Try removing the `scanner.nextLine()` call in the following code after the `nextInt()` call, and see what happens.

```java
Scanner scanner = new Scanner(System.in);

System.out.print("Enter your age: ");
int age = scanner.nextInt();
scanner.nextLine();

System.out.print("Enter your name: ");
String name = scanner.nextLine();

System.out.println(name + " is " + age + " years old.");
scanner.close();
```

/~
