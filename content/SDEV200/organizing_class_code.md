---
title: Organizing Code Within a Class
course: SDEV200
---

~.toc

- [Organizing Code Within a Class](#organizing-code-within-a-class)
  - [Template](#template)

/~

# Organizing Code Within a Class

There are no hard rules for organizing code within a class. However, there are some common conventions:

- Class properties come first.
- Constructors follow.
- Methods follow.

## Template

An example of how you might organize code within a class is shown below.

You may omit section header comments for any sections that are empty, or add new sections as needed. The goal is to make the code more readable and maintainable.

```java
public class YourClass {
  /***********************************
   * CLASS PROPERTIES
   ***********************************/

  /***********************************
   * CONSTRUCTORS
   ***********************************/

  /***********************************
   * GETTERS AND SETTERS
   ***********************************/

  /***********************************
   * PUBLIC METHODS
   ***********************************/

  /***********************************
   * PROTECTED METHODS
   ***********************************/

  /***********************************
   * PRIVATE METHODS
   ***********************************/
}
```
