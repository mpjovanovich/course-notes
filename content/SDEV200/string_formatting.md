---
title: String Formatting
course: SDEV200
---

~.toc

- [String Formatting](#string-formatting)

/~

# String Formatting

We can get fine control over the formatting of strings using the `printf()` method and **format specifiers**.

Format specifiers are placeholders for variables in a string, along with information about how to format the variable. Here are some common format specifiers:

| Specifier | Type         |
| --------- | ------------ |
| %d        | integer      |
| %f        | float/double |
| %s        | string       |
| %c        | character    |
| %b        | boolean      |
| %n        | newline      |
| %tD       | date         |
| %tT       | time         |

~.focusContent.example

The examples below show a String, int, and double used with the `printf()` method. Each call also ends with a newline character using `%n`.

```java
String name = "John";
int age = 20;
System.out.printf("Name: %s, Age: %d%n", name, age);

double price = 1.1;
System.out.printf("Price: $%.2f%n", price);
```

/~

We can also use flags to format the output.

~.focusContent.example

```java
String user1 = "Alice Apple";
String user2 = "Edward Turkey";
String user3 = "Bobby Beebop";

int age1 = 25;
int age2 = 30;
int age3 = 35;

// Print output in tabular format
// The '-' flag left justifies the text instead of the default right justification
System.out.printf("%-15s %10s\n", "Name", "Age");
System.out.println("_".repeat(15) + " " + "_".repeat(10));
System.out.printf("%-15s %10d\n", user1, age1);
System.out.printf("%-15s %10d\n", user2, age2);
System.out.printf("%-15s %10d\n", user3, age3);
```

/~
