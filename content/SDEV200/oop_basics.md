---
title: Object Oriented Programming
course: SDEV200
---

~.toc

- [Object Oriented Programming](#object-oriented-programming)
  - [Definitions](#definitions)
  - [Creating a Class in Java](#creating-a-class-in-java)
  - [Constructors](#constructors)

/~

# Object Oriented Programming

## Definitions

- **Object Oriented Programming (OOP)** is a programming paradigm where we model real-world objects
- **Classes** are blueprints used to create objects.
- **Objects** are **instances** of a class.
- **Methods** are functions inside a class.
- **Properties** are variables inside a class.
- **State** is the current collective value of an object's properties.

## Creating a Class in Java

- We use the `class` keyword to create a class.
- Classes must be in a file named the same as the class name.
- Any classes in the same directory will be automatically imported.

_Person.java_

```java
// Define the Person class
public class Person {
    // Properties
    private String name = "Bob";

    // Methods
    public void printMessage() {
        System.out.println("This is the message.");
    }
}

```

_Test.java_

```java
public class Test {
    public static void main(String[] args) {
        Person person = new Person();
        person.printMessage();
    }
}
```

## Constructors

- A **constructor** is a special method that is called when an object is created.
- The constructor is used to initialize the object.
- A default constructor is created if no constructor is defined.

_Person.java_

```java
public class Diety {
  // Declare the name field, but don't set it.
  private String name;
  private String title;

  public Diety(String name, String title) {
    // Name is set in the constructor.
    this.name = name;
    this.title = title;
  }

  public void printMessage() {
    System.out.printf("Greetings from %s: %s.%n", name, title);
  }
}
```

_Test.java_

```java
class Test {
  public static void main(String[] args) {
    Diety diety2 = new Diety("Shiva", "The Destroyer");
    diety2.printMessage();

    Diety diety = new Diety("The Holy Trinity", "The Father, The Son, and The Holy Spirit");
    diety.printMessage();
  }
}
```
