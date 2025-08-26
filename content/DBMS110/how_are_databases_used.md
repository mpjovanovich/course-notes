---
title: How are Databases Used?
course: DBMS110
---

~.toc

- [How are Databases Used?](#how-are-databases-used)
  - [End Users](#end-users)
  - [Analysts](#analysts)
  - [Software Developers](#software-developers)
  - [Database Administrators (DBA)](#database-administrators-dba)

/~

# How are Databases Used?

## End Users

In the context of software, an **end user** is a person who consumes the output of a software application. End users may be responsible for both inputs and outputs to the system, but this is not done by directly interfacing with the database.

End users will typically use software written by a software developer to add or retrieve data from the database.

## Analysts

<figure>
    <span>
        <img src="https://imgs.xkcd.com/comics/data_trap_2x.png" style="width: 80%;height: auto;">
    </span>
</figure>

This example shows the results of a query from the `employees` table. The report has been created using a spreadsheet application, but the underlying data is stored in a database.

The term **analyst** is used broadly in the world of IT and business, and it is not always clear what it means (e.g. in a job posting). It may refere to someone who:

- Interfaces directly with the database to run queries
- Uses software or a dashboard to make decisions based on data
- Develops reports or reporting tools to support decision-making

## Software Developers

<figure>
    <span>
        <img src="https://www.idera.com/wp-content/uploads/2024/10/blog-sql-script.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

A **software developer** will almost certainly need to know how to work with databases. Developers may be responsible for:

- Creating or modifying a database schema (table)
- Writing code that allows the software application to "talk to" the database.
- Creating or modifying views and stored procedures
- Creating queries that the application or analysts can consume

## Database Administrators (DBA)

<figure>
    <span>
        <img src="https://www.globalts.com/images/easyblog_shared/August_2021/8-9-21/b2ap3_large_162947308_server_room_400.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

A **database administrator (DBA)** is a person who is responsible for the management and maintenance of a database. This role is more common in large organizations, where the database is too large and complex for a software development team to manage and maintain.

DBAs are often involved in:

- Performance tuning
- Schema design
- Scaling, clustering, replication, and partitioning
- Data backup and recovery
- Database migration
- Security administration

DBAs often focus on the "under the hood" parts of the database (how the database itself is functioning), while software developers focus on the "front end" parts of the software application (how the application interacts with the database).
