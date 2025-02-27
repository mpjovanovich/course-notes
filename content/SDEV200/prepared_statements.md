---
title: Prepared Statements
course: SDEV200
---

~.toc

- [Prepared Statements](#prepared-statements)
  - [Example](#example)
  - [SQL Injection](#sql-injection)
  - [Naive Implementation](#naive-implementation)
  - [Prepared Statements](#prepared-statements-1)

/~

# Prepared Statements

**Prepared Statements** are a way to execute SQL statements with parameters.

They are more efficient than using `Statement` objects because the SQL is pre-compiled and the parameters are bound to the statement.

They also help prevent SQL injection attacks.

## Example

We will refer to this example throughout these notes:

```sql
-- Create a users table
CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- Insert sample data
-- Note: We should never actually store passwords in plain text like this.
INSERT INTO User (first_name, last_name, username, password) VALUES
    ('admin', 'admin', 'admin', 'supersecretAdminPass'), -- This is first so that when we hack in we get to the admin account
    ('Donny', 'Dummikins', 'user', 'pass'), -- Easy login demo user
    ('John', 'Smith', 'jsmith', 'password123'),
    ('Jane', 'Doe', 'jdoe', 'securepass456'),
    ('Robert', 'Johnson', 'rjohnson', 'robert2024'),
    ('Emily', 'Williams', 'ewilliams', 'emily1234'),
    ('Michael', 'Brown', 'mbrown', 'brownmike789'),
    ('Sarah', 'Davis', 'sdavis', 'davis2023!'),
    ('David', 'Miller', 'dmiller', 'millertime55'),
    ('Jennifer', 'Wilson', 'jwilson', 'jenny9876'),
    ('William', 'Taylor', 'wtaylor', 'taylor2022'),
    ('Amanda', 'Anderson', 'aanderson', 'amanda4321');
```

## SQL Injection

**SQL injection** is a technique used to attack databases by manipulating the SQL code that is executed.

For example, if we have a login page that takes a username and password, and we use the following SQL statement:

```java
String query = "SELECT id FROM User WHERE username='" + username +
        "' AND password='" + password + "'";
```

If the username is `' OR '1'='1` and the password is `' OR '1'='1`, the SQL statement will return all users in the database.

This is because the SQL statement is interpreted as:

```sql
SELECT * FROM users WHERE username = '' OR '1'='1' AND password = '' OR '1'='1'
```

This is a very simple example, but it can be much more dangerous in real applications.

## Naive Implementation

Below is an unsafe implementation of a login function. A user can inject malicious SQL code into the query.

```java
// Get username and password from user...

// Interpolate the username and password directly into the query (bad idea)
String query = "SELECT * FROM User WHERE username='" + username +
                "' AND password='" + password + "'";

System.out.println("Generated query: " + query);

try (Connection connection = DriverManager.getConnection(JDBC_URL);
        Statement statement = connection.createStatement();) {

    ResultSet resultSet = stmt.executeQuery());
    if (resultSet.next()) {
        return resultSet.getString("username");
    }
    else {
        // Handle invalid credentials...
    }
} catch (SQLException ex) {
    // Handle exception...
}
```

## Prepared Statements

Prepared statements are a way to execute SQL statements with parameters. These parameters are placeholders that are replaced with actual values when the statement is executed.

The main benefits are that:

- It is more secure; parameters are not interpolated into the SQL string.
- It is more efficient; the SQL is pre-compiled and the parameters are bound to the statement.
- It handles data type conversion automatically via the "set" methods on the `PreparedStatement` object.
- It's (arguably) easier to read and write.

```java
// Get username and password from user...

try (Connection connection = DriverManager.getConnection(JDBC_URL);
        PreparedStatement stmt = connection.prepareStatement(query)) {

    String query = "SELECT id FROM User WHERE username = ? AND password = ?";

    // Safely set the parameters
    stmt.setString(1, username);
    stmt.setString(2, password);

    ResultSet resultSet = stmt.executeQuery());
    if (resultSet.next()) {
        return resultSet.getString("username");
    }
    else {
        // Handle invalid credentials...
    }
} catch (SQLException ex) {
    // Handle exception...
}
```
