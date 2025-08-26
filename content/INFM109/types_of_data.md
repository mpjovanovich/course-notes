---
title: Information and Data
course: INFM109
---

~.toc

- [Information and Data](#information-and-data)
  - [Data Classifications](#data-classifications)
    - [Qualitative vs Quantitative](#qualitative-vs-quantitative)
      - [Qualitative Data](#qualitative-data)
      - [Quantitative Data](#quantitative-data)
    - [Types of Data](#types-of-data)
      - [Continuous Data](#continuous-data)
      - [Discrete Data](#discrete-data)
    - [Categorical (Nominal) Data](#categorical-nominal-data)
    - [Ordinal Data](#ordinal-data)
    - [Daily (Self) Quiz](#daily-self-quiz)

/~

# Information and Data

**Data** is the raw facts and figures that are collected and stored in a database.

**Information** is the processed data that is used to make decisions and solve problems.

## Data Classifications

### Qualitative vs Quantitative

#### Qualitative Data

- Non-numerical data
- Cannot be easily measured and expressed in numbers
- Examples:
  - "Describe an experience when..."
  - "How hilly is the terrain in your area?"
- Difficult to do analysis on qualitative data

#### Quantitative Data

- Numerical data
- Can be measured and expressed in numbers
- Examples:
  - Height
  - Weight
- Many methods of analysis can be applied to quantitative data

~.focusContent.example

We can "hack" the qualitative data using techniques like **scaling**: assigning discrete values to the data. This allows us to use the data in quantitative analysis.

You may have heard of the **Likert scale**, which is a common way to collect qualitative data.

```
Strongly Disagree (1)
Disagree (2)
Neutral (3)
Agree (4)
Strongly Agree (5)
```

You may even see smiley face scales used in this way.

_Where have you seen Likert scales in the real world?_

/~

### Types of Data

#### Continuous Data

- Can take any value within a range
- Can be measured to arbitrary precision
- Examples:
  - Height (1.75m, 1.751m, 1.7512m, etc.)
  - Weight
  - Temperature

#### Discrete Data

- Takes on specific values (usually whole numbers)
- Countable values with gaps between them
- Examples:
  - Number of students in a class (1, 2, 3, 4, 5, etc.)
  - Number of cars sold

### Categorical (Nominal) Data

- Data that can be labeled or categorized
- No inherent order between categories
- Examples:
  - Colors (red, blue, green)
  - Gender (male, female)
  - Blood type (A, B, AB, O)
  - State of residence (IN, IL, KY, etc.)

~.focusContent.example

Categorical data can be represented numerically and used in quantitative analysis. One way to do this is by "one-hot encoding" vectors.

Let's look at a couple of examples:

| Red | Blue | Green | Dog | Cat |
| --- | ---- | ----- | --- | --- |
| 1   | 0    | 0     | 1   | 0   |
| 0   | 1    | 0     | 0   | 1   |

If a "feature" is present, it is represented by a 1. If it is not present, it is represented by a 0.

The first row represents a red dog. The second row represents a blue cat.

This technique is widely used in machine learning (AI) models.

/~

### Ordinal Data

- Categories that have a natural order/ranking
  - first, second, third ... last
  - best, next best, next best ... worst
- Examples:
  - Education level (High School, Bachelor's, Master's, PhD)
  - Customer satisfaction (1-5 stars)
  - T-shirt sizes (S, M, L, XL)

~.focusContent.exercise

### Daily (Self) Quiz

1. Which type of data would "Letter Grades (A, B, C, D, F)" be classified as?
   <details>
   <summary>Answer</summary>
   Ordinal data - the grades have a natural order
   </details>

2. Is "Number of children in a family" continuous or discrete data?
   <details>
   <summary>Answer</summary>
   Discrete data - you can only have whole numbers of children
   </details>

/~
