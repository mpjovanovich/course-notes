---
title: Intro to JavaScript
course: SDEV255
---

~.toc

- [Syntax and Basic Concepts](#syntax-and-basic-concepts)
  - [Comments](#comments)
  - [console.log()](#consolelog)
  - [Semicolons](#semicolons)
  - [Curly Braces](#curly-braces)
  - [Variables and Constants](#variables-and-constants)
    - [Data Types](#data-types)
    - [Declaration and Scope](#declaration-and-scope)
  - [Strings](#strings)
    - [Concatenation](#concatenation)
    - [Template Literals](#template-literals)
  - [Arrays](#arrays)
  - [If Statements](#if-statements)
  - [Loops](#loops)
    - [While](#while)
    - [For](#for)
    - [Foreach](#foreach)
  - [Functions](#functions)

/~

<figure>
 <img src="images/javascript_rotten_child.png" alt="" style="width: 40%;height: auto;">
</figure>

# Syntax and Basic Concepts

## Comments

Code that is put in comments will not be executed.

Useful both for documentation and debugging, "commenting out code".

```javascript
/*
This is a multi-line comment.
So many lines!
Whoa!
*/

// This is a single-line comment.
```

## console.log()

Use `console.log()` to print values to the console.

```javascript
const myVariable = "Hello, world!";
console.log(myVariable);
```

## Semicolons

<figure>
 <img src="https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Java-Jokes-768x935.jpg" alt="" style="width: 40%;height: auto;">
</figure>

Javascript is a semicolon-terminated language. They are required after every statement.

```javascript
let x = 5;
let y = 6;
let z = x + y;
```

## Curly Braces

JavaScript uses curly braces to denote blocks of code.

(Unlike Python, which uses indentation.)

```javascript
let x = 5;
if (x > 0) {
  console.log("x is positive");
}
```

We still want indentation to make the code more readable.

## Variables and Constants

### Data Types

JavaScript is a dynamically typed language.

- Don't declare variable types.
- Variables can be reassigned to different data types.

```javascript
let x = 5;
x = "Hello, world!";
```

Some common data types:

- `string`
- `number`
- `boolean`
- `undefined`
- `object`

### Declaration and Scope

In modern JS, variables are declared with `let` or `const`.

- `const` is used for values that will not change.
- `let` is used for values that will change.

```javascript
const PI = 3.14;
let r = 5;
let area = PI * r * r;
```

In older JS you may see `var` used instead of `let`. `var` is function-scoped, while `let` is block-scoped.

```javascript
var x = 5;
if (true) {
  var x = 10;
/~
console.log(x); // 10
```

```javascript
let x = 5;
if (true) {
  let x = 10;
/~
console.log(x); // 5
```

**Takeaway:** Use `const` for values that will not change, and `let` for values that will change.

## Strings

### Concatenation

```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
```

### Template Literals

**Template literals** are string literals that allow embedded expressions via interpolation.

**String interpolation** is where a string literal contains one or more placeholders which can have expressions embedded in them.

Use backticks, dollar sign, and curly braces to interpolate variables into strings.

```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;
```

We can put any valid JavaScript expression inside the curly braces.

```javascript
let price = 5.99;
let quantity = 10;
let total = `The total is $${price * quantity}`;
```

## Arrays

```javascript
let myArray = ["Bingo", "Rolly", "Spot"];
console.log(myArray[0]); // Bingo
```

## If Statements

If, else if, else:

```javascript
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition1 is false and condition2 is true
} else {
  // code to be executed if both condition1 and condition2 are false
}
```

## Loops

### While

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

### For

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### Foreach

```javascript
let myArray = ["Bingo", "Rolly", "Spot"];

// Arrow function syntax
myArray.forEach((item) => {
  console.log(item);
});
```

## Functions

Basic function syntax:

```javascript
function myFunction() {
  console.log("Hello, JavaScript!");
}
```

With arguments:

```javascript
function myFunction(arg1, arg2) {
  console.log(`You passed in ${arg1} and ${arg2}.`);
}
```

With return value:

```javascript
function myFunction(arg1, arg2) {
  returnValue = arg1 + arg2;
  return returnValue;
}
```
