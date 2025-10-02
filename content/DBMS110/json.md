---
title: JSON
course: DBMS110
---

~.toc

- [JSON](#json)
  - [Format](#format)
    - [Examples](#examples)
    - [Serialization](#serialization)

/~

# JSON

**JSON** stands for **JavaScript Object Notation**.

It has "JavaScript" in the name because it originated in JavaScript, but it is language independent, and has become a ubiquitous data format.

JSON has in many ways replaced XML as the primary data format for data exchange and storage.

Data that is imported, exported, and transferred between systems is often in JSON format.

## Format

Like XML, JSON is a human-readable hierarchical data format. It is encoded as key-value pairs.

Keys must have double quotes around them (single quotes are not allowed). These keys form the _properties_ or _attributes_ of the object.

Values only need quotes if they are strings.

### Examples

_Basic Object_

Here is a single person object. JSON objects are wrapped in curly braces.

```json
{
  "name": "Socrates",
  "birthYear": -469
}
```

_Object with a Nested Object_

Objects may have "children" objects within them. Here is a "person" object with a "hobby" object nested within it. This hobby object is a property of the person object.

```json
{
  "person": {
    "name": "Socrates",
    "birthYear": -469,
    "hobby": {
      "name": "Philosophy",
      "description": "Thinking about deep deep things."
    }
  }
}
```

Note how "hobby" is its own object - picture pulling it out of the person object. It would work on its own. This is how we represent hierarchical data in JSON.

_Lists of Objects_

We may need to represent a list of objects. We cannot have multiple properties with the same name:

```json
/* No - does not work! */
{
  "name": "Socrates",
  "birthYear": -469,
  "name": "Socrates Jr.",
  "birthYear": -489
}
```

To fix this, we can use a list of objects called an _array_. Arrays are wrapped in square brackets:

```json
{
  "people": [
    {
      "name": "Socrates",
      "birthYear": -469
    },
    {
      "name": "Socrates Jr.",
      "birthYear": -489
    }
  ]
}
```

_Complex Object_

Let's combine what we've learned so far to create a more complex object. We want to allow Socrates to have multiple hobbies, so we'll nest an array of hobbies within the person object.

```json
{
  "person": [
    {
      "name": "Socrates",
      "birthYear": -469,
      "hobbies": [
        {
          "name": "Philosophy",
          "description": "Thinking about deep deep things."
        },
        {
          "name": "Golf",
          "description": "Hitting a small white ball with a stick, then walking around."
        },
        {
          "name": "Music",
          "description": "Listening to favorite jams on the harp."
        }
      ]
    }
  ]
}
```

### Serialization

To **serialize** data means to encode it as a string.

The opposite is to **deserialize**, which decodes a string into a data structure.

~.focusContent.exercise

**JSON Exercise**

In the JavaScript programming language we can convert a JSON object to a string with the `.stringify()` method. This is serialization.

We can convert the string back to a JSON object with the `.parse()` method. This is deserialization.

Let's start with this string: `{"name":"Socrates","birthYear":-469}`. This is a JSON string that is serialized in a "minified" format, with no extra whitespace. JSON is often saved in this minified format when it is ready to be sent over the internet in order to save bandwidth - the file size is smaller.

Run the following code one line at a time in the Developer Tools console of your browser (hit the `F12` key). You can skip the commented lines that start with `//`.

```javascript
// Convert the string to a JSON object
const socrates = JSON.parse('{"name":"Socrates","birthYear":-469}');

// Print the properties of the JSON object to the console
console.log(socrates.name);
console.log(socrates.birthYear);
```

/~
