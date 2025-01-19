---
title: Data Types
course: SDEV200
---

~.toc

- [Data Types](#data-types)
  - [Primitive Data Types](#primitive-data-types)
  - [Which Type to Choose](#which-type-to-choose)
  - [Data Type Suffixes](#data-type-suffixes)
  - [Data Type Conversions](#data-type-conversions)
    - [Implicit Conversion](#implicit-conversion)
    - [Explicit Conversion](#explicit-conversion)
    - [String Conversions](#string-conversions)
  - [Special Note: String Comparison](#special-note-string-comparison)

/~

# Data Types

Java is a statically typed language. This means that:

- Every variable must have a type.
- The type of a variable cannot change after it is declared.

## Primitive Data Types

**Primitive data types** are built-in data types that are directly supported by the language. These serve as the building blocks for more complex data types.

| Type      | Description           |
| --------- | --------------------- |
| `byte`    | 8 bit integer         |
| `short`   | 16 bit integer        |
| `int`     | 32 bit integer        |
| `float`   | 32 bit floating-point |
| `long`    | 64 bit integer        |
| `double`  | 64 bit floating-point |
| `char`    | A Unicode character   |
| `boolean` | True or false values  |

## Which Type to Choose

When choosing the size of a primitive data type, consider the range of values you need to store and the operational constraints of the system.

Larger data types support a wider range of values, but are more memory-intensive and slower to process.

With modern systems, `byte` and `short` are rarely used.

## Data Type Suffixes

Two of the primitive data types require suffixes to indicate the size of the data type.

- `L` for `long`
- `f` for `float`

```java
long bigNumber = 1234567890123456789L;
float bigDecimal = 1234567890123456789.0f;
```

## Data Type Conversions

### Implicit Conversion

If there will be no data loss, the Java compiler will automatically convert a smaller data type to a larger data type. This is called **implicit conversion** or **type promotion**.

```java
int a = 10;
int b = 20;
long c = a + b; // Implicit conversion from int to long
```

### Explicit Conversion

If there will be possible data loss, the user must explicitly convert the data type.

Wrapping the expression in parentheses is called **type casting**.

```java
long a = 10;
long b = 20;
// Explicit conversion from long to int.
// We wrap the expression in parentheses to indicate that we are casting the result of the expression to an int.
int c = (int)(a + b);
```

### String Conversions

Java provides utility methods on each primitive data type to convert between strings and the primitive data type.

```java
// "123" is not actually a number. Below we convert it to an integer.
String number = "123";
int num = Integer.parseInt(number);
```

## Special Note: String Comparison

**When comparing strings, we should use the `equals()` method instead of the `==` operator.**

~.focusContent.lookout

Make sure to use the `equals()` method when comparing strings, not the `==` operator!

The `==` operator compares the references of the strings, not the actual data.

```java
import java.util.Scanner;

class Test {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Would you like to continue (y/n): ");
    String userInput = scanner.nextLine();

    // WILL NOT WORK!
    // The "no" option will always be selected
    if (userInput == "y") {
      System.out.println("User selected yes.");
    } else {
      System.out.println("User selected no.");
    }

    // BEST PRACTICE
    // Use the equals() method to compare strings
    if (userInput.equals("y")) {
      System.out.println("User selected yes.");
    } else {
      System.out.println("User selected no.");
    }

    scanner.close();
  }
}
```

/~
