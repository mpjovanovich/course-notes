---
title: SDLC
course: SDEV120
---

~.schedule

- [Software Development Life Cycle (SDLC)](#software-development-life-cycle-sdlc)
  - [Trends](#trends)
  - [Paradigms](#paradigms)
    - [Linear](#linear)
      - [Summary](#summary)
      - [Methodologies](#methodologies)
    - [Iterative](#iterative)
      - [Summary](#summary-1)
      - [Methodologies](#methodologies-1)
    - [Continuous](#continuous)
      - [Summary](#summary-2)
      - [Methodologies](#methodologies-2)

/~

# Software Development Life Cycle (SDLC)

~~fig(80){images/software_practices_venn.png}

Most software development processes are a mix of established practices.

**Software Development Lifecycle (SDLC)** is an umbrella term for organizing these practices into methodologies.

Which proccess is best depends on the project.

## Trends

~~fig(60){images/2022_methodologies_stats.png}

_Caution advised - good stats are hard to come by._

## Paradigms

### Linear

Focuses on planning and documentation.

~~fig{https://symphony-software.com/wp-content/uploads/2022/02/SDLC-waterfall-model-1.png}

#### Summary

**Principles**

- Sequential process. Do one step by one team, then pass to the next team.
- Document everything.

**Works well when:**

- Requirements are well understood.
- Documentation is important (e.g. regulatory requirements, audit trail, high safety constraints).

**Usage Examples:**

- Medical devices
- Aerospace
- Defense
- Financial services

**Advantages:**

- High predictability.
- High accountability.
- High documentation.

**Disadvantages:**

- Decoupled teams leads to:
  - Silos (lack of communication)
  - Handoff delays
- High risk of failure in late stages due to:
  - Lack of feedback.
  - Possible changes in requirements.

#### Methodologies

**Waterfall** is by far the most common linear methodology.

### Iterative

Focuses on development in short cycles and flexibility.

~~fig{https://bitbytesoft.com/wp-content/uploads/2022/01/Agile-software-Development-Life-Cycle-1-1024x356.jpg}

#### Summary

**Principles**

- Develop in short cycles (iterations).
- Make changes based on feedback.

**Works well when:**

- Requirements are flexible.
- Close relationship between developers and stakeholders.
- Teams are small and can be cross-functional.

**Usage Examples:**

- Business software

**Advantages:**

- Application is available early in the process.
- Quick feedback from stakeholders.
- Changes fixed quickly due to short iterations.
- Can overlap lifecycle steps (e.g. one team can test previous iteration while developers work on the next).

**Disadvantages:**

- Less accountability.
- Less predictability.

#### Methodologies

**Agile** is the most common iterative methodology. It is also an umbrella term for many practices.

- **Scrum**
- **Kanban**

Others:

- **Lean**
- **Extreme Programming (XP)**

### Continuous

Extends on iterative development by focusing on rapid feedback loops and continuous integration and deployment.

~~fig{https://browserstack.wpenginepowered.com/wp-content/uploads/2023/02/DevOps-Lifecycle.jpg}

#### Summary

**Principles**

- Product is a living process.
- Rapid feedback loops.
- Continuous integration (CI)
- Continuous delivery (CD)

**Works well when:**

- Very large projects
- Multiple teams
- Multiple applications
- Multiple environments

**Usage Examples:**

- Large enterprise software
- Large scale distributed applications

**Advantages:**

- Built in focus on reliability and security
- Fast development, deploymentment, feedback
- Avoid lag where there is handoff between teams, e.g.:
  - Waiting for operations to deploy
  - Waiting for security to approve
  - Waiting for new requirements

**Disadvantages:**

- Higher overhead to start.
- Requires expertise to implement.
- Requires buy-in from all teams.
- May not be appropriate for small projects / teams / businesses.

#### Methodologies

**DevOps** is a combination of development and operations.
**DevSecOps** is a combination of development, security, and operations. Brings focus to security throughout the process.

| Domain      | Activities                                        |
| ----------- | ------------------------------------------------- |
| Development | Design, develop, test                             |
| Operations  | Deploy, monitor, scale, maintain                  |
| Security    | Assess risk, penetration testing, threat modeling |

_\*Testing spans multiple domains._

~.focusContent.demo

GitHub Actions - build and deploy process.

- GitHub project: https://github.com/mpjovanovich/ivy_tech/tree/main/docs
- GitHub pages site: https://mpjovanovich.github.io/ivy_tech/
- Pages settings: https://github.com/mpjovanovich/ivy_tech/settings/pages
- Build history: https://github.com/mpjovanovich/ivy_tech/actions

Let's try breaking it by putting a typo on the theme for the \_config.yml file.

- New theme: https://github.com/pages-themes/architect

... could have avoided the break if there were tests in our CI/CD pipeline.

/~
