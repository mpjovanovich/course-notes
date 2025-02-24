---
title: JDBC
course: SDEV200
---

~.toc

- [JDBC](#jdbc)
  - [SQLite JDBC Driver](#sqlite-jdbc-driver)
    - [Documentation](#documentation)
    - [Maven Dependency](#maven-dependency)
    - [Usage](#usage)

/~

# JDBC

**JDBC (Java Database Connectivity)** is Java's way to interact with databases.

Each database type has a different JDBC driver. For example, the SQLite JDBC driver is used to interact with SQLite databases.

With this setup, we can write Java code to interact with a database without having to worry about the specific details of which database we are using.

## SQLite JDBC Driver

### Documentation

[SQLite JDBC Driver](https://github.com/xerial/sqlite-jdbc?tab=readme-ov-file#sqlite-jdbc-driver)

### Maven Dependency

As mentioned in the documentation, the dependency is hosted in the Maven Central Repository. We can look it up and use the most recent version:

[Maven Central Repository](https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc)

Assuming the current version is 3.49.1.0, we can add the dependency to our `pom.xml` file:

```xml
<dependency>
    <groupId>org.xerial</groupId>
    <artifactId>sqlite-jdbc</artifactId>
    <version>3.49.1.0</version>
</dependency>
```

### Usage

The following example can be found in the course [Demos](https://github.com/mpjovanovich/ivy_tech/tree/main/SDEV200)

~.focusContent.example

```java
package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Main {
    public static void main(String[] args) {
        // The last part (data/example.db) is the relative path to the database.
        String jdbcUrl = "jdbc:sqlite:data/example.db";

        // Make sure to use try with resources so that connections are closed!
        // Create connection object, then create statement object from
        // that connection.
        try (Connection connection = DriverManager.getConnection(jdbcUrl);
                Statement statement = connection.createStatement();) {

            // Create query to get all books, ordered by author
            String query = "SELECT title, author, publication_year FROM Book ORDER BY author;";

            // Execute the query - send it to the database and get results
            ResultSet rs = statement.executeQuery(query);

            // Loop through and print the fetched results
            while (rs.next()) {
                System.out.println("--- BOOK ---");
                System.out.println("Title = " + rs.getString("title"));
                System.out.println("Author = " + rs.getString("author"));
                System.out.println("Published = " + rs.getInt("publication_year"));
                System.out.println("");
            }

        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

/~
