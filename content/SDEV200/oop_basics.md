---
title: Object Oriented Programming
course: SDEV200
---

~.toc

- [Object Oriented Programming](#object-oriented-programming)
  - [Definitions](#definitions)
  - [Creating a Class in Java](#creating-a-class-in-java)
  - [Constructors](#constructors)
  - [The `this` Keyword](#the-this-keyword)

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

- We can create an instance of a class using the `new` keyword.

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
- We may have multiple constructors in a class, each with different parameters.

_Person.java_

```java
public class Diety {
  // Declare the name field, but don't set it.
  private String name;
  private String title;

  public Diety() {
    this.name = "Unknown";
    this.title = "An Unknown God";
  }

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
    // Call the parameterless constructor
    Diety diety1 = new Diety();
    diety1.printMessage();

    // Call the constructor with name and title
    Diety diety2 = new Diety("Shiva", "The Destroyer");
    diety2.printMessage();

    // Call the constructor with name and title
    Diety diety3 = new Diety("The Holy Trinity", "The Father, The Son, and The Holy Spirit");
    diety3.printMessage();
  }
}
```

## The `this` Keyword

The `this` keyword refers to the current object.

It is used to access the current object's properties and methods.

Notice our constructor above uses `this` to set the `name` and `title` properties. We must use it here because there is a naming conflict between the parameters used in the constructor method and the properties of the class.

Typically in Java:

- Use `this` if there is a naming conflict between a parameter and a property.
- If there is no naming conflict, you can omit `this` (as with the `printMessage()` method above).
