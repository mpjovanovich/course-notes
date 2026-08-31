---
title: Prompting and Context
course: INFM109
---

~.toc

- [Prompting and Context](#prompting-and-context)
  - [Why Prompts Matter](#why-prompts-matter)
  - [Context: What the Model Can and Can't Know](#context-what-the-model-can-and-cant-know)
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

# Prompting and Context

**Prompting** is the skill of crafting effective instructions for LLMs to get the best possible responses. Since LLMs predict based on patterns, how you ask matters significantly.

## Why Prompts Matter

LLMs generate responses based on probability distributions learned from training data. The exact wording of your prompt influences which patterns the model draws from.

## Context: What the Model Can and Can't Know

An LLM only "knows" two kinds of things:

- What got baked into its weights during training — general knowledge, up to its [knowledge cutoff](large_language_models.html#knowledge-cutoffs)
- Whatever you supply in the current [context window](large_language_models.html#context-window) — pasted documents, earlier messages in the chat, search results, tool output

Anything outside those two sources, the model simply cannot use. It isn't being forgetful or withholding — the information was never there for it to draw from in the first place.

~.focusContent.note

**The current trend: connecting models to live data**

Rather than retrain a model every time new information shows up, most AI tools now plug the model into external sources instead — a web search, a company's internal documents, or the file you're currently editing. The model isn't learning anything permanently; it's just being handed more context at the moment you ask. We'll see a concrete example of this in [Embedded AI](embedded_ai.html), where AI features built into everyday software read the document you're actively working in as context.

/~

## Basic Techniques

### Start a New Chat for New Tasks

Each chat is its own context window. Don't just use one huge chat for all of your tasks.

Start a new chat when:

- Switching topics
- The current chat is getting too long
- You want to clear the context (e.g. you're getting [hallucinations](large_language_models.html#llms-are-not-databases) or bad results)

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
Create a Q&A format study guide in markdown format for the following notes page. Make sure to include questions for all important vocabulary terms and the "takeaways" sections. Put it in a format that I can download: https://mpjovanovich.github.io/course-notes/INFM109/hardware.html
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

### Use Examples

Show the LLM a couple of examples of exactly the output you want, rather than describing it in words. This is often called "few-shot prompting," and it's frequently faster and more reliable than a long description.

```
Rewrite each product name in title case:

- "wireless bluetooth headphones" -> "Wireless Bluetooth Headphones"
- "usb-c charging cable" -> "USB-C Charging Cable"
- "portable phone charger" ->
```

### Request Step-by-Step Reasoning

Ask the LLM to reason through a problem before giving a final answer. This tends to catch mistakes on multi-step problems that a direct answer would miss.

```
Walk through this step by step before giving a final answer: A train leaves the station at 2:00pm traveling 60mph. A second train leaves the same station at 3:00pm traveling 90mph in the same direction. At what time does the second train catch up to the first?
```

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

If you are working on a non-trivial task, or one that you may repeat, _save your prompt_. This can be as simple as keeping it open in a text file, or you can use built in tools within the coding interface.

As you proceed:

- Refine the prompt if needed.
- _Ask the LLM to help you refine your prompt if you're unsure!_

```
I'm getting ready to prompt an LLM to do a complex task. Can you please suggest edits to this prompt that might improve the result?: ...[your prompt]...
```

Taking this preliminary step can catch issues early before a long session needs to be thrown out.

**Iterative Process**:

1. Start with a basic prompt
2. Evaluate the response
3. Identify what's missing or incorrect
4. Refine the prompt
5. Test again **_in a new chat_**, unless context from the current chat is needed.
