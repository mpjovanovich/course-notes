---
title: Command Line Arguments
course: SDEV200
---

~.toc

- [Command Line Arguments](#command-line-arguments)

/~

# Command Line Arguments

We've seen that every program must have a `main` method that accepts a `String[]` array as an argument.

```java
public static void main(String[] args) {
  // ...
}
```

This `String[]` array contains **command line arguments** that are passed to the program when it is run:

```bash
java <filename> <arg1> <arg2> <arg3>
```

The `args` array will contain the arguments in the order they are passed.

```java
System.out.println(args[0]); // arg1
System.out.println(args[1]); // arg2
System.out.println(args[2]); // arg3
```

~.focusContent.note

There are ways to pass command line arguments to a debugger within an IDE. It is often easier and more practical to hardcode arguments in the program itself during development, then remove them before running the program in production.

```java
// Uncomment this when code is ready for production
// try (Scanner scanner = new Scanner(new File(args[0]))) {
try (Scanner scanner = new Scanner(new File("test.txt"))) {
```

/~

~.focusContent.example

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class Test {
  public static void main(String[] args) {
    if (args.length != 1) {
      System.out.println("Usage: java FileWordCount filepath");
      return;
    }

    try (Scanner scanner = new Scanner(new File(args[0]))) {
      int words = 0;
      while (scanner.hasNext()) {
        scanner.next();
        words++;
      }
      System.out.printf("Word count: %d%n", words);
    } catch (FileNotFoundException e) {
      System.err.println("File not found: " + args[0]);
    }
  }
}
```

/~
