---
title: Algorithms
course: SDEV120
---

~.toc

- [Algorithms](#algorithms)
  - [What is an Algorithm?](#what-is-an-algorithm)
    - [Examples](#examples)
  - [Structured Programming](#structured-programming)
    - [Sequence](#sequence)
    - [Selection](#selection)
    - [Iteration](#iteration)
  - [Applications and Domains](#applications-and-domains)
    - [Sorting](#sorting)
    - [Searching](#searching)
    - [Encryption](#encryption)
    - [Compression](#compression)
    - [Pathfinding](#pathfinding)
    - [Flocking](#flocking)
    - [Network Analysis / Search Ranking](#network-analysis--search-ranking)
    - [Classification](#classification)
    - [Prediction](#prediction)
    - [Reinforcement Learning](#reinforcement-learning)
  - [Critical Thinking Exercise](#critical-thinking-exercise)

/~

# Algorithms

<figure>
 <img src="https://imgs.xkcd.com/comics/linear_regression_2x.png" alt="" style="width: 60%;height: auto;">
</figure>

## What is an Algorithm?

- A set of instructions for solving a problem
- A sequence of steps that can be followed to complete a task
- A recipe

### Examples

_Bake a Cake_

- Preheat oven to 350 degrees.
- Mix flour, sugar, and baking soda in a bowl.
- Add 2 eggs, 1 cup milk, and 1tsp vanilla.
- Mix well.
- Pour into a greased baking pan.
- Bake for 30 minutes.

_Determine if Number is Even or Odd_

- Divide the number by 2.
- If the remainder is 0, the number is even.
- Otherwise, the number is odd.

_Find the Largest Number in a Set_

- Set the largest number to the first number in the list.
- For each number in the list:
  - If the number is larger than the largest number, set the largest number to the current number.
  - Otherwise, do nothing.
  - Repeat for each number in the list.

## Structured Programming

**Structured programming** forms the basis of all modern programming languages, and can be used to implement algorithms.

The three basic control structures are:

### Sequence

- Execute instructions order, one after the other.
- (Not out of order).

### Selection

- Choose between two or more **logical branches** based on a condition.
- "If-then-else"

### Iteration

- Repeat a set of instructions until a condition is met.
- "Looping"

**Where do we see these structures in the algorithms above?**

## Applications and Domains

_Thinking algorithmically:_

While human brains are often compared to computers, they are actually quite different. In order to understand how computers work, we need to think in "instructions", or discrete steps.

As we move through the applications below, let's think about the "humanlike" and "computerlike" ways of solving problems.

### Sorting

<figure>
  <img src="https://miro.medium.com/v2/1*-qR66X2iwdcjhaqq10y9JQ.gif" alt="" style="width: 100%;height: auto;">
</figure>

"How do we arrange a set of items in a specific order?"

- Bubble sort
- Insertion sort
- Merge sort
- Quick sort

### Searching

<figure>
 <img src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*GT9oSo0agIeIj6nTg3jFEA.gif" alt="" style="width: 60%;height: auto;">
</figure>

"How do we find a specific piece of information?"

- Linear search
- Binary search
- Depth-first search
- Breadth-first search

### Encryption

"How do we encode/decode information to and from human readable?"

- RSA
- AES
- Triple DES

### Compression

"How do we represent the same information with fewer bits?"

- Huffman coding
- Lempel-Ziv-Welch (LZW)
- Discrete cosine transform (DCT)

### Pathfinding

<figure>
 <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif" alt="" style="width: 60%;height: auto;">
</figure>

"How do we find the optimal path between two points?"

- Dijkstra's algorithm

### Flocking

<figure>
  <img src="https://repository-images.githubusercontent.com/258305543/28971980-92d2-11ea-8a66-4d0d91c0e790" alt="" style="width: 100%;height: auto;">
</figure>

"How do we simulate flock behavior?"

- Boids algorithm

### Network Analysis / Search Ranking

<figure>
  <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*311Gn2vCqFYpPfi0" alt="" style="width: 100%;height: auto;">
</figure>

<figure>
  <img src="https://miro.medium.com/v2/1*j-WoG309GW2UHI9gN3uJeg.gif" alt="" style="width: 100%;height: auto;">
</figure>

- "How do we model the spread of a virus?"
- "How do we match text from an Internet search to relevant results?"
- "How do we recommend content on social media?"

### Classification

<figure>
 <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*bhFifratH9DjKqMBTeQG5A.gif" alt="" style="width: 60%;height: auto;">
</figure>

"How do we categorize items from a set of data?"

- Naive Bayes
- Decision tree
- Random forest
- Support vector machine (SVM)
- K-nearest neighbors (KNN)
- Neural network

### Prediction

"How do we predict a future value based on a set of data?"

- Linear regression
- Logistic regression
- Polynomial regression
- Markov chain
- Monte Carlo method
- Neural network

### Reinforcement Learning

"How do we get a computer to learn on its own?"

- Q-learning
- Temporal difference (TD) learning

## Critical Thinking Exercise

~.focusContent.exercise

**Problem:** We need to fly from Indianapolis to Los Angeles.

The following cities are possible stops:

- Chicago
- Denver
- Dallas
- Phoenix
- Las Vegas

Draw a graph of the possible routes between these cities.

Consider:

- directed vs undirected
- bidirectional vs unidirectional
- weighted vs unweighted
  - What paramaters might the weights represent?
  - Optimize for a single parameter? A combination of parameters?

/~
