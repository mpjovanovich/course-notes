---
title: Arrays
course: SDEV200
---

~.toc

- [Arrays](#arrays)
  - [Creating Arrays](#creating-arrays)
    - [Initializing Empty Arrays](#initializing-empty-arrays)
    - [Initializing with Values](#initializing-with-values)
  - [Indexing](#indexing)
  - [Accepting Arrays as Parameters](#accepting-arrays-as-parameters)
  - [Two-Dimensional Arrays](#two-dimensional-arrays)
  - [Dynamic Sizing with ArrayList](#dynamic-sizing-with-arraylist)

/~

# Arrays

An array is a collection of elements of the same type. These elements are stored in contiguous memory locations. This means that the elements are stored next to each other in memory.

Arrays are of a fixed size. Once an array is created, its size cannot be changed. This allows for efficient memory access, since the size of the array is known at compile time.

## Creating Arrays

Arrays are declared by adding square brackets after the data type.

Arrays are objects in Java, so we use the `new` keyword to create an array.

### Initializing Empty Arrays

The size of the array is specified in the square brackets on the right side of the assignment operator.

```java
// An empty array of 5 integers
int[] numbers = new int[5];
```

The array is not actually empty. By default, the elements of the array are initialized to the default value for the data type. For example, the default value for an `int` is `0`.

### Initializing with Values

We use curly braces to initialize the array with values known ahead of time.

```java
// An array of 5 integers initialized to 1, 2, 3, 4, 5
int[] numbers = { 1, 2, 3, 4, 5 };
```

## Indexing

The elements are accessed using an **index**. The index is an integer that represents the position of the element in the array.

```java
// Accessing the first element of the array
int firstNumber = numbers[0];

// Accessing the last element of the array
int lastNumber = numbers[numbers.length - 1];

// Modifying an element of the array
numbers[0] = 10;

// Printing values
System.out.println(numbers[0]);
System.out.println(numbers[1]);
```

## Accepting Arrays as Parameters

We can pass arrays as parameters to methods, just like any other data type.

```java
public static void printArray(int[] numbers) {
    for (int i = 0; i < numbers.length; i++) {
        System.out.println(numbers[i]);
    }
}
```

## Two-Dimensional Arrays

A two-dimensional array is an array of arrays. This means that each element of the array is itself an array.

~.focusContent.example

**Truth Table for Logical AND**

```java
// Truth table for logical AND
// This is a 4x3 array - four rows and three columns
boolean[][] truthTable = {
    // Inner arrays are rows
    {true, true, true},
    {true, false, false},
    {false, true, false},
    {false, false, false}
};

// Print the truth table
System.out.println("Truth table for logical AND");
System.out.println("-----------------------------");

// truthTable.length gives the number of rows
for (int row = 0; row < truthTable.length; row++) {
    // truthTable[row].length gives the number of columns in the current row
    for (int col = 0; col < truthTable[row].length; col++) {
    System.out.print(truthTable[row][col] + " ");
    }
    // Print a newline after each row
    System.out.println();
}
```

/~

~.focusContent.example

**Student Grades**

```java
public static void printScores(String[] students, int[][] scores) {
    // Print out the student names and their scores in tabular format using format strings
    System.out.printf("%-10s\t%7s\t%7s\t%7s%n", "Student", "Labs", "Midterm", "Final");

    for (int i = 0; i < students.length; i++) {
        // Print the student name
        System.out.printf("%-10s\t", students[i]);

        // Loop through the array of scores for the current student
        for (int j = 0; j < scores[i].length; j++) {
            System.out.printf("%7d\t", scores[i][j]);
        }
        System.out.println();
    }
}

public static void main(String[] args) {
    // Create an array for student names
    String[] students = {"Alf", "Bingo", "Rolly", "Jenna"};

    // 2D array to track student scores for each student
    int[][] scores = {
        {90, 80, 70},
        {85, 75, 95},
        {70, 60, 80},
        {95, 85, 75}
    };

    // Call the printScores method to print the student scores
    printScores(students, scores);
}
```

/~

## Dynamic Sizing with ArrayList

The `ArrayList` class is a dynamic array that can grow or shrink as needed. It is part of the `java.util` package.

While there is a performance overhead for this dynamic sizing, for most applications ArrayList's convenience and flexibility outweigh its minor performance overhead.

```java
ArrayList<String> names = new ArrayList<>();

// Add an element to the ArrayList
names.add("John");

// Remove an element from the ArrayList
names.remove(0);
```

We will discuss `ArrayList` in more detail later in the course. It's important to understand basic arrays, as they are foundational to more complex data structures.
