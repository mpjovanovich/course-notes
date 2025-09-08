---
title: Prompt Engineering
course: INFM109
---

~.toc

- [Prompt Engineering](#prompt-engineering)
  - [Why Prompts Matter](#why-prompts-matter)
  - [Basic Techniques](#basic-techniques)
    - [Start a New Chat for New Tasks](#start-a-new-chat-for-new-tasks)
    - [Ask to Reflect on Previous Responses](#ask-to-reflect-on-previous-responses)
    - [Set the Role or Context](#set-the-role-or-context)
    - [Specify the Output Format](#specify-the-output-format)
    - [Use Examples](#use-examples)
    - [Request Step-by-Step Reasoning](#request-step-by-step-reasoning)
    - [Break Large Tasks into Pieces](#break-large-tasks-into-pieces)
    - [Prompt Refinement](#prompt-refinement)

/~

# Prompt Engineering

**Prompt Engineering** is the skill of crafting effective instructions for LLMs to get the best possible responses. Since LLMs predict based on patterns, how you ask matters enormously.

## Why Prompts Matter

LLMs generate responses based on probability distributions learned from training data. The exact wording of your prompt influences which patterns the model draws from.

## Basic Techniques

### Start a New Chat for New Tasks

Each chat is its own context window. Don't just use one huge chat for all of your tasks.

Start a new chat when:

- Switching topics
- The current chat is getting too long
- You want to clear the context (e.g. you're getting halucinations or bad results)

### Ask to Reflect on Previous Responses

If something looks wrong or is not working, ask the LLM to reflect on its previous responses. It will often notice that it is not following the given instructions, or that it has provided faulty information.

```
Please review your previous response. Are you confident about the information you provided?
```

### Set the Role or Context

LLMs are trained to be helpful to the _average of all users_. If no context is provided, they will default to this behavior.

Give the LLM a specific perspective or expertise level.

- Tell it which audience you are addressing
- Tell it what assumptions it can make
- Optionally, give it style preferences

```
- "I'm a first year college student taking an introductory course in software development..."
- "Suggest ways to modify the language of this document to be more business friendly for a business audience unfamiliar with technical terms..."
- "Please edit the following email. The person reading this message is very busy and needs the important details presented clearly and concisely: ..."
```

~.focusContent.example

**Prompting: Targeting an Audience**:

Let's see how targeting an audience can affect the response.

_Example 1)_

```
Explain photosynthesis to a 3rd grade student. Relate it to how plants are alive, just like people.
```

_Example 2)_

```
Explain photosynthesis to a 10th grade biology student using simple but scientifically accurate terms. Include analogies where appropriate, but avoid use of childish analogies.
```

/~

### Specify the Output Format

Tell the LLM exactly how you want the response structured.

~.focusContent.example

**Prompting: Specifying Output Format**

_Example 1)_

```
Create a Q&A format study guide in markdown format for the following notes page: https://mpjovanovich.github.io/course-notes/INFM109/hardware.html

Make sure to include questions for all important vocabulary terms and the "takeaways" sections.
```

_Example 2)_

```
Create a table that shows how to print basic output using five major programming languages.
```

_Example 3)_

```
Create a Mermaid timeline diagram that shows major milestones in the evolution of the Internet.
```

/~

~.focusContent.exercise

**Check-In: Creating an AI Artifact**

Using [Claude](https://claude.ai/): Create a markdown document that summarizes how AI is changing different fields within the tech industry. It should show three domains, each with three bullet points and a summary statement. Upload the document to the assignment.

/~

### Use Examples

Show the LLM what you want by providing examples in your prompt:

~.focusContent.example

**Prompting: Specifying Output Format**

_Example 1: Summarizing Emails)_

```
I need to extract key information from customer feedback emails. It is important for me to know whether there are unresolved issues that the customer is experiencing. Please label each email as either Resolved, Unresolved, or Unknown.

Here are some examples:

Email:
  "Hi, I love your product but the shipping was really slow. It took 2 weeks to arrive."
Label:
  Resolved

Email:
  "The app crashed three times yesterday. Very frustrating experience."
Label:
  Unresolved

Email:
  "Great customer service! Sarah helped me resolve my issue quickly."
Label:
  Resolved

Now label this email:
  "I've been using your software for 6 months now. The interface is intuitive but I wish there were more customization options."
```

_Example 2: Creating a Canvas Quiz)_

Our course software can create a quiz from a file, but that file must be in a specific format. Let's see an example of how to use the LLM to create a multiple choice Canvas quiz based on some uploaded text.

Let's try pasting our notes from the hardware module: https://mpjovanovich.github.io/course-notes/INFM109/hardware.html

```
The user will upload a file containing text from a textbook. You are to read the file and create multiple choice questions based on the text. Do not produce any code. There should be between 15 and 30 questions overall. Questions should focus on the most relevant and practical points in the readings. For each question, come up with one correct answer and three plausibly false answers. Do not be tricky - adjust difficulty to be appropriate for first year college students. You will fill out a template in CSV file format, with each question as follows:

MC,,1,[Question Text],1,[correct answer],[incorrect answer],[incorrect answer],[incorrect answer]

Where text in brackets is to be substituted. The output must be in CSV format, so you may not use commas in the answers. Do not put extra line breaks between questions; there should be one question per line. When you are finished, review your work and address any issues you see. You may then simply notify the user that you are finished.
```

/~

### Request Step-by-Step Reasoning

For complex problems, ask the LLM to show its work. It will often be more accurate this way:

~.focusContent.example

**Prompting: Step-by-Step Reasoning**

From: https://mathematicaldonuts.substack.com/p/which-box-has-the-car

```
Please solve the following riddle. Provide concise step-by-step reasoning for your solution:

There are 3 boxes, exactly one of which has a car. You can keep the car if you pick the correct box!

On each box, there is a statement, exactly one of which is true.

Box 1: The car is in this box.
Box 2: The car is not in this box.
Box 3: The car is not in box 1.

Which box has the car?
```

/~

### Break Large Tasks into Pieces

LLMs will often start creating a long response, assuming they know exactly what you want. This wastes time, money, and energy.

If you are expecting a long response:

- Break the task into smaller pieces
- Tell the LLM to check its understanding before proceeding

~.focusContent.example

**Prompting: Breaking up a Task**

```
I need to create a SQL script to initialize a sqlite table and some data. I would like you to write a create table script (without data) for a "flowers" table, focusing on flowers that might be found in North America. Before we do so, please show me which columns you plan to use. We will refine from there.
```

/~

### Prompt Refinement

If you are working on a non-trivial task, or one that you may repeat, _save your prompt to the side_ (e.g. in a text file).

As you proceed:

- Refine the prompt if needed.
- Ask the LLM to help you refine your prompt if you're unsure!

```
I'm getting ready to prompt an LLM to do a complex task. Can you please suggest edits to this prompt that might improve the result?: ...[your prompt]...
```

**Iterative Process**:

1. Start with a basic prompt
2. Evaluate the response
3. Identify what's missing or incorrect
4. Refine the prompt
5. Test again **_in a new chat_**
