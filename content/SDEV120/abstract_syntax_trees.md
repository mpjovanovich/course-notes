---
title: Abstract Syntax Trees
course: SDEV120
---

~.toc

- [Tree Structures](#tree-structures)
  - [Tree Terminology](#tree-terminology)
  - [Tree Traversal](#tree-traversal)
- [Abstract Syntax Trees](#abstract-syntax-trees)
  - [Basic Syntax Tree](#basic-syntax-tree)
  - [Variables in Syntax Trees](#variables-in-syntax-trees)
  - [Expanding Function Calls](#expanding-function-calls)
- [Function Composition](#function-composition)
  - [Arithmetic Function Composition](#arithmetic-function-composition)
- [Functions with Multiple Arguments](#functions-with-multiple-arguments)
- [Boolean Logic in Syntax Trees](#boolean-logic-in-syntax-trees)
- [For the Homework](#for-the-homework)

/~

## Tree Structures

A **tree structure** is a data structure that represents a hierarchy of elements. They are used in many areas of computer science.

In the previous lecture we discussed expressions. Computers need an algorithm to evaluate expressions. One way to do this is with a tree structure.

### Tree Terminology

- **Node**: Any single element in a tree.
- **Root**: The top node in a tree.
- **Parent**: A node that has children.
- **Child**: A node that has a parent.
- **Leaf**: A node that has no children.

### Tree Traversal

There are many algorithms for determining the order in which to visit nodes in a tree.

We will use a **post-order** traversal for syntax trees:

![post-order tree traversal](https://files.codingninjas.in/article_images/iterative-postorder-traversal-of-binary-tree-0-1635320121.jpg)

In the graphic above, visits are shown in blue, evaluations in red.

Each leaf node (A, C, E, H) would be some operand, and each internal node (B, D, F, G, I) would be some operator.

## Abstract Syntax Trees

An **abstract syntax tree** is a visual representation of the syntax of a programming language for some expression.

### Basic Syntax Tree

Below is a syntax tree containing literals and operators for the expression:

```
(7 + 3) * (5 - 2)
```

<figure>
    <span>
        <img src="images/parse_tree.png" style="">
    </span>
</figure>

~.focusContent.example

Draw the syntax tree for the following expressions:

```
1) 5 + 3 * 2

2) (5 + 3) * 2

3)  10 / 2 / 2 - 1

4)  10 / (2 / 2) - 1
```

/~

### Variables in Syntax Trees

If a syntax tree includes variables, we treat them just like literals.

~.focusContent.example

<figure>
    <span>
        <img src="images/ast_7_plus_x_time_y_minus_2.svg" style="">
    </span>
</figure>

1. Draw the syntax tree for the expression:

```
(7 + x) * (y - 2)
```

2. Evaluate the expression for `x = 3` and `y = 5` by plugging in the values.

/~

### Expanding Function Calls

We may need to substitute the function call with its definition within the tree. We just drop it in place.

~.focusContent.example

Given the function:

```
f(x) = x / 2
```

Find the syntax tree for the following expressions:

```
1) f(x) + 3
```

<figure>
    <span>
        <img src="images/ast_fx_plus_3.svg" style="">
    </span>
</figure>

```
2) f(x + 1) - 2
```

<figure>
    <span>
        <img src="images/ast_fxplus1_minus_2.svg" style="">
    </span>
</figure>

/~

## Function Composition

**Function Composition** is the process of combining two or more functions to produce a new function.

### Arithmetic Function Composition

Given the functions:

```
f(x) = x + 1
g(x) = x * 2
```

An example of function composition is `f(g(x))`.

We can use an AST for each function expression, then combine them into larger expressions:

<figure>
    <span>
        <img src="images/ast_fx_gx.svg" style="">
    </span>
</figure>

With function composition, the "x" in one function will be replaced by a whole function expression. In other words: plug in g(x) where the "x" is in f(x).

<figure>
    <span>
        <img src="images/ast_fgx.svg" style="">
    </span>
</figure>

~.focusContent.example

Given the functions:

```
f(x) = x + 1
g(x) = x * 2
```

1. Show the combined AST using the expressions for the two functions above.

2. Evaluate the expression `f(g(3))`.

```
f( g( 3 ) )
  = f( 3 * 2 )
  = f( 6 )
  = 6 + 1
  = 7
```

/~

~.focusContent.example

Given the functions:

```
f(x) = x + 1
g(x) = x * 2
```

1. Show the combined ASTs using the expressions for the two functions above.

2. Evaluate the expressions:

```
1) g( f(3) )

2) f( f(2) )

3) f( f( f(6) + 1 ) + 2 ) + 3
```

/~

~.focusContent.exercise

**Extra Practice:**

Try these on your own for extra practice.

_Set 1:_

Given the functions:

```
f(x) = x * 3
g(x) = x - 4
```

Evaluate the expressions:

```
1) f( g(6) )
2) f( g(-1) )
3) g( g(10) )
```

<summary>
<details>
<summary>Solution</summary>
<p>

```
1) f( g(6) )
    = f( 6 - 4 )
    = f( 2 )
    = 2 * 3
    = 6

2) f( g(-1) )
    = f( -1 - 4 )
    = f( -5 )
    = -5 * 3
    = -15

3) g( g(10) )
    = g( 10 - 4 )
    = g( 6 )
    = 6 - 4
    = 2
```

</details>

_Set 2:_

Given the functions:

```
f(x) = x - 2
g(x) = x * x
```

Evaluate the expressions:

```
1) f( g(3) )
2) f( g(-1) )
3) g( g(2) )
```

<summary>
<details>
<summary>Solution</summary>

```
1) f( g(3) )
    = f( 3 * 3 )
    = f( 9 )
    = 9 - 2
    = 7

2) f( g(-1) )
    = f( (-1) * (-1) )
    = f( 1 )
    = 1 - 2
    = -1

3) g( g(2) )
    = g( 2 * 2 )
    = g( 4 )
    = 4 * 4
    = 16
```

</details>

/~

## Boolean Logic in Syntax Trees

We can drop in True and False values into our syntax trees along with logical connectives.

They work the same as we've seen so far.

~.focusContent.example

Draw the syntax tree for the following expressions, evaluating them as you go:

```

1. True and False or False

2. True and (False or False)

3. True and not False or False

```

Here is the #3 syntax tree. Notice that order of operations is respected (not, then and, then or):

<figure>
    <span>
        <img src="images/ast_boolean.svg" style="">
    </span>
</figure>

/~
