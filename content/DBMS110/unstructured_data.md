---
title: Working with Unstructured Data
course: DBMS110
---

~.toc

- [Structured vs Unstructured Data](#structured-vs-unstructured-data)
  - [Structured Data](#structured-data)
  - [Unstructured Data](#unstructured-data)
  - [Semi-Structured Data](#semi-structured-data)

/~

# Structured vs Unstructured Data

## Structured Data

_Definition:_

**Structured data** is data that is organized in a predefined format with a fixed schema.

A **schema** is a set of rules that define the structure of the data. For a database this is the table structure. For other file formats this may define

- The order in which fields are arranged in the file
- The attributes of each field
- The data type of each field
- Constraints on the data (length, precision, etc.)

_Examples:_

Examples of structured data include:

- Relational databases
- XML
- JSON
- Delimited files

In our SQL `CREATE TABLE` statements we define the schema for the table:

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL
);
```

This gives us all of the information about the format and constraints for the data in the table - its structure.

## Unstructured Data

_Definition:_

**Unstructured data** is data that has no inherent structure or organization.

When we've used the term "raw data" we were typically referring to unstructured data. This doesn't necessarily mean that it's messy - it just means that it does not adhere to a predefined schema.

_Examples:_

Examples of unstructured data include:

- Text files
- Images
- Videos
- Audio
- Business documents
- Reports

A report may provide many data points, but they're not organized in a way that a computer program can easily understand (_parse_) the fields.

<figure>
    <span>
        <img src="https://www.portland.gov/sites/default/files/styles/max_768w/public/2023/gbr_hes_profile-link.png?itok=uKj7VJcD" style="width: 80%;height: auto;">
    </span>
</figure>

## Semi-Structured Data

_Definition:_

**Semi-structured data** is data that conforms to a defined syntax or format but does not enforce a schema for the content within.

In other words, it has to follow the rules enough that it can be understood by the computer, but the data that it contains can be adjusted flexibly.

The English language is a good example of semi-structured data. You must follow rules like grammar and punctuation, but the words and sentences can be adjusted flexibly.

_Examples:_

- XML
- JSON
- Delimited files

~.focusContent.note

**Why are These Formats Listed as Structured and Semi-Structured?**

When the file formats above have a predefined schema, they are considered structured data.

Other times they have only some or no "rules" to follow. In this case they are considered semi-structured data.

As an example, if we have a CSV file with user information and we've all agreed that it must contain the fields `id`, `name`, and `email`, in that specific order, then it is considered structured data.

```csv
id,name,email
1,John Doe,john.doe@example.com
2,Jane Smith,jane.smith@example.com
```

If we have a CSV file with user information but we really don't know or care about which fields are present, nullability, etc., then it is considered semi-structured data.

```csv
id,name,date_of_birth
1,John Doe,1990-01-01
2,Jane Smith,
3,Socrates,1970-01-01
```

/~

We'll see examples of each of these types of data in the next few sections.
