---
title: Reference Types
course: SDEV200
---

~.toc

- [Reference Types](#reference-types)
  - [Copying Objects](#copying-objects)
    - [Shallow Copy](#shallow-copy)
    - [Deep Copy](#deep-copy)
  - [Passing Data to Methods](#passing-data-to-methods)
    - [Primitive Types](#primitive-types)
    - [Reference Types](#reference-types-1)
  - [String](#string)

/~

# Reference Types

A **reference type** is a type whose variable holds a reference to an object.

The reference is simply a memory address for the object.

This has consequences for how the data is stored and accessed, especially in the cases of:

- Copying objects
- Passing data to methods

Some common reference types include:

- `String`
- `Arrays`
- Custom classes

## Copying Objects

When you copy an object in Java, you are copying the reference to the object, not the object itself.

In other words, you've created a new reference to the same object, since you're pointing to the same memory address.

### Shallow Copy

A basic assignment from one object to another is called a **shallow copy**.

In this example, `array2` is a reference to the same object as `array1`.

```java
// Original array
int[] array1 = {0, 0, 0};

// Shallow copy of array1
int[] array2 = array1;

// Modify the first element of array2
array2[0] = 1;

// Print the first element of both arrays
System.out.println(array1[0]); // 1
System.out.println(array2[0]); // 1
```

### Deep Copy

A **deep copy** is a copy of an object that includes a copy of all the data in the object.

It can be done manually, or Java provides a `clone()` method on objects for this purpose.

```java
// Original array
int[] array1 = {0, 0, 0};

// Deep copy of array1
int[] array2 = array1.clone();

// Modify the first element of array2
array2[0] = 1;

// Print the first element of both arrays
System.out.println(array1[0]); // 0
System.out.println(array2[0]); // 1
```

## Passing Data to Methods

When data are passed to a method, a copy of the data is made.

### Primitive Types

This is why the original data is not modified if we modify the data in the method for primitive types.

```java
public static void modifyData(int data) {
    data = 10;
}

public static void main(String[] args) {
    int a = 1;
    modifyData(a);
    System.out.println(a); // 1
}
```

### Reference Types

With reference types, the reference is copied.

Because this reference points to the same object in memory, the original data is modified if the data is modified in the method.

```java
public static void modifyData(int[] array) {
    array[0] = 10;
}

public static void main(String[] args) {
    int[] array = {0, 0, 0};
    modifyData(array);
    System.out.println(array[0]); // 10
}
```

~.focusContent.lookout

It's a commmon mistake to modify an object passed to a method, thinking that the original data will be preserved.

If you need to manipulate an object in a method but leave the original data unchanged, you need to make a deep copy of the object.

```java
public static void printSortedArray(int[] array) {
    // Make a deep copy of the array
    int[] newArray = array.clone();
    Arrays.sort(newArray);
    System.out.println(newArray[0]); // -1
}

public static void main(String[] args) {
    int[] array = {99, -1, 4};
    printSortedArray(array);

    // The original array is not modified
    System.out.println(array[0]); // 99
}
```

/~

## String

The `String` class is a special case of a reference type. When you assign a `String` to a new variable, you are not copying the reference, but the actual data. It will not behave like the array example above.

We do see the reference behavior when comparing strings.

~.focusContent.lookout

**Make sure to use the `equals()` method when comparing strings, not the `==` operator!**

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
