---
title: Software Evolution
course: SDEV265
---

~.toc

- [Software Evolution](#software-evolution)
  - [Legacy Systems](#legacy-systems)
    - [Challenges of Legacy Systems](#challenges-of-legacy-systems)
    - [How does a System Become a Legacy System?](#how-does-a-system-become-a-legacy-system)
  - [Refactoring](#refactoring)
  - [Technical Debt](#technical-debt)
    - [Causes of Technical Debt](#causes-of-technical-debt)
    - [Is Quality Worth the Cost?](#is-quality-worth-the-cost)

/~

# Software Evolution

**Software evolution** is the process of developing software systems over time. This includes the maintenance and enhancement of software systems.

Requirements, technology, security, and other factors change over time, requiring software systems to evolve to meet new needs.

## Legacy Systems

**Legacy systems** are software systems that are outdated but still in use. Because the cost of working with these systems is high, they are typically maintained rather than enhanced. A legacy system may be maintained until it is no longer providing value worth the cost of maintenance.

### Challenges of Legacy Systems

Some challenges of legacy systems include:

- **Outdated Technology**: The software may be written in an old programming language or use outdated libraries.
- **Lack of Documentation**: The software may not have proper documentation, making it difficult to understand.
- **Lack of Expertise**: The original developers may no longer be available, making it difficult to maintain the software.
- **Lack of Skills**: The skills required to maintain the software may not be taught in modern education programs.

Maintenance of these (often neglected) systems is often viewed as "second-rate" work, and delegated to junior developers. This propagates the problem, as the systems are not maintained properly, leading to further issues.

### How does a System Become a Legacy System?

At a high level, it's usually due to technology or organizational changes. Some reasons a system may become legacy include:

1. Technological Advancements: Technology evolves rapidly, and systems that were state-of-the-art at one time can become outdated.
1. Business Requirements: Changing business needs and priorities can lead to systems becoming legacy.
1. Resource Constraints: Limited resources for continuous updates and maintenance can result in systems becoming legacy.
1. Regulatory and Compliance Requirements: Compliance with new regulations can render older systems obsolete.
1. Organizational Changes: Mergers, acquisitions, and restructuring can lead to legacy systems.

~.focusContent.note

According to our text, there are over 200 billion lines of COBOL code in use today! COBOL was developed in the 1950s and is still used in many legacy systems, particularly in the financial industry.

If it's not broke... don't fix it?

```cobol
**********************************************************
* COBLOAN                                                *
*                                                        *
* A simple subprogram that calculates payment amount     *
* for a loan.                                            *
*                                                        *
**********************************************************
  IDENTIFICATION DIVISION.
  PROGRAM-ID. COBLOAN.
  ENVIRONMENT DIVISION.
  DATA DIVISION.
  WORKING-STORAGE SECTION.
  01  FIELDS.
      05  INPUT-1           PIC X(26).
      05  PAYMENT           PIC S9(9)V99 USAGE COMP.
      05  PAYMENT-OUT       PIC $$$$,$$$,$$9.99 USAGE DISPLAY.
      05  LOAN-AMOUNT       PIC S9(7)V99 USAGE COMP.
      05  LOAN-AMOUNT-IN    PIC X(16).
```

/~

## Refactoring

Not all changes to software systems are enhancements. Sometimes, changes are made to improve the structure of the code without changing its functionality. This process is known as **refactoring**.

Much like a first draft of a paper is usually not the final draft, software systems should be refactored as they evolve.

Refactoring is done in order to:

- **Improve Code Quality**: Restructuring the code so that it is easier to read and maintain.
- **Improve Performance**: Optimize the code to run faster and use fewer resources.
- **Improve Resilience**: Better handle errors and edge cases.

Refactoring leads to faster development, fewer bugs, and more performant software.

## Technical Debt

**Technical debt** is the implied cost of additional rework caused by choosing an easy solution now instead of using a better approach that would take longer.

### Causes of Technical Debt

<iframe width="560" height="315" src="https://www.youtube.com/embed/1MBpK_PxEnU?si=N_2SIudbNo4c97jW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

They are the result of taking shortcuts in the development process, such as:

- **Not Refactoring**: Ignoring code quality issues.
- **Not Writing Tests**: Skipping writing tests to save time.
- **Not Following Best Practices**: Ignoring best practices to save time.
- **Not Addressing Security Issues**: Ignoring security issues to save time.
- ...

The debt compounds over time, because the longer it goes unaddressed, the more fragile the system becomes - until developers are afraid to change it.

### Is Quality Worth the Cost?

<figure>
 <img src="https://martinfowler.com/articles/is-quality-worth-cost/both.png" alt="" style="width: 80%;height: auto;">
</figure>

Some folk wisdom that applies here is "an ounce of prevention is worth a pound of cure." Bugs and structural issues are much less expensive to resolve early in the development process than they are later on.

~.focusContent.lookout

There is another end of the spectrum - **over-engineering**. This is when developers invest too much time in the search for a perfect solution. If a solution is a bit messy, but it's in a part of the app that's not likely to change, it may be better to leave it alone.

/~
