---
title: Utility Classes
course: SDEV200
---

~.toc

- [Utility Classes](#utility-classes)
  - [String](#string)
  - [Arrays](#arrays)
  - [Math](#math)
  - [Random](#random)

/~

# Utility Classes

Unlike traditional classes, which are designed to hold state, **utility classes** are meant to provide static methods for common operations.

Some common utility classes are listed below.

## String

The `String` class provides a variety of static "helper methods" for manipulating strings for common operations such as:

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

- Converting to strings
- Searching
- Sorting
- Comparing

```java
String s = "hello";

// Comparison
String other = "hello";
s.equals(other); // true

// Searching
s.contains("el"); // true
s.indexOf("l"); // 2
s.lastIndexOf("l"); // 3
s.startsWith("he"); // true
s.endsWith("lo"); // true

// Modification
s.toUpperCase(); // "HELLO"
s.toLowerCase(); // "hello"
s.trim(); // Remove whitespace
s.strip(); // Better trim (Unicode)
s.substring(0, 3); // "hel"
s.replace("l", "L"); // "heLLo"
```

## Arrays

The `Arrays` class provides a variety of static "helper methods" for manipulating arrays for common operations such as:

[Arrays](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html)

- Searching
- Sorting
- Converting to strings
- Copying
- Filling
- Comparing

```java
Arrays.sort(array);
Arrays.toString(array);
Arrays.copyOf(array, array.length);
Arrays.fill(array, value);
Arrays.equals(array1, array2);
```

## Math

The `Math` class provides a variety of static methods for performing mathematical operations:

[Math](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html)

- Absolute value
- Trigonometric functions
- Power functions
- Logarithmic functions

```java
Math.abs(number);
Math.sin(number);
Math.pow(base, exponent);
Math.log(number);
```

## Random

The `Random` class provides a variety of static methods for generating random numbers:

[Random](https://docs.oracle.com/javase/8/docs/api/java/util/Random.html)

```java
Random.nextInt(max);
Random.nextDouble();
Random.nextBoolean();
```
