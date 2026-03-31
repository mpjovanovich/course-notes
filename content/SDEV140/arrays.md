---
title: Arrays
course: SDEV140
---

~.toc

- [Arrays](#arrays)
  - [Definitions](#definitions)
  - [Manipulating Arrays](#manipulating-arrays)
    - [Creating a List](#creating-a-list)
    - [Adding to a List](#adding-to-a-list)
    - [Accessing a List Element](#accessing-a-list-element)
    - [Reassigning an Array Element](#reassigning-an-array-element)
    - [Getting the Length of a List](#getting-the-length-of-a-list)
  - [Looping Through Lists](#looping-through-lists)
    - [Looping by Index](#looping-by-index)
    - ["foreach" Loops](#foreach-loops)
  - [Strings are Lists (Sort of)](#strings-are-lists-sort-of)
  - [Common List Applications](#common-list-applications)
  - [Searching Lists](#searching-lists)
    - [Linear Search](#linear-search)
    - [Binary Search](#binary-search)
- [Parallel Arrays](#parallel-arrays)
  - [Definition](#definition)

/~

# Arrays

## Definitions

- An array is a series or list of values in computer memory.
- An array is a way to store multiple related variables of the same data type.
- An array is a container with n elements, where n is the length of the array.

## Manipulating Arrays

The things in the array are called **elements**.

Each element occupies a position in the array:

- **index**
- **address**
- **position**

In most programming languages, the first element is at position 0. We call this a **zero-based array**.

~.focusContent.note

**List vs Array?**

The term **array** adheres strictly to the first definition given above.

Most programming languages offer a wrapper for arrays that allows for more flexible operations such as:

- Dynamic sizing
- Adding and removing elements
- Sorting
- Searching
- etc.

Python calls these **lists**. We will use the term **list** going forward.

/~

### Creating a List

```python
## Initialize an empty list
arr = []
```

```python
## Initialize an array with values
arr = ['a','b','c','d']
```

### Adding to a List

```python
## Add an element to the end of the list
arr = []
arr.append( 'a' )
# Array now contains: ['a']
```

### Accessing a List Element

```python
## Access an element by index
arr = ['a','b','c','d']
print( arr[0] ) # Will print 'a'
print( arr[1] ) # Will print 'b'
```

### Reassigning an Array Element

```python
## Reassign an element by index
arr = ['a','b','c','d']
arr[0] = 'z'
print( arr[0] ) # Will print 'z'
```

### Getting the Length of a List

We can use the “len” function to get the length of a list.

```python
## After this code is executed the “length” variable will hold an integer
## with the number of elements of the list
arr = ['a','b','c','d']
length = len( arr )
print(length) # Will print 4
```

```python
## Get the last element of a list
arr = ['a','b','c','d']
last_element = arr[ len( arr ) - 1 ]
print( last_element ) # Will print 'd'
```

## Looping Through Lists

### Looping by Index

We can use a counter variable to access an array element by position as we move through a loop.

```python
arr = ['a','b','c','d']
## We can create a counter variable that we can then use to
## access an element by index - by its position within the list.
for i in range( len( arr ) ):
    print( 'The current index is: ' + str(i) )
    print( 'The value at this position is: ' + arr[i] )
```

~.focusContent.example

[m06_array_index_with_loop.py](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/m06_array_index_with_loop.py)

/~

### "foreach" Loops

- Many languages offer a `foreach` loop.
- Convenient way to iterate over a collection of data without index and counter variable.

```python
arr = ['a','b','c','d']

# We can call "letter" anything we want.
for letter in arr:
    print( letter ) # prints: a, b, c, d
```

## Strings are Lists (Sort of)

Strings are an iterable collection of characters.

Anything we can do with an array, we can do with a string.

```python
long_word = ['Acetylcholinergic neurotransmission',]

for letter in long_word:
    print( letter )
```

~.focusContent.demo

Write a program that prompts the user to enter an animal name. Then prompt to enter a second animal name. If the entries are the same print “Match”, otherwise print “Not a match”.

[string_comparison.py](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/string_comparison.py)

/~

## Common List Applications

~.focusContent.demo

**Get the Nth element from a list**

[get_nth_largest_city.py](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/get_nth_largest_city.py)

/~

~.focusContent.demo

**Get the top N first/last elements from a list**

[get_top_n_largest_cities.py](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/get_top_n_largest_cities.py)

[get_top_n_smallest_cities.py](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/get_top_n_smallest_cities.py)

/~

~.focusContent.demo

**Get every Nth element from a list**

[alphabet_get_every_nth.py](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/alphabet_get_every_nth.py)

/~

## Searching Lists

### Linear Search

~.focusContent.demo

Algorithm:

- Initialize a flag variable - a boolean variable that tells whether the item was found. This will start with a value of “False”.
- Use a loop to iterate through each item, and compare against the search target.
- If the search target is found then set the flag variable to “True”.

[linear_search.py](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/linear_search.py)

/~

### Binary Search

More efficient than linear search, but the array must be sorted.

~.focusContent.demo

Algorithm:

- Check middle element of array.
- If the target is the middle element, then we are done.
- If the target is less than the middle element
  - Start over, searching the left half of the array.
- If the target is greater than the middle element
  - Start over, searching the right half of the array.
- Repeat until the target is found or the array is empty.

[binary_search.py](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/binary_search.py)

/~

# Parallel Arrays

## Definition

**Parallel arrays** are a set of arrays that store related information for a given index / position.

E.g.: Here are two arrays below - name and age. The parallel arrays give the data a table structure. By looking at some index into the arrays we can extract a “row” of data which are related.

| index |      name       | age    |
| :---- | :-------------: | :----- |
| 0     |   Terri Gourd   | 23     |
| 1     | Jonny Chocolate | 17     |
| 2     |  Sven Iglinsin  | 34     |
| 3     |      The Q      | 999999 |

This example had just two arrays, but there may be as many as needed.

~.focusContent.demo

**Enter Student Grades**

Write a program that first prompts a user to enter the names of a student then the student’s final grade. Do this until the user types “done”. Print each student’s name and total score and exit the program.

[enter_student_grades.py](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/m06_enter_student_grades.py)

/~

~.focusContent.demo

**Moving Average**

Write a program that calculates the moving average of a list of numbers. This means that after each number is entered, the average of the numbers entered so far is calculated and displayed.

[moving_average_parallel_arrays.py](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV140_Intro_Software_Development/moving_average_parallel_arrays.py)

/~
