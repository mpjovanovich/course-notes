---
title: Encapsulation
course: SDEV200
---

~.toc

- [Encapsulation](#encapsulation)
  - [Access Modifiers](#access-modifiers)
  - [Information Hiding](#information-hiding)
  - [Getters and Setters](#getters-and-setters)

/~

# Encapsulation

Primary purposes of **encapsulation** are to:

- Bundle the data (properties) and methods (functions) that operate on the data into a single unit.
- Prevent direct access to the data from outside the class.

## Access Modifiers

We can control access to properties and methods using **access modifiers**, also called **visibility modifiers**.

Access modifiers are implemented as keywords that go before the property or method.

| Modifier  | Description                                          |
| --------- | ---------------------------------------------------- |
| public    | Accessible from anywhere.                            |
| protected | Accessible from within the class and any subclasses. |
| private   | Accessible only from within the class.               |

## Information Hiding

A good rule of thumb is to keep properties and methods private unless there is reason to **expose** them (make them public).

This is known as **information hiding**.

## Getters and Setters

- Getters are methods that return the value of a property.
- Setters are methods that set the value of a property.

You might also hear these referred to as **accessor** and **mutator** methods.

_Person.java_

```java
public class Person {
    // Cannot be directly accessed from outside the class
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

_Main.java_

```java
public class Main {
    public static void main(String[] args) {
        Person person = new Person();
        person.setName("John");
        System.out.println(person.getName());

        // Will not work! `name` is private.
        person.name = "Jane";
    }
}
```
