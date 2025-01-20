---
title: Class Diagrams
course: SDEV200
---

~.toc

- [Class Diagrams](#class-diagrams)
  - [Class Diagram Components](#class-diagram-components)
    - [Basics](#basics)
    - [Relationships](#relationships)

/~

# Class Diagrams

A **class diagram** is a UML diagram that represents the classes in a program and the relationships between them.

We will use a free online tool called _draw.io_ to create class diagrams.

_Link to Software_

[draw.io](https://app.diagrams.net/)

_Link to Instructions_

[UML class diagrams in draw.io](https://drawio-app.com/blog/uml-class-diagrams-in-draw-io/)

## Class Diagram Components

### Basics

<figure>
  <img src="https://drawio-app.com/wp-content/uploads/2018/01/Class-Diagram-Habit-Tracker-app.png" alt="" style="width: 100%;height: auto;">
</figure>

- Each class is denoted by a rectangle, with the class name at the top.
- Properties are listed inside the rectangle, and are denoted by a name and data type.
- Methods are listed inside the rectangle, and are denoted by a name, return type, and parameters.

The level of detail is dependent on the audience for the diagram. You may also wish to include access modifiers, getters and setters, etc.

### Relationships

A fully flushed out class diagram also shows the relationships between the classes.

The **cardinality** of a relationship is the number of instances of one class that can be associated with one instance of another class.

The cardinality between one class and another appears as text on the edge between the two classes, and may be interpreted as:

"Every instance of the source class may be associated with \_\_\_ to \_\_\_ instances of the target class."

| Cardinality | Description  |
| ----------- | ------------ |
| 0..1        | Zero to one  |
| 1..1        | One to one   |
| 0..\*       | Zero to many |
| 1..\*       | One to many  |
| \*..\*      | Many to many |

In the diagram above we see that:

- Every User may be associated with zero to one Coach.
- Every Coach may me associated with zero to many Users.
- etc.

~.focusContent.note

You may notice that this diagram is similar to an **Entity Relationship Diagram** (ERD). The two are similar in many ways, but serve slightly different purposes.

An ERD is designed specifically to represent the relationships between entities in a database. These don't always match directly with properties within a class.

/~
