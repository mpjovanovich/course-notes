---
title: Agile Planning
course: SDEV265
---

~.toc

- [Agile Planning](#agile-planning)
  - [User Stories](#user-stories)
    - [Roles](#roles)
    - [Actions / Outcomes](#actions--outcomes)
    - [Examples](#examples)
  - [Tasks](#tasks)
    - [Examples](#examples-1)
    - [Common Initial Development Tasks](#common-initial-development-tasks)
  - [User Story vs Use Case](#user-story-vs-use-case)
  - [Final Notes](#final-notes)

/~

# Agile Planning

## User Stories

**User stories** are a way to capture requirements in a way that is easy to understand and implement.

They are typically written from the perspective of the user, and are focused on the value they will receive from the feature:

> As a [role], I want to [action] so that [outcome].

User stories form a nice communication tool between the client and the development team, because they are focused on the value the feature will provide rather than the implementation details.

### Roles

Identifing roles in the story helps us understand the **domain** of the system. We may have multiple types or categories of users. By breaking down which type of user is performing the action, we can better construct our implementation.

Example Roles:

- User
- Admin
- Vendor
- Inventory Manager
- Account Manager

### Actions / Outcomes

The action is the verb of the user story, and the outcome is the benefit they will receive from the action.

We want these to be as simple and concise as possible, while still preserving the intent of the story.

### Examples

Some examples:

- As a user, I want to be able to sign up for an account so that I can use the service.
- As a vendor, I want to be able to enter information for a new product so that I can add it to the catalog.
- As an inventory manager, I want to update monthly stock capacity so that I limit warehouse space usage.

## Tasks

After gathering the user stories, we can break them down into tasks that are more manageable. These are what's actually used to track progress and work.

Tasks should have the following characteristics:

- **Small:** They should be small and focused, ideally no more than a day or two of work.
- **Self-contained:** They should be complete, such that they can be worked on by a single developer without depending on other tasks.
- **Testable:** They should have well-defined success criteria.

### Examples

_Developer Focused Task_

~.focusContent.example

**Title:** Design User Authentication Database Schema

**Description:**

Create a complete database schema design for user authentication, including table structures, relationships, and constraints.

**Success Criteria:**

- Entity-relationship diagram created
- Field names, types, and constraints defined
- Primary/foreign key relationships specified
- Indexing strategy documented
- Schema reviewed by team lead

**Implementation Notes:**

- Consider password reset functionality
- Plan for future OAuth integration
- Document rationale for UUID vs sequential IDs

/~

_Product Focused Task_

~.focusContent.example

**Title:** User Password Reset via Email Link

**Description:**

Allow users who have forgotten their password to securely reset it through an email verification process.

**Success Criteria:**

- User can request password reset from login screen
- Temporary reset link sent to user's registered email
- Link expires after 1 hour
- Password requirements enforced on reset
- User receives confirmation after successful reset

**Implementation Notes:**

- Use existing email service integration
- Rate limit reset requests to prevent abuse
- Log all reset attempts for security auditing

/~

### Common Initial Development Tasks

At the start of a new project, many tasks will be focused on how the development team will get the project off the ground. These don't fit nicely into user stories, but tracking them is essential to the project's success.

These tasks are often focused on:

- Technology proof of concepts
- Project scaffolding / initial codebase setup
- Database setup, configuration, initialization, schema design
- Authentication
- User interface design
- Build pipeline configuration

Planning and implementation may be split into separate tasks.

## User Story vs Use Case

User stories and use cases are similar, but differ in their focus:

- User stories focus on the value the feature will provide to the user.
- Use cases focus on the sequence of steps (interactions) required to complete a task.

~.focusContent.example

**User Story:**

"As a student, I want to submit my homework online so that I can track my work progress electronically."

**Use Case:**

1. Student logs into the system
2. Student selects their class
3. Student uploads their homework file
4. System confirms the upload was successful

/~

## Final Notes

Having reached this point, we should take another look at the [Agile Manifesto](https://agilemanifesto.org/), which reminds us:

"People and interactions over processes and tools".

If we find that our processes and tools are getting in the way of our people, we should consider whether we are using the right tools for the job. This includes the Agile process itself.
