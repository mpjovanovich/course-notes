---
title: PseudoCode
course: SDEV120
---

~.toc

- [PseudoCode](#pseudocode)
  - [What is PseudoCode?](#what-is-pseudocode)
  - [Why use PseudoCode?](#why-use-pseudocode)
  - [How do I write PseudoCode?](#how-do-i-write-pseudocode)
  - [Examples](#examples)
  - [Critical Thinking Exercise](#critical-thinking-exercise)

/~

# PseudoCode

<figure>
 <img src="https://imgs.xkcd.com/comics/settling_2x.png" alt="" style="width: 60%;height: auto;">
</figure>

## What is PseudoCode?

_... and why are there so many?_

<figure>
 <img src="images/ps_code1.png" alt="" style="width: 40%;height: auto;">
</figure>

<figure>
 <img src="images/ps_code2.png" alt="" style="width: 100%;height: auto;">
</figure>

<figure>
 <img src="images/ps_code3.png" alt="" style="width: 100%;height: auto;">
</figure>

- Pseudocode is a way to write out the steps of an algorithm in a way that is understandable to humans.
- Pseudo = fake
- Code = code
- It is not code (not a programming language)

## Why use PseudoCode?

- Prep for coding
  - Think through the steps
  - Identify potential problems
  - Present to other devs
- Demonstrate algorithm to non-devs
  - Clients
  - Managers
  - Other stakeholders

## How do I write PseudoCode?

- There is no formal way.
- _\*Your textbook claims there is - this is incorrect._

**Generally:**

- Use a combination of English and code-like syntax.
- Start with "Start" or "Begin"
- End with "End"
- Indent the body of the algorithm
- Use indentation to show hierarchy for nested statements
- Use capitalization and / or boldface for keywords
- Use a consistent style
- Use comments (outside of the algorith) to explain if more context is needed

## Examples

_See how day will be_

```
START
    Wake up
    Get out of bed
    IF you are on the right side of the bed
        Have a good day
    ELSE
        Have a bad day
    END IF
END
```

_Eat whole bag of cookies_

```
START
    SET eaten = 0
    open bag of cookies

    WHILE there are cookies in the bag
        eat cookie
        SET eaten = eaten + 1
    END WHILE

    IF eaten > 10
        regret
    ELSE
        be satisfied
    END IF
END
```

## Critical Thinking Exercise

~.focusContent.exercise

**Problem:** Print even integers between 0 and 4 (inclusive)

How many algorithms can we come up with do this?

PseudoCode them as we go.

/~
