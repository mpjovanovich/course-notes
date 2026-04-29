---
title: Abstraction
course: SDEV140
---

~.toc

- [Abstraction](#abstraction)
  - [Interface vs. Implementation](#interface-vs-implementation)
  - [Abstract Classes and Methods](#abstract-classes-and-methods)
  - [Example: Shape as an Abstract Base Class](#example-shape-as-an-abstract-base-class)
  - [Interfaces in Other Languages](#interfaces-in-other-languages)

/~

# Abstraction

Primary purpose of **abstraction** is to hide complexity of some part of the system behind a simpler interface.

## Interface vs. Implementation

- **Interface**: The set of public methods and properties that a class provides.
- **Implementation**: The actual code that performs the operations.

An interface defines a **contract** between the class and the outside world. The class promises to provide every method listed in the contract.

## Abstract Classes and Methods

- **Abstract**: Cannot be directly instantiated.
- **Concrete**: Can be directly instantiated.

An **abstract base class** (ABC):

- Is only used as a base class — you can't create an instance of it directly.
- May contain **abstract methods** (contract-only, no body) _and_ regular concrete methods.

An **abstract method**:

- Is declared in the abstract class but has no body.
- **Must be overridden** in any concrete subclass. If a subclass forgets, Python will refuse to instantiate it.

This is how we enforce a contract in Python: "any class that claims to be a `Shape` **must** provide `area()` and `perimeter()`."

## Example: Shape as an Abstract Base Class

In the Inheritance note, `Shape` was a regular class — but nothing forced subclasses to actually provide `area()` or `perimeter()`. If we add a new subclass and forget, we won't find out until something tries to call the missing method at runtime.

Let's upgrade `Shape` to an abstract base class so the contract is enforced.

~.focusContent.example

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    def __init__(self, name):
        self._name = name

    ## Concrete method - subclasses inherit this as-is
    def get_name(self):
        return self._name

    ## Abstract methods - subclasses MUST override these
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Circle(Shape):
    def __init__(self, name, radius):
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

## This would raise TypeError - Shape is abstract:
## s = Shape("Oops")

## These work - Circle and Rectangle are concrete:
c = Circle("My Circle", 5)
r = Rectangle("My Rectangle", 5, 10)
```

/~
