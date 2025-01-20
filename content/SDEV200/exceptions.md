---
title: Exceptions
course: SDEV200
---

~.toc

- [Exceptions](#exceptions)
  - [Try / Catch Blocks](#try--catch-blocks)
  - [The Exception Object](#the-exception-object)
  - [Exception Types](#exception-types)
  - [Try-With-Resources](#try-with-resources)
  - [Propagating Exceptions](#propagating-exceptions)
  - [Validating vs Exception Handling](#validating-vs-exception-handling)

/~

# Exceptions

In Java, errors are handled via **exceptions**.

Exceptions are objects that represent and contain information about errors.

Exceptions are **thrown** when an error occurs.

## Try / Catch Blocks

Any code may be wrapped in a **try block**. If an exception is thrown within the try block, the program will jump to the corresponding **catch block** for the exception type.

This is used to handle errors gracefully, rather than crashing the program.

```java
try {
    // Your code here
} catch (Exception e) {
    // Handle the error gracefully
}
```

The `Exception` class is the base class for all exceptions. It will catch any exception that is thrown.

## The Exception Object

The exception object contains information about the error, including:

- The type of error
- The message
- The stack trace

```java
try {
    // This will be executed
    System.out.println("Print 1");

    // Will throw an exception
    long x = 1 / 0;

    // This will not be executed
    System.out.println("Print 2");
} catch (Exception e) {
    // e.getMessage() returns the error message in a readable format
    System.out.println("Error: " + e.getMessage());
}
```

## Exception Types

It is often preferable to catch specific types of errors rather than using the `Exception` class as a blanket approach.

To do so we use subclasses of the `Exception` class.

```java
try {
    // User provides a filename to open
    File file = new File("user_data.txt");
    Scanner scanner = new Scanner(file);
    // Process file contents...
} catch (FileNotFoundException e) {
    System.out.println("Could not find the file. Please check the filename and try again.");
}
```

## Try-With-Resources

Some resources (like files or database connections) need to be properly closed when we're done using them. We can use a try-with-resources block to automatically close these resources, even if an error occurs.

This is similar to the `with` statement you may have seen in other languages like Python and C#.

```java
try (Scanner scanner = new Scanner(System.in)) {
    // Pretend we had code that threw an exception here...
    // Our scanner will still be closed
    long x = 1 / 0;

    System.out.println("Enter some text: ");
    String text = scanner.nextLine();

} // May or may not handle exceptions here with a catch block
```

## Propagating Exceptions

When an exception is thrown, the program:

- Checks the current method for a catch block that can handle this type of error.
- If it doesn't find one, it moves up the call stack to the method that called this one, and so on.
- If it doesn't find a catch block, the program will terminate.

This process of moving up through the methods looking for error handling is called **propagating** the exception.

~/focusContent.lookout

If a method throws an exception, or if it calls a method that throws an exception, we must declare the exception in the method signature.

/~

~/focusContent.demo

Let's take a look at propagation, and how to interpret the stack trace.

```java
public class Test {
    public static void main(String[] args) {
        try {
            methodA();
        } catch (Exception e) {
            System.out.println("Exception caught in main:");
            e.printStackTrace();
        }
    }

    public static void methodA() throws Exception {
        System.out.println("Entering methodA");
        methodB();
        System.out.println("Exiting methodA"); // This won't execute
    }

    public static void methodB() throws Exception {
        System.out.println("Entering methodB");
        methodC();
        System.out.println("Exiting methodB"); // This won't execute
    }

    public static void methodC() throws Exception {
        System.out.println("Entering methodC");
        throw new Exception("Something went wrong in methodC!");
    }
}
```

/~

## Validating vs Exception Handling

When possible, prefer **validating** input over using exception handling.

~focusContent.example

Assume a simple "divide two numbers" program.

We could use exception handling to handle the divide by zero error.

```java
try {
    long x = 1 / 0;
} catch (ArithmeticException ae) {
    System.out.println("Error: " + ae.getMessage());
}
```

... but it would be better to validate the input before attempting the division.

```java
long numerator = 1;
long denominator = 0;
if (denominator == 0) {
    System.out.println("Error: Denominator cannot be zero.");
} else {
    long x = numerator / denominator;
}
```

/~
