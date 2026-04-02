---
title: Parallel Arrays
course: SDEV140
---

~.toc

- [Parallel Arrays](#parallel-arrays)
  - [Definition](#definition)
  - [Examples](#examples)

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

## Examples

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
