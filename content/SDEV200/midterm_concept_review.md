---
title: Mid-term Review of Concepts
course: SDEV200
---

~.toc

- [Mid-term Review of Concepts](#mid-term-review-of-concepts)
  - [Code Formatting](#code-formatting)
  - [Application Structure](#application-structure)
  - [Classes and Program Flow](#classes-and-program-flow)
  - [Development Tests](#development-tests)
  - [Best Practices by Example](#best-practices-by-example)
  - [Closing Announcements](#closing-announcements)

/~

# Mid-term Review of Concepts

## Code Formatting

Review: How to autoformat code

## Application Structure

- Scripts vs applications
- Any non-trivial application should be in its own directory

## Classes and Program Flow

- Relationship between Main and supporting classes

  - Classes:
    - Encapsulate some logic that "goes together"
    - Bundled units of code to handle related functionality.
    - Some are more object-like. Others are "utility classes".
  - Main class = program flow of execution logic. Used only to start the program.

## Development Tests

- We're not using unit tests formally, but we should still be writing development tests.
- Writing small functions makes testing easier.
- We then write functions to test other functions.
- At minimum, make sure outcomes are as expected for:
  - Expected results of logical paths through code
  - Error handling

~.focusContent.example

```java
// Main function to test
public class GradeCalculator {
    public static String getLetterGrade(double score) {
        if (score < 0 || score > 100) {
            throw new IllegalArgumentException("Score must be between 0 and 100");
        }

        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }

    // Development tests
    public static void testGradeCalculator() {
        // Test normal cases
        System.out.println("Testing normal grades...");
        System.out.println("95 should be A: " + getLetterGrade(95));
        System.out.println("85 should be B: " + getLetterGrade(85));
        System.out.println("75 should be C: " + getLetterGrade(75));
        System.out.println("65 should be D: " + getLetterGrade(65));
        System.out.println("55 should be F: " + getLetterGrade(55));

        // Test boundary cases
        System.out.println("\nTesting boundary cases...");
        System.out.println("100 should be A: " + getLetterGrade(100));
        System.out.println("0 should be F: " + getLetterGrade(0));
        System.out.println("90 should be A: " + getLetterGrade(90));

        // Test error cases
        System.out.println("\nTesting error cases...");
        try {
            getLetterGrade(-1);
            System.out.println("ERROR: Should have thrown exception for -1");
        } catch (IllegalArgumentException e) {
            System.out.println("Correctly caught negative number");
        }

        try {
            getLetterGrade(101);
            System.out.println("ERROR: Should have thrown exception for 101");
        } catch (IllegalArgumentException e) {
            System.out.println("Correctly caught number over 100");
        }
    }
}
```

/~

## Best Practices by Example

- Walkthrough sln to book exercise 20.11

## Closing Announcements

- Allow resubmits for M04 and forward assignments through Friday night.

- Review "Finalized" final project requirements
  - How to add collaborator on GitHub
