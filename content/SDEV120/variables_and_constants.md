---
title: Variables and Constants
course: SDEV120
---

~.toc

- [Variables](#variables)
- [Constants](#constants)
- [Declaration and Naming](#declaration-and-naming)
  - [Naming Conventions](#naming-conventions)
  - [Best Practices](#best-practices)

/~

<figure>
  <img src="https://imgs.xkcd.com/comics/code_quality_3.png" alt="" style="width: 100%;height: auto;">
</figure>

# Variables

- A **variable** is a named storage location in a computer's memory.
- Variable name is used to reference its value.
- Used to store data that can be changed.

# Constants

- Same as a variable, but its value cannot / should not be changed.
- Use capital letters and underscores to name by convention.

```python
# Constant is declared and initialized
PI = 3.14159
TAX_RATE = 0.07
BILLING_CODE = "A123"
```

# Declaration and Naming

- **Declaration** is the process of creating a variable.
- **Initialization** is the process of assigning a value to a variable.
- **Assignment** is the process of changing the value of a variable.

```python
# Variable is declared and initialized (assigned a value)
# In python this will always be done in one step
x = 5

# Variable is reassigned a new value
x = 10
```

## Naming Conventions

- **Camel Case** - first letter of each word is capitalized except the first word. Often used for variable names.
  - `studentName`
  - `minimumAgeRequirement`
- **Pascal Case** - first letter of each word is capitalized. Often used for class and file names.
  - `StudentName`
  - `MinimumAgeRequirement`
- **Snake Case** - words are separated by underscores. Often used for variable names.
  - `student_name`
  - `minimum_age_requirement`

## Best Practices

Always use descriptive names for variables.

- Must start with a letter or underscore
- Can contain letters, numbers, and underscores
- Cannot contain spaces or special characters

_Good:_

```python
# Peers will thank you when they read your code.
student_name = "Dave Duncan"
minimum_age_requirement = 21
software_dept_course_prefix = "SDEV"
```

_Bad:_

```python
# Please don't abrev...
nm = "Dave Duncan"
m_age = 21
sdc = "SDEV"
```
