---
title: XML
course: DBMS110
---

~.toc

- [XML](#xml)
  - [Format](#format)
    - [Examples](#examples)

/~

# XML

**XML** stands for **eXtensible Markup Language**.

You may notice some similarity with with HTML (HyperText Markup Language), which shares a consistent format.

## Format

XML is a human-readable hierarchical data format. It is encoded as **nodes** (also called **elements**) and **attributes**.

XML follows a tree structure. There must always be a single root element to the tree.

Each element is wrapped in angle brackets. The closing element must have a forward slash before the element name.

Child elements are nested inside the parent element.

Attributes are wrapped in double quotes and are placed inside the opening element.

### Examples

_Basic Examples_

Here is a single person element. XML elements are wrapped in angle brackets.

```xml
<person>
    <name>Socrates</name>
    <birthYear>-469</birthYear>
</person>
```

Alternatively, we could write this with attributes. Attributes typically signify metadata about the element rather than content:

```xml
<person name="Socrates" birthYear="-469"></person>
```

Some XML tags are also written as self-closing tags. This is a special case where the closing tag is not needed.

```xml
<person name="Socrates" birthYear="-469" />
```

It doesn't much matter whether attributes or nested elements are used as long as the consumer of the data knows the schema (structure of the data).

_Full Example_

Let's create an XML document to show a list of people:

```xml
<people>
    <person name="Socrates" birthYear="-469">
        <hobbies>
            <hobby name="Philosophy">Thinking about deep deep things.</hobby>
            <hobby name="Golf">"Hitting a small white ball with a stick, then walking around.</hobby>
            <hobby name="Music">Listening to favorite jams on the harp."</hobby>
        </hobbies>
    </person>
</people>
```
