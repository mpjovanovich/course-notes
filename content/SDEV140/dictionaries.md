---
title: Dictionaries
course: SDEV140
---

~.toc

- [Dictionaries](#dictionaries)
  - [Creating a Dictionary](#creating-a-dictionary)
  - [Common Uses for Dictionaries](#common-uses-for-dictionaries)
  - [Dictionary Keys](#dictionary-keys)
  - [Accessing Values](#accessing-values)
  - [Modifying Values](#modifying-values)
  - [Adding new Key-Value Pairs](#adding-new-key-value-pairs)
  - [Removing Key-Value Pairs](#removing-key-value-pairs)
  - [Checking if a Key Exists](#checking-if-a-key-exists)
  - [Iterating Through a Dictionary](#iterating-through-a-dictionary)
  - [Demos: Accessing Values in a Dictionary - Weather Forecast](#demos-accessing-values-in-a-dictionary---weather-forecast)
    - [Version 1 - Normal Dictionary:](#version-1---normal-dictionary)
    - [Version 2 - Dictionary of Arrays:](#version-2---dictionary-of-arrays)
    - [Version 3 - Dictionary of Dictionaries:](#version-3---dictionary-of-dictionaries)
  - [Demos: Building a Dynamic Dictionary - Student Grades Program](#demos-building-a-dynamic-dictionary---student-grades-program)
    - [Version 1: Normal Dictionary](#version-1-normal-dictionary)
    - [Version 2: Dictionary of Arrays](#version-2-dictionary-of-arrays)
    - [Version 3: Dictionary of Dictionaries](#version-3-dictionary-of-dictionaries)

/~

# Dictionaries

A dictionary is a collection of key-value pairs. Dictionaries are also known as

- **Maps**
- **Hashmaps**
- **Associative arrays**

## Creating a Dictionary

- You can create a dictionary using curly braces `{}` and separating key-value pairs with colons `:`
- Keys and values can be any data type.

```python
# String / string
my_dict = {
    "key1": "value1",
    "key2": "value2",
/~

# Int / int
my_dict2 = {
    1 : 31,
    2 : 29,
    3 : 31,
    12 : 31,
/~

# String / int
my_dict3 = {
    "January": 31,
    "February": 29,
    "March": 31,
    "December": 31,
/~
```

## Common Uses for Dictionaries

- Storing a set of items that are related to each other

```python
# Storing a set of items that are related to each other -
# creating a lookup table.
prices = {
    "apple": .75,
    "orange": .25,
    "banana": .99,
/~
```

- Storing a set of items that are related to a single item

```python
# Storing a set of items that are related to a single item -
# creating a simple "object" with properties.
person = {
    "name": "John",
    "age": 25,
    "city": "New York",
/~
```

## Dictionary Keys

Dictionary keys must be unique. If you try to create a dictionary with duplicate keys, the last key-value pair will overwrite the previous one:

```python
# Duplicate keys
my_dict = {
    "name": "John",
    "age": 25,
    "city": "New York",
    "name": "Jane"
/~
print(my_dict)
# Output: {"name": "Jane", "age": 25, "city": "New York"}
```

## Accessing Values

You can access the values in a dictionary using the keys. Use square brackets `[]` and provide the key to retrieve the associated value:

```python
# Accessing Values
print(my_dict["name"])  # Output: John
print(my_dict["age"])   # Output: 25
```

## Modifying Values

You can modify the values associated with a key:

```python
# Modifying values
my_dict["age"] = 26
print(my_dict["age"])   # Output: 26
```

## Adding new Key-Value Pairs

You can add new key-value pairs to a dictionary:

```python
# Adding a new key-value pair
my_dict["gender"] = "Male"
print(my_dict)
# Output: {"name": "John", "age": 26, "city": "New York", "gender": "Male"}
```

## Removing Key-Value Pairs

You can remove a key-value pair from a dictionary using the `del` keyword:

```python
# Removing a key-value pair
del my_dict["city"]
print(my_dict)
# Output: {"name": "John", "age": 26, "gender": "Male"}
```

## Checking if a Key Exists

You can check if a key exists in a dictionary using the in keyword:

```python
# Checking if a key exists
if "name" in my_dict:
    print('found')
```

## Iterating Through a Dictionary

You can iterate through the keys, values, or key-value pairs of a dictionary:

```python
# Iterating through keys
for key in my_dict:
    print(key)

# Iterating through values
for value in my_dict.values():
    print(value)

# Iterating through key-value pairs
for key, value in my_dict.items():
    print(key, value)
```

## Demos: Accessing Values in a Dictionary - Weather Forecast

~.focusContent.lookout

Note that in the demos below we should really be checking if the key exists before accessing it by using the `in` keyword, as shown in the "Checking if a Key Exists" section above.

/~

### Version 1 - Normal Dictionary:

In this version, temperatures are stored in a dictionary with a date as the key.

```python
## Daily high temperatures for a week in September
temperatures = {
    "20240901": 65,
    "20240902": 66,
    "20240903": 67,
    "20240904": 68,
    "20240905": 69,
}

## Prompt user for a date
date = input("Enter a date (YYYYMMDD): ")

## Print the temperature for the date
print(f'{date}: {temperatures[date]}°F')
```

### Version 2 - Dictionary of Arrays:

In this version, hourly temperatures are stored in an array with the date as the key and an array of temperatures as the value.

```python
## Hourly temperatures for a week in September
temperatures = {
    "20240901": [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 72, 72, 70, 68],
    "20240902": [63, 64, 66, 67, 70, 71, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 85, 84, 83, 74, 71, 69, 66],
    "20240903": [64, 65, 66, 68, 70, 72, 73, 74, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 85, 75, 73, 70, 67],
    "20240904": [62, 63, 65, 67, 68, 70, 72, 73, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84, 85, 83, 73, 70, 68, 65],
    "20240905": [66, 67, 68, 69, 71, 72, 73, 74, 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 84, 76, 74, 71, 69],
    "20240906": [65, 66, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 84, 82, 75, 73, 70, 68],
    "20240907": [63, 64, 66, 68, 69, 71, 72, 73, 75, 76, 77, 79, 80, 81, 82, 83, 84, 85, 85, 83, 74, 72, 69, 67],
}

## Prompt user for a date
date = input("Enter a date (YYYYMMDD): ")

## Make sure the date is in the temperatures dictionary
if date not in temperatures:
    print("Date not found in temperatures dictionary.")
    ## Really we should prompt the user again, but for now we'll just exit
    exit()

## Prompt user for an hour
hour = int(input("Enter an hour (0-23): "))

## Print the temperature for the date and hour.
## Pad the hour with zeros to 2 digits
print(f'{date}, {hour:02d}:00 {temperatures[date][int(hour)]}°F')
```

### Version 3 - Dictionary of Dictionaries:

In this version, the outer dictionary is keyed by city, and the inner dictionary is keyed by date. Only the high temperature is stored.

```python
# In this version, the outer dictionary is keyed by city, and the inner dictionary is keyed by date. Only the high temperature is stored.
temperatures = {
    "New York": {
        "20240901": 65,
        "20240902": 63,
        "20240903": 64,
        "20240904": 62,
        "20240905": 66,
        "20240906": 65,
        "20240907": 63,
    },
    "Chicago": {
        "20240901": 68,
        "20240902": 66,
        "20240903": 67,
        "20240904": 65,
        "20240905": 69,
    },
    "Los Angeles": {
        "20240901": 72,
        "20240902": 70,
        "20240903": 71,
        "20240904": 69,
        "20240905": 73,
    },
}

## Prompt user for a city
city = input("Enter a city: ")

## Prompt user for a date
date = input("Enter a date (YYYYMMDD): ")

## Print the temperature for the date.
print(f'{city}, {date}: {temperatures[city][date]}°F')
```

## Demos: Building a Dynamic Dictionary - Student Grades Program

### Version 1: Normal Dictionary

In this version we will store final grades in a dictionary.

```python
## #####################################
## Get grades
## #####################################

## Initialize final grades dictionary
final_grades = {}

## Loop to get student names
while True:
    ## Get student name
    student_name = input("Enter a student name or type 'quit' to exit: ")
    if student_name.lower() == "quit":
        break

    ## Get final grade
    final_grade = float(input(f"Enter the final grade for {student_name}: "))

    ## Add to final grades dictionary
    final_grades[student_name] = final_grade

## #####################################
## Print grades
## #####################################
print()
print("FINAL GRADES:")
print("-" * 20)

for student, grade in final_grades.items():
    print(f"{student}: {grade}")
```

### Version 2: Dictionary of Arrays

In this version we will store grades for multiple lab assignments in a dictionary of arrays. We can then access the grades for a specific lab by indexing into the array by position.

We use a nested loop to get the grades for each lab assignment.

```python
## #####################################
## Get grades
## #####################################

## Initialize grades dictionary
grades = {}

## Loop to get student names
while True:
    ## Get student name
    student_name = input("Enter student name. Type 'quit' if done with students: ")
    if student_name.lower() == "quit":
        break

    # Initialize student's grades list
    lab_scores= []

    ## Loop to get grades
    while True:
        score = input(f"Enter lab score. Type 'done' if done with grades: ")
        if score.lower() == "done":
            break
        lab_scores.append(float(score))

    ## Add student and grades to grades dictionary
    grades[student_name] = lab_scores

    ## Friendly message to let user know we are done with this student
    print(f"GRADES COMPLETE FOR {student_name}.")
    print('-' * 20)


## #####################################
## Print grades
## #####################################
print()
print("FINAL GRADES:")
print("-" * 20)

for student, scores in grades.items():
    print(f"{student}:")

    ## Grades is a list, so iterate through it
    for score in scores:
        print(f"  {score}")
```

### Version 3: Dictionary of Dictionaries

In this version we will store grades for each assignment category in a dictionary of dictionaries. We can then access the grades for a specific assignment category by indexing into the dictionary with the category name.

We use a nested loop to get the grades for each assignment category.

```python
## #####################################
## Get grades
## #####################################

## Initialize final grades dictionary
final_grades = {}

## Loop to get student names
while True:
    ## Get student name
    student_name = input("Enter student name. Type 'quit' if done with students: ")
    if student_name.lower() == "quit":
        break

    # Initialize student's grades dictionary
    student_grades = {}

    ## Loop to get grades (by category)
    while True:
        category = input("Enter grade category. Type 'done' if done with categories: ")
        if category.lower() == "done":
            break
        grade = float(input(f"Enter grade for {category}: "))
        student_grades[category] = grade

    ## Add student and grades to final grades dictionary
    final_grades[student_name] = student_grades

    ## Friendly message to let user know we are done with this student
    print(f"GRADES COMPLETE FOR {student_name}.")
    print('-' * 20)

## #####################################
## Print grades
## #####################################
print()
print("FINAL GRADES:")
print("-" * 20)

for student, categories in final_grades.items():
    print(f"{student}:")

    ## Categories is a dictionary, so iterate through it
    for category, grade in categories.items():
        print(f"  {category}: {grade}")
```
