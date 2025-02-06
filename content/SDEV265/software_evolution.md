---
title: Software Evolution
course: SDEV265
---

~.toc

- [Software Evolution](#software-evolution)
  - [Legacy Systems](#legacy-systems)
  - [Refactoring](#refactoring)
  - [Technical Debt](#technical-debt)

/~

# Software Evolution

**Software evolution** is the process of developing software systems over time. This includes the maintenance and enhancement of software systems.

Requirements, technology, security, and other factors change over time, requiring software systems to evolve to meet new needs.

## Legacy Systems

**Legacy systems** are software systems that are outdated but still in use. Because the cost of working with these systems is high, they are typically maintained rather than enhanced. A legacy system may be maintained until it is no longer providing value worth the cost of maintenance.

Some challenges of legacy systems include:

- **Outdated Technology**: The software may be written in an old programming language or use outdated libraries.
- **Lack of Documentation**: The software may not have proper documentation, making it difficult to understand.
- **Lack of Expertise**: The original developers may no longer be available, making it difficult to maintain the software.
- **Lack of Skills**: The skills required to maintain the software may not be taught in modern education programs.

Maintenance of these (often neglected) systems is often viewed as "second-rate" work, and delegated to junior developers. This propagates the problem, as the systems are not maintained properly, leading to further issues.

~.focusContent.note

According to our text, there are over 200 billion lines of COBOL code in use today! COBOL was developed in the 1950s and is still used in many legacy systems, particularly in the financial industry.

/~

_Takeaway_:

Legacy systems are created through negligence. Let's not let our systems become legacy systems!

## Refactoring

Not all changes to software systems are enhancements. Sometimes, changes are made to improve the structure of the code without changing its functionality. This process is known as **refactoring**.

Much like a first draft of a paper is usually not the final draft, software systems should be refactored as they evolve.

Refactoring is done in order to:

- **Improve Code Quality**: Restructuring the code so that it is easier to read and maintain.
- **Improve Performance**: Optimize the code to run faster and use fewer resources.
- **Improve Resilience**: Better handle errors and edge cases.

Refactoring leads to faster development, fewer bugs, and more performant software.

## Technical Debt

...
