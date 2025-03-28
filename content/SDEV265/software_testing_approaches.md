---
title: Software Testing Approaches
course: SDEV265
---

~.toc

- [Software Testing Approaches](#software-testing-approaches)
  - [Black-box vs white-box testing](#black-box-vs-white-box-testing)
  - [Test-Driven-Development (TDD)](#test-driven-development-tdd)
  - [Behavior-Driven-Development (BDD)](#behavior-driven-development-bdd)

/~

# Software Testing Approaches

## Black-box vs white-box testing

<figure>
    <span>
        <img src="https://www.boardinfinity.com/blog/content/images/2023/04/Copy-of-Copy-of-Copy-of-Copy-of-Untitled-Design.png" style="width: 100%;height: auto;">
    </span>
</figure>

**Black-box Testing:**

- Tester (human or machine) has no knowledge of internal code structure
- Tests based on requirements and specifications
- Focus on inputs and expected outputs
- Examples: functional testing, acceptance testing

**White-box Testing:**

- Tester has knowledge of internal code structure
- Tests based on code coverage and paths
- Focus on internal logic and code paths
- Examples: unit testing, code coverage analysis

~.focusContent.exercise

**Happy Paths, Edge Cases, and Error Handling**

As a novice developer, it may be difficult to learn formal unit testing and its associated tools. This doesn't mean that you can't test your code!

As the developer, you can see the paths of execution that the code might take and identify the edge cases.

Each time you introduce a new logical branch, you should at minimum perform a manual test to ensure that the branch produces a sensible result. Once you start to become more confident in your code, you can start to save your tests, and even write some automated tests.

When testing you want to consider:

- **Happy paths** - The normal, expected behavior of the code.
- **Edge cases** - The code's behavior at the boundaries of the input space.
- **Error handling** - The code's behavior when it encounters errors.

Let's look at an example:

```python
if age >= 18:
    return "Can vote"
else:
    return "Cannot vote"
```

What are the happy paths, edge cases, and error conditions that we might check for in this code?

/~

## Test-Driven-Development (TDD)

Typically applied to low level system behavior.

- Development methodology where tests are written before code
- Helps ensure code meets requirements
- Promotes better design and maintainable code

~.focusContent.note

When writing the test we follow the pattern of:

- **Red** - Write a test that fails before implementing the code.
- **Green** - Write the code to make the test pass.
- **Refactor** - Refactor the code to make it better.

/~

## Behavior-Driven-Development (BDD)

Typically applied to high level system behavior.

- Extension of TDD focusing on business value provided by the system
- Collaboration between the people building the system and the people who will use the system
- Tests written in natural language
- Focuses on system behavior rather than implementation

~.focusContent.lookout

**Imperative vs Declarative**

- **Imperative:** How to do something
- **Declarative:** What something should do

In BDD, we use the declarative style to describe the behavior of the system.

_Bad example (Imperative):_

```gherkin
Feature: Subscribers see different articles based on their subscription level

Scenario: Free subscribers see only the free articles
  Given users with a free subscription can access "FreeArticle1" but not "PaidArticle1"
  When I type "freeFrieda@example.com" in the email field
  And I type "validPassword123" in the password field
  And I press the "Submit" button
  Then I see "FreeArticle1" on the home page
  And I do not see "PaidArticle1" on the home page

Scenario: Subscriber with a paid subscription can access "FreeArticle1" and "PaidArticle1"
  Given I am on the login page
  When I type "paidPattya@example.com" in the email field
  And I type "validPassword123" in the password field
  And I press the "Submit" button
  Then I see "FreeArticle1" and "PaidArticle1" on the home page
```

_Good example (Declarative):_

```gherkin
Feature: Subscribers see different articles based on their subscription level

Scenario: Free subscribers see only the free articles
  Given Free Frieda has a free subscription
  When Free Frieda logs in with her valid credentials
  Then she sees a Free article

Scenario: Subscriber with a paid subscription can access both free and paid articles
  Given Paid Patty has a basic-level paid subscription
  When Paid Patty logs in with her valid credentials
  Then she sees a Free article and a Paid article
```

/~
