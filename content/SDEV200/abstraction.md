---
title: Abstract Classes and Methods
course: SDEV200
---

~.toc

- [Abstract Classes and Methods](#abstract-classes-and-methods)
  - [Abstract Class Example](#abstract-class-example)

/~

# Abstract Classes and Methods

**Abstract classes** are classes that cannot be instantiated (created using the `new` keyword).

**Abstract methods** are methods that do not have a body. They are meant to be implemented by subclasses.

## Abstract Class Example

Take note of the following:

- The `Quadrilateral` class is abstract because it has an abstract method.
- We are not meant to create instances of the `Quadrilateral` class directly.
- The `Square` and `Trapezoid` classes are subclasses of `Quadrilateral`.
- These classes must implement the abstract method from the superclass.
  - Try removing the `area` method from the `Square` class and see what happens.

```java
// Class must be abstract because it has an abstract method
// We are not meant to create instances of this class directly
abstract class Quadrilateral {
    // Protected attributes
    protected double side1;
    protected double side2;
    protected double side3;
    protected double side4;
    protected String name;

    // Protected constructor - only accessible within the class and subclasses
    protected Quadrilateral(String name, double side1, double side2, double side3, double side4) {
        this.name = name;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.side4 = side4;
    }

    public double perimeter() {
        return side1 + side2 + side3 + side4;
    }

    public void printDescription() {
        System.out.println("I am a " + name + ".");
    }

    // Abstract method - must be implemented by any subclass
    // We want all quadrilaterals to offer this functionality, but the formula is different for each type
    abstract double area();
}

class Square extends Quadrilateral {
    public Square(double side) {
        super("Square", side, side, side, side);
    }

    // Square's implementation of the abstract method
    public double area() {
        return side1 * side1;
    }
}

class Trapezoid extends Quadrilateral {
    // This class also has its own height property
    private double height;

    public Trapezoid(double base1, double base2, double side1, double side2, double height) {
        super("Trapezoid", base1, base2, side1, side2);
        this.height = height;
    }

    // Trapezoid's implementation of the abstract method
    public double area() {
        return (side1 + side2) * height / 2;
    }
}

public class Test {
    public static void main(String[] args) {
        // Create instances of derived classes
        Square s = new Square(5);
        Trapezoid t = new Trapezoid(10, 6, 5, 5, 4);

        s.printDescription();
        System.out.println("Square area: " + s.area());
        System.out.println("Square perimeter: " + s.perimeter());

        t.printDescription();
        System.out.println("Trapezoid area: " + t.area());
        System.out.println("Trapezoid perimeter: " + t.perimeter());
    }
}
```
