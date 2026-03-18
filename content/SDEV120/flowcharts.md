---
title: Flowcharts
course: SDEV120
---

~.toc

- [Flowcharts](#flowcharts)
  - [Flowchart Symbols](#flowchart-symbols)
    - [Terminator](#terminator)
    - [Flow Arrow](#flow-arrow)
    - [Process](#process)
    - [Decision](#decision)
    - [Input / Output](#input--output)
    - [Data Store](#data-store)
  - [Example](#example)

/~

# Flowcharts

<figure>
  <img src="https://imgs.xkcd.com/comics/flow_charts.png" alt="" style="width: 100%;height: auto;">
</figure>

A flowchart is a visual representation of a process.

Flowchart symbols are standardized, the way the text is written is not.

## Flowchart Symbols

### Terminator

<figure>
 <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/flowchart/discovery/flowchart-symbols-01.svg" alt="" style="width: 60%;height: auto;">
</figure>

- Oval or rounded rectangle.
- Indicates the start or end of a process.

### Flow Arrow

<figure>
 <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/flowchart/discovery/flowchart-symbols-06.svg" alt="" style="width: 60%;height: auto;">
</figure>

- Arrow connecting two symbols.
- Indicates the flow of the process.

### Process

<figure>
 <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/flowchart/discovery/flowchart-symbols-02.svg" alt="" style="width: 60%;height: auto;">
</figure>

- Rectangle.
- Represents a process, action, or operation.
- Also represents assignment of a value.
- Typically contains a verb.
- Examples:
  - "Calculate total"
  - "Print invoice"
  - "Add new customer"
  - "Set balance = 0"
  - "balance = 0"
  - "balance := 0"

### Decision

<figure>
 <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/flowchart/discovery/flowchart-symbols-11.svg" alt="" style="width: 60%;height: auto;">
</figure>

- Represents a decision point.
- Branches to different parts of the flowchart based on a condition.
- Branches are labeled
  - "Yes" or "No"
  - "True" or "False"
- Possible ways to express a decision:
  - "Is the customer a member?"
  - "Customer is member?"
  - "Is the balance over $1000?"
  - "Balance > $1000?"

### Input / Output

<figure>
 <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/flowchart/discovery/flowchart-symbols-04.svg" alt="" style="width: 60%;height: auto;">
</figure>

- Represents input or output.
- May have arrow pointing to or from the symbol.
  - Arrow connecting on the left side is input.
  - Arrow stemming from the right side is output.
- Input can be a variable assignment.

_Input Example:_

- "input customer name"
- "enter customer name"
- "-> customer name"
- "customer name"

_Output Example:_

- "print total"
- "display total"
- "output total"

### Data Store

<figure>
 <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/flowchart/discovery/flowchart-symbols-05.svg" alt="" style="width: 60%;height: auto;">
</figure>

- Cylinder
- Represents a data store
  - Database
  - File

## Examples and Exercises

~.focusContent.demo

_Determine if a number is even or odd and print the result_

...

/~

~.focusContent.demo

_Print every other number from 2-10 (2, 4, 6, 8, 10)_

...

/~

~.focusContent.exercise

_Flowchart linear search algorithm_

We will do this together using [draw.io](https://draw.io) for the assignment today.

```

START
    // Get the inputs
    // In a realistic example, we may have the list coming from a file or database,
    // and the user entering the target value.
    GET list
    GET target

    // current_index represents the "spot" within the list that we are currently checking
    SET current_index = 1
    // Start by assuming the target is not found
    SET found = false

    WHILE current_index <= length of list:
        IF the item at the current index is the target:
            SET found = true
        END IF

        // Move to the next item in the list
        ADD 1 to current_index
    END WHILE

    // Output the result
    IF found is true:
        PRINT "Found at index", current_index
    ELSE:
        PRINT "Not found"
    END IF
END
```

/~

~.focusContent.demo

_Flowchart binary search algorithm_

Instructor challenge... only if time.

/~
