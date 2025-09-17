---
title: Databases
course: DBMS110
---

~.toc

- [Databases](#databases)
  - [Database Management Systems (DBMS)](#database-management-systems-dbms)
  - [Interfacing with a DBMS](#interfacing-with-a-dbms)
    - [CLI (Command Line Interface)](#cli-command-line-interface)
    - [GUI (Graphical User Interface)](#gui-graphical-user-interface)

/~

# Databases

Databases are the main type of data store we will be working with in this course.

A **database** is an organized collection of related data. There is no common "file format" for a database; it is an abstract concept. In practice, databases are implemented in a variety of ways.

When using the term "database" we are typically referring to one that is managed by a database management system (DBMS).

## Database Management Systems (DBMS)

Once a data store reaches a certain size, it becomes infeasible to manually manage it.

A **database management system (DBMS)** is software that allows you to create, modify, query, and administer a database. This software contains the core components of a database system, which are at minimum:

| Component               | Description                                                       |
| ----------------------- | ----------------------------------------------------------------- |
| **Database Engine**     | Responsible for the storage, retrieval, and manipulation of data. |
| **Query Processor**     | Processes queries to the database.                                |
| **Transaction Manager** | Manages transactions to the database.                             |

## Interfacing with a DBMS

Depending on a person's role they may interact with the DBMS using the CLI or a GUI.

### CLI (Command Line Interface)

The **CLI (Command Line Interface)** is a text-based interface that allows you to interact with the DBMS using commands. This is done via a terminal window.

The advantage of the CLI is that it does not require graphical software to be installed. Many servers that run a DBMS do not have graphics hardware, so the CLI is the only way to interact with the DBMS.

Some examples of CLI commands are shown below.

```bash
# Connect to the database
mysql -u root -p

# List all databases
show databases;

# Use a database
use database_name;
```

### GUI (Graphical User Interface)

<figure>
    <span>
        <img src="https://imgs.search.brave.com/Kyy9bn1eZ1gVC7JlXIN8xsaPCqeP16BUzkgegfqB51M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHV0b3JpYWxzdGVh/Y2hlci5jb20vX25l/eHQvaW1hZ2U_dXJs/PS9pbWFnZXMvc3Fs/c2VydmVyL1NTTVMu/d2VicCZ3PTM4NDAm/cT03NQ" style="width: 100%;height: auto;">
    </span>
</figure>

The **GUI (Graphical User Interface)** (pronounced "gooey") is a visual interface that allows you to interact with the DBMS using a mouse and keyboard, like a traditional desktop application.

Most users who need to frequently run queries will use a GUI.
