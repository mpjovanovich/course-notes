---
title: Configuration Management
course: SDEV265
---

- [Configuration Management](#configuration-management)
  - [Versioning](#versioning)
- [Source Control](#source-control)

# Configuration Management

## Versioning

Applications are often composed of multiple components that are developed independently.

When another package is used in a project, it is called a **dependency**.

Versioning becomes especially important when using a dependency from a **third-party** (someone else).

### Semantic Versioning

**Semanting Versioning** is a scheme that is used to communicate the changes in a package.

A version number is a three-part number: `MAJOR.MINOR.PATCH`

- `MAJOR`: Breaking changes
- `MINOR`: New features
- `PATCH`: Bug fixes

See: [Semantic Versioning](https://semver.org/)

~.focusContent.example

Let's see what Mozilla has bee up to lately:

[Firefox Release Notes](https://www.mozilla.org/en-US/firefox/releases/)

/~

~.focusContent.example

**Case Study: Our Course Notes**

The course notes for this course are compiled from markdown source files. I use a tool called `dotmark` to add additional functionality to markdown compiliation process.

This tool is **decoupled** from the course notes - it is an independent application in itself.

- The `dotmark` tool is a node **package** that is published on npm

  - [dotmark](https://www.npmjs.com/package/@mpjovanovich/dotmark)

- The course notes website compiler has a **dependency** on the `dotmark` package
  - [Course Notes Repository](https://github.com/mpjovanovich/course-notes)
  - See the `package.json` file

If I were to make breaking API changes to the `dotmark` package, my course notes would continue to work - but only until I update the `dotmark` package in my project.

/~
