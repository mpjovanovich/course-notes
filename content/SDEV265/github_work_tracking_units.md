---
title: GitHub Tracking Units
course: SDEV265
---

~.toc

- [GitHub Tracking Units](#github-tracking-units)
  - [User Stories](#user-stories)
    - [Attributes](#attributes)
  - [Tasks](#tasks)
    - [Attributes](#attributes-1)

/~

# GitHub Tracking Units

## User Stories

**Purpose:** Define client focused requirements and business value

**GitHub Implementation:** Parent GitHub Issue with `type:story` label

**Content Structure:**

```markdown
## Story

As a [user role], I want [functionality or action] so that [business value].

## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Child Tasks

- [ ] #123 Task description
- [ ] #124 Task description
```

**Characteristics:**

- Used for prioritization and work in progress tracking
- Contains acceptance criteria that may be used for stakeholder sign-off
- Stories may span sprints through their child tasks

### Attributes

**Label**: story

**Status:** Backlog, In Progress, Completed

## Tasks

**Purpose:** Define actionable development work items

**GitHub Implementation:** Child GitHub Issue with `type:task` label

**Content Structure:**

```markdown
# Task: [Description]

[Brief description of the work to be done]

**Parent Story:** #123 (if applicable)
```

**Characteristics:**

- Can be standalone (no parent story) for bugs, refactoring, small changes
- Developer responsible for determining completion criteria

### Attributes

**Label**: task

**Status:** Backlog, In Progress, Ready for Review, Completed

**Priority:** Low, Medium, High

**Sprint**: sprint-YY-##
