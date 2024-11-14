---
title: Programming with Loops
course: SDEV120
---

~.toc

- [Programming with Loops](#programming-with-loops)
  - [Basics](#basics)
    - [Print 1-4 Pseudocode](#print-1-4-pseudocode)
    - [Print 1-4 Flowchart](#print-1-4-flowchart)
    - [Print 1-4 Python](#print-1-4-python)
  - [Priming Reads](#priming-reads)
    - [Sentence Builder Pseudocode](#sentence-builder-pseudocode)
    - [Sentence Builder Flowchart](#sentence-builder-flowchart)
    - [Sentence Builder Python](#sentence-builder-python)

/~

# Programming with Loops

<figure>
 <img src="https://timmousk.com/wp-content/uploads/2022/03/2-6.jpg" alt="" style="width: 70%;height: auto;">
</figure>

When we need to repeat some action within an algorithm, we use a loop.

Loops can run zero to infinite times depending on the condition and inputs.

_Terminology:_

- **Iteration** = one execution of the loop body.
- **Entry Condition** = the condition that controls whether we enter the loop.
- **Loop Control Variable** = the variable in the entry condition that controls the loop.

## Basics

Flow of execution within a loop is as follows:

- The loop control variable is initialized before the loop starts.
- The entry condition is checked.
- If the entry condition is true, we enter the loop body.
- The loop body executes.
- The loop control variable is updated inside the loop.
- The entry condition is checked again until it is false.

### Print 1-4 Pseudocode

```
START
    SET i = 1
    WHILE i <= 4:
        PRINT i
        SET i = i + 1
    END WHILE
END
```

### Print 1-4 Flowchart

<figure>
 <img src="images/print_1_4_flowchart.svg" alt="" style="width: 80%;height: auto;">
</figure>

### Print 1-4 Python

```python
## This program prints numbers 1-4
i = 1
while i <= 4:
    ## Print the current value of i
    print( i )

    ## Increment the loop control variable
    ## If we forget this, the loop will run forever (infinite loop)
    i = 1 + 1
```

~.focusContent.demo

**Program the following:**

- Times table: base from 1 to n (x \* 1, x \* 2, x \* 3, ..., x \* n)
- Harmonic series: 1/1 + 1/2 + 1/3 + 1/4 + 1/5 + ... + 1/n

/~

## Priming Reads

Now let's try a program that needs user input to control the loop.

The first time we get input (outside of the loop) from the user is called a **priming read**.

We repeat this read inside the loop.

### Sentence Builder Pseudocode

```
START
	SET sentence to empty
	GET next word

	WHILE word is not "quit":
		Add word to sentence
		GET next word
	END WHILE

	PRINT sentence
END
```

### Sentence Builder Flowchart

<figure>
 <img src="images/sentence_builder_flowchart.svg" alt="" style="width: 80%;height: auto;">
</figure>

### Sentence Builder Python

```python
## This program builds a sentence one word
## at a time.

## Set sentence to empty
sentence = ''

## Get next word
word = input("Enter next word or 'quit': ")

## As long as the user didn't enter "quit", then
## enter the loop body
while word != 'quit':
    ## Add the word to the end of the sentence
    sentence = sentence + word

    ## Get next word
    word = input("Enter next word or 'quit': ")

## Print the final result
print(sentence)
```

~.focusContent.demo

**Program the following:**

Enter grades until the user enters -1. Calculate the sum and average.

/~
