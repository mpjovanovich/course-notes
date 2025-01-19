---
title: Compiling and Running a Program
course: SDEV200
---

~.toc

- [Compiling and Running a Program](#compiling-and-running-a-program)
  - [Compilation](#compilation)
  - [Running the Program](#running-the-program)

/~

# Compiling and Running a Program

## Compilation

Java programs must be compiled before they can be run. We can compile a program using the `javac` command.

```bash
javac <filename>.java
```

This will compile the program and create a `.class` file in the same directory as the `.java` file.

## Running the Program

We can run the program using the `java` command.

```bash
java <filename>
```

Note that you do not need to include the `.class` extension when running the program.

~.focusContent.note

It may seem like we're "running" the program directly in an IDE such as VS Code. The **debugger** is actually a special program that compiles and runs the program for us and keeps track of the program's state to aid with development.

/~
