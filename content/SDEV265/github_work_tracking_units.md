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

**Purpose:** Define client focused requirements and business value. To be used for acceptance testing.

**GitHub Implementation:** Parent GitHub Issue with `type:story` label

**Content Structure:**

```markdown
## Story

As a [user role], I want [functionality or action] so that [business value].

## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3
```

**Characteristics:**

- Used for prioritization and work in progress tracking
- Contains acceptance criteria that may be used for stakeholder sign-off
- Stories may span sprints through their child tasks

### Attributes

**Assignee:** Person responsible for "owning" the story; knowing its progression status.

**Label**: story

**Status:** Backlog, In Progress, Completed

**Priority:** NA

**Level of Effort:** NA

**Sprint**: SYYYY.## (e.g. 20205.01); assigned via "milestone" field. Must be updated if a user story spans sprints.

## Tasks

**Purpose:** Define actionable development work items. These may be related to completing a user story or may be standalone bug fixes or action items.

**GitHub Implementation:** Child GitHub Issue with `type:task` label. If this is related to implementing a User Story it should be created as a sub-issue from within the parent user story issue.

**Content Structure:**

```markdown
# Task

[Brief description of the work to be done]
```

**Characteristics:**

- Can be standalone (no parent story) for bugs, refactoring, small changes
- Developer responsible for determining completion criteria

### Attributes

**Assignee:** Developers assigned to the task for implementation and review.

**Label**: task

**Status:** Backlog, In Progress, Ready for Review, Completed

**Priority:** Low, Medium, High

**Level of Effort:** Low, Medium, High

**Sprint**: SYYYY.## (e.g. 20205.01); assigned via "milestone" field
