---
title: Polymorphism
course: SDEV140
---

~.toc

- [Polymorphism](#polymorphism)
  - [The Payoff](#the-payoff)
  - [Example: Functions that Accept Any Shape](#example-functions-that-accept-any-shape)

/~

# Polymorphism

**Polymorphism**: Allows objects of different classes to be treated as objects of a common superclass.

In practice: a function can declare that it accepts a base class (or interface), and it will work with _any_ subclass — including subclasses that didn't exist yet when the function was written.

## The Payoff

Polymorphism is the reason we bother with inheritance and abstraction in the first place:

1. **Inheritance** lets related classes share a common base.
   // TODO: not sure if this is how we want to frame it...
2. **Abstraction** (via an ABC or interface) guarantees every subclass provides the same set of methods.
3. **Polymorphism** lets us write code that relies on that shared contract and doesn't care which specific subclass it got.

## Example: Functions that Accept Any Shape

We'll reuse the `Shape` ABC from the Abstraction note.

~.focusContent.example

```python
## This function accepts ANY Shape subclass.
## It doesn't know (or care) whether it got a Circle, a Rectangle,
## or some Shape subclass that hasn't been written yet.
def print_shape_info(shape: Shape):
    print(f"Name: {shape.get_name()}")
    print(f"Area: {shape.area()}")
    print(f"Perimeter: {shape.perimeter()}")

c = Circle("My Circle", 5)
r = Rectangle("My Rectangle", 5, 10)

print_shape_info(c)
print_shape_info(r)
```

Notice what this allows us to do:

- `print_shape_info` works for `Circle` and `Rectangle`.
- If we add a `Triangle(Shape)` tomorrow, `print_shape_info(t)` will work with **zero changes** to `print_shape_info` itself, as long as `Triangle` honors the `Shape` contract.

/~

## Example: Extending a Car Class

~.focusContent.demo

**Demo: Rocket Car**

Try running the following code:

[Rocket Car](https://github.com/mpjovanovich-IvyTechDemos/python-oop-rocketcar)

/~

~.focusContent.exercise

**In Class Exercise: Modify the Car Class**

Our car class works, but it currently can't turn. Let's add a `heading` property and a `turn_left()` and `turn_right()` method to the `Car` class.

Because `RocketCar` is a `Car`, it should inherit these as well - we only need to add them in one place.

We will do this as an ad-hoc lab in class.

/~
