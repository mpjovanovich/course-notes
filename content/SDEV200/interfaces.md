---
title: Interfaces
course: SDEV200
---

~.toc

- [Interfaces](#interfaces)
  - [Interfaces in Java](#interfaces-in-java)

/~

# Interfaces

**Interfaces** are way to define a contract between classes without having to use inheritance.

Interfaces define a set of methods that a class must implement.

## Interfaces in Java

In Java, interfaces are defined using the `interface` keyword.

```java
interface MyInterface {
    void myMethod();
}
```

A class can implement an interface using the `implements` keyword.

```java
class MyClass implements MyInterface {
    public void myMethod() {
        // ...
    }
}
```

~.focusContent.example

```java
interface Shape {
    double area();
}

class Rectangle implements Shape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double area() {
        return width * height;
    }
}
```

/~
