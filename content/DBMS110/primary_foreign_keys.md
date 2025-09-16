---
title: Primary and Foreign Keys
course: DBMS110
---

~.toc

- [Primary Keys](#primary-keys)
    - [Compound Keys](#compound-keys)
- [Foreign Keys](#foreign-keys)

/~

# Primary Keys

A **primary key** is an attribute (or set of attributes) that uniquely identifies an entity.

~.focusContent.example

**Student Scores**

Imagine that you're entering students into a table. You could use the student's full name as the primary key, but what if there are multiple students with the same name? Which score belongs to which student?

| Full Name      | Score |
| -------------- | ----- |
| Alfonzo Alca   | 85    |
| Bobby Beebop   | 90    |
| Jennifer Johen | 95    |
| Jennifer Johen | 92    |

The "full name" attribute on the student entity is not unique, so it cannot be used as a primary key. Instead, we can use the student's ID number as the primary key.

| ID    | Full Name      | Score |
| ----- | -------------- | ----- |
| C0001 | Alfonzo Alca   | 85    |
| C0002 | Bobby Beebop   | 90    |
| C0003 | Jennifer Johen | 95    |
| C0004 | Jennifer Johen | 92    |

When Jennifer signs up for her course, we know that it will use her record in the system to sign up - not the other Jennifer.

/~

### Compound Keys

For many entities, there is no single attribute that can uniquely identify the entity. In these cases, we can use a **compound key**, which is a combination of two or more attributes.

| Entity       | Compound Key                  | Example                     |
| ------------ | ----------------------------- | --------------------------- |
| County       | County name and state         | Hamilton, IN                |
| Product      | Product name and manufacturer | banana (organic), Dole Inc. |
| Phone Number | Phone number and type         | 555-555-1234, home          |

~.focusContent.note

**Cautionary Note**

Compound keys in an entity often indicate that the entity is a good candidate to be split into multiple entities. We will do this later when we cover **normalization** techniques.

It's still good to know how to identify compound keys, as you will often encounter data that is in this format.

/~

# Foreign Keys

A **foreign key** is an attribute (or set of attributes) that references another entity.

These will "point to" the primary key of the other entity.

~.focusContent.example

**Tying Students to Campuses**

Let's make an entity to hold student data and another to hold campus data.

In order to associate a student with a campus, we need to add a foreign key to the student entity that references the campus that the student is enrolled in. The primary key of the campus entity is the campus code, so this is what will go in the foreign key for each student record.

_Campus_

| Campus Code | Location         | Year Opened |
| ----------- | ---------------- | ----------- |
| H04         | Hamilton, IN     | 1990        |
| I02         | Indianapolis, IN | 2000        |
| K01         | Kokomo, IN       | 2010        |
| L03         | Lafayette, IN    | 2020        |

_Student_

| ID    | Campus Code | Full Name      | Date of Birth |
| ----- | ----------- | -------------- | ------------- |
| C0002 | I02         | Bobby Beebop   | 1992-02-02    |
| C0003 | K01         | Jennifer Johen | 1994-03-03    |
| C0001 | L03         | Alfonzo Alca   | 1990-01-01    |
| C0004 | L03         | Jennifer Johen | 1996-04-04    |

Campus Code is a foreign key in the student table that _references_ the campus code in the campus table.

The point is that we keep campus information in its own table, and we can follow relationships as needed.

If we want to know the year of the campus that Bobby Beebop is enrolled in, we can:

- Find Bobby Beebop's record in the student table
- Use the Campus Code "I02" to find the campus record in the campus table
- Use the Year Opened field to find the year the campus was opened

**Exercise:** Which two students are enrolled at the Lafayette campus?

/~
