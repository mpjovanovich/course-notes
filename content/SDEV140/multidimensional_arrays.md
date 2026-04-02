---
title: Multidimensional Arrays
course: SDEV140
---

~.toc

- [Multidimensional Arrays](#multidimensional-arrays)
  - [When to Use Multidimensional Arrays](#when-to-use-multidimensional-arrays)
  - [Python - Lists of Lists](#python---lists-of-lists)
  - [Accessing and Modifying Values](#accessing-and-modifying-values)
  - [Example - Tic Tac Toe](#example---tic-tac-toe)
  - [Example: Pet Database as List of Lists](#example-pet-database-as-list-of-lists)

/~

# Multidimensional Arrays

- A multidimensional array is an array of arrays.

## When to Use Multidimensional Arrays

- When you need to represent data that is naturally multidimensional:
  - Tables, grids, matrices (2d)
  - Jagged arrays (list of lists of varying lengths)

## Python - Lists of Lists

```python
# A 2D array
my_grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Whitespace is ignored, so this can be more readable:
my_grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
```

## Accessing and Modifying Values

- To access and/or modify a value in a multidimensional array, you need to specify the index of each dimension.
- For example, to change the value `5` to `99` in `my_grid`:

```python
my_grid[1][1] = 99
```

## Example - Tic Tac Toe

```python
# Create a tic-tac-toe board
SIZE = 4

# Assign board to a variable - a list of lists
board = []
for i in range(0, SIZE, 1):
    board.append([])

    # Initialize the current row to hold blanks (empty string)
    for _ in range(0, SIZE, 1):
        board[i].append('')

# Example turn: player 1 puts 'X' in the top left coordinate
board[0][0] = 'X'

# Print the board
for row in board:
    print(row)
print()

# Example turn: player 2 puts 'O' in the bottom right coordinate
board[SIZE-1][SIZE-1] = 'O'

# Print the board
for row in board:
    print(row)
print()
```

## Example: Pet Database as List of Lists

_v1: Without built-in string join function_

```python
## Create a multidimensional array for students and pets
students = [
    'Prof J',
    'Alf',
    'Max',
    'Jen'
]

# For each student, initialize pets to empty array
pets = []
for student in students:
    pets.append([])

## Add pets for each student
pets[0].append('Marvin')
pets[0].append('Doris')
pets[0].append('Faye')

pets[1].append('Dice')
pets[1].append('Bones')

pets[2].append('Scone')
pets[2].append('Biscuit')

pets[3].append('Chewbacca')
pets[3].append('Jabba')
pets[3].append('Lando')

# Loop through students
for i in range(0, len(students), 1):

    # Print current student
    print(students[i], end=': ')

    # Get list of pets for student
    student_pets = pets[i]

    # Print all pets for student
    for j in range(0, len(student_pets), 1):
        print(student_pets[j], end='')

        # Print either a ", " or a newline if last item
        if j == len(student_pets) - 1:
            # Last item
            print()
        else:
            # Not last item
            print(', ', end='')
```

_v2: With built-in string join function_

```python
## Create a multidimensional array for students and pets
students = [
    'Prof J',
    'Alf',
    'Max',
    'Jen'
]

# For each student, initialize pets to empty array
pets = []
for student in students:
    pets.append([])

## Add pets for each student
pets[0].append('Marvin')
pets[0].append('Doris')
pets[0].append('Faye')

pets[1].append('Dice')
pets[1].append('Bones')

pets[2].append('Scone')
pets[2].append('Biscuit')

pets[3].append('Chewbacca')
pets[3].append('Jabba')
pets[3].append('Lando')

# Loop through students
for i in range(0, len(students), 1):
    # Print current student
    print(students[i], end=': ')

    # Get list of pets for student
    student_pets = pets[i]

    # Print pet list in comma separated format
    # using built-in string join function
    print(', '.join(student_pets))
```
