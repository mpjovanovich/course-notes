---
title: Inheritance
course: SDEV140
---

~.toc

- [Inheritance](#inheritance)
  - [Base Class](#base-class)
  - [Derived Class](#derived-class)
  - [Why use Inheritance?](#why-use-inheritance)
  - [Inheritance vs. Composition](#inheritance-vs-composition)
  - [Example: Shape Hierarchy](#example-shape-hierarchy)

/~

# Inheritance

- **Inheritance** is the idea of extending functionality from an existing class.
- The derived class "_is a_" more specific version of the base class.
  - A `Rectangle` _is a_ `Shape`. A `Circle` _is a_ `Shape`.

## Base Class

The class from which other classes inherit is called the:

- **Base class**
- **Parent class**
- **Superclass**

Typically more general in terms of functionality.

## Derived Class

The class that inherits from another class is called the:

- **Derived class**
- **Child class**
- **Subclass**

Typically more specialized in terms of functionality.

## Why use Inheritance?

- **Reuse** common behavior defined once on the base class, instead of copy-pasting it into every related class.
- **Specialize** the base class by overriding methods or adding new ones on the derived class.
- **Group** related types so that other code can work with all of them the same way (we'll build on this when we get to polymorphism).

## Inheritance vs. Composition

~.focusContent.lookout

**Don't reach for inheritance by default.**

Before you extend a class, ask which relationship actually fits:

- _is-a_ — a `Circle` **is a** `Shape`. → Inheritance is a fit.
- _has-a_ — a `Car` **has an** `Engine`. → Prefer **composition**: make `Engine` a property of `Car` rather than a parent class of it.

Deep inheritance hierarchies are a common source of hard-to-change code. When in doubt, favor composition.

/~

## Example: Shape Hierarchy

We'll build a small `Shape` hierarchy here and keep extending it through the next two notes (Abstraction and Polymorphism).

~.focusContent.example

```python
class Shape:
    def __init__(self, name):
        self._name = name

    def get_name(self):
        return self._name

class Circle(Shape):
    def __init__(self, name, radius):
        ## Call the parent class constructor (super = 'Shape')
        super().__init__(name)
        self._radius = radius

    def area(self):
        return 3.14159 * self._radius ** 2

    def perimeter(self):
        return 2 * 3.14159 * self._radius

class Rectangle(Shape):
    def __init__(self, name, width, height):
        super().__init__(name)
        self._width = width
        self._height = height

    def area(self):
        return self._width * self._height

    def perimeter(self):
        return 2 * (self._width + self._height)

c = Circle("My Circle", 5)
r = Rectangle("My Rectangle", 5, 10)

## Inherited from Shape
print(c.get_name())
print(r.get_name())

## Defined on each subclass
print(c.area())
print(r.area())
```

A few things to notice:

- `super().__init__(name)` calls the parent's constructor, so we don't have to re-write the `_name` assignment in every subclass.
- `get_name()` is defined **once** on `Shape` and is automatically available on `Circle` and `Rectangle` — that's the code reuse payoff.
- `area()` and `perimeter()` are defined **separately** on each subclass, because a circle's area calculation has nothing to do with a rectangle's — that's the specialization payoff.

/~
