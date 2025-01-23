---
title: Inheritance
course: SDEV200
---

~.toc

- [Inheritance](#inheritance)
  - [Superclass](#superclass)
  - [Subclass](#subclass)
  - [Why use a Derived Class?](#why-use-a-derived-class)
  - [Why use Inheritance?](#why-use-inheritance)
  - [Inheritance in Java](#inheritance-in-java)
  - [Inheritance Example](#inheritance-example)

/~

# Inheritance

**Inheritance** is the idea of extending functionality from an existing class.

The relationship is such that the derived class has all of the functionality of the class, plus additional functionality specific to the derived class.

Different languages have different terminology for the classes involved. Java uses 'superclass' and 'subclass'.

## Superclass

The class from which other classes inherit is called the:

- **Superclass**
- **Base class**
- **Parent class**

## Subclass

The class that inherits from another class is called the:

- **Subclass**
- **Derived class**
- **Child class**

## Why use a Derived Class?

- Override properties/methods from base class.
- Add new properties/methods specific to derived class.

## Why use Inheritance?

- Override properties/methods from base class (change behavior).
- Add new properties/methods specific to derived class (extend functionality).

## Inheritance in Java

Java uses the `extends` keyword to indicate that a class is a subclass of another class.

```java
class Subclass extends Superclass {
    // ...
}
```

A subclass may call the constructor of the superclass using the `super` keyword.

```java
public Subclass(args) {
    super(args);
}
```

A subclass can override a method from the superclass.

This means that the method in the subclass will be used instead of the method in the superclass.

When we do this, we should use the `@Override` annotation to indicate that the method is being overridden.

```java
@Override
public void method() {
    // ...
}
```

## Inheritance Example

~.focusContent.example

Let's create a basic 'Quadrilateral' class. We'll then create a 'Square' class that inherits from 'Quadrilateral'.

Take note of the following:

- The `Square` class has a constructor that calls the `Quadrilateral` constructor.
- The `Square` class has access to all protected and public methods and properties from the superclass.
- The `Square` class has its own `area` method that the superclass does not have.

```java
class Quadrilateral {
    // Protected attributes - only accessible within the class and subclasses
    protected double side1;
    protected double side2;
    protected double side3;
    protected double side4;

    // Constructor
    public Quadrilateral(double side1, double side2, double side3, double side4) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.side4 = side4;
    }

    // Public method - We can call this from any subclass or via the public API
    public double perimeter() {
        return side1 + side2 + side3 + side4;
    }

    // Public method - We can call this from any subclass or via the public API
    public void printDescription() {
        System.out.println("I am a Quadrilateral.");
    }
}

// Extends keyword tells us that Square is a subclass of Quadrilateral
class Square extends Quadrilateral {
    // Call the constructor of the superclass
    public Square(double side) {
        super(side, side, side, side);
    }

    // Since this overrides the superclass method, we use the @Override annotation
    // It works without it, but it's good practice to use it
    @Override
    public void printDescription() {
        System.out.println("I am a Square.");
    }

    // Add additional functionality specific to the Square class
    public double area() {
        return side1 * side1;
    }
}

public class Test {
    public static void main(String[] args) {
        // Create a new instance of the base class
        Quadrilateral r = new Quadrilateral(2, 4, 2, 4);
        r.printDescription();
        System.out.println("Square perimeter: " + r.perimeter());

        // Create instances of subclass
        Square s = new Square(5);
        s.printDescription();
        System.out.println("Square perimeter: " + s.perimeter());
        System.out.println("Square area: " + s.area());
    }
}
```
