---
title: Using SQL in Application Code
course: DBMS110
---

~.toc

- [Using SQL in Application Code](#using-sql-in-application-code)

/~

# Using SQL in Application Code

Up until now we have written SQL in dedicated programs designed for ad hoc queries. However, most applications will need to use SQL in some way.

Most programming languages have **libraries** that allow you to connect to a database and execute SQL statements. This can be a relational database or a NoSQL database.

~.focusContent.example

**SQL in a Python Application**

See the [Python SQL Demo](https://github.com/mpjovanovich-IvyTechDemos/python-sql-demo) for an example of how to use SQL in a Python application.

To run it you will need to have Python installed on your machine, and install the `sqlite3` library with the following command:

```bash
pip install sqlite3
```

/~

We will see a NoSQL example in the next section.
