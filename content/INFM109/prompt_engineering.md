---
title: Prompt Engineering
course: INFM109
---

- [Prompt Engineering](#prompt-engineering)
  - [Why Prompts Matter](#why-prompts-matter)
  - [Basic Techniques](#basic-techniques)
    - [Be Specific and Clear](#be-specific-and-clear)
    - [Specify the Format](#specify-the-format)
    - [Use Examples](#use-examples)
    - [Set the Role or Context](#set-the-role-or-context)
    - [Request Step-by-Step Reasoning](#request-step-by-step-reasoning)
    - [Check for Understanding](#check-for-understanding)
    - [Ask to Reflect on Previous Responses](#ask-to-reflect-on-previous-responses)
    - [Start a new Chat](#start-a-new-chat)
    - [Prompt Refinement](#prompt-refinement)
  - [Best Practices](#best-practices)
    - [Do:](#do)
    - [Don't:](#dont)

# Prompt Engineering

**Prompt Engineering** is the skill of crafting effective instructions for LLMs to get the best possible responses. Since LLMs predict based on patterns, how you ask matters enormously.

## Why Prompts Matter

LLMs generate responses based on probability distributions learned from training data. The exact wording of your prompt influences which patterns the model draws from.

**Example**: Compare these prompts and their likely outcomes:

**Vague Prompt**: "Tell me about dogs"

- Could result in: general information, specific breeds, care tips, history, etc.

**Specific Prompt**: "Write a 200-word explanation of why dogs make good family pets, focusing on their loyalty and protective instincts"

- More likely to get exactly what you want

**Key Insight**: LLMs are cooperative but literal. They try to complete your text in the most probable way based on your prompt.

## Basic Techniques

### Be Specific and Clear

**Instead of**: "Help me with my email"
**Try**: "Help me write a professional email to my professor requesting a meeting to discuss my grade on the midterm exam"

**Instead of**: "Explain photosynthesis"  
**Try**: "Explain photosynthesis to a 10th grade biology student using simple terms and everyday analogies"

### Specify the Format

Tell the LLM exactly how you want the response structured:

**Example Prompt**:

```
Create a study guide for the following notes page: https://mpjovanovich.github.io/course-notes/INFM109/hardware.html

Make sure to include questions for all important vocabulary terms and the "takeaways" sections.
```

```
Create a table that shows how to print output using five major programming languages.
```

### Use Examples

Show the LLM what you want by providing examples in your prompt:

**Example Prompt**:

```
Convert these sentences to questions:

Statement: The library closes at 9 PM.
Question: What time does the library close?

Statement: She studied computer science.
Question: What did she study?

Now convert this statement: The meeting is scheduled for Tuesday.
```

### Set the Role or Context

Give the LLM a specific perspective or expertise level - tell it what it is and/or who it is talking to:

**Examples**:

```
- "I'm a first year college student taking an introductory course in software development..."
- "You are writing for a business audience unfamiliar with technical terms..."
- "Please edit the following email. The person reading this message is very busy and needs the important details presented clearly and concisely: ..."
```

### Request Step-by-Step Reasoning

For complex problems, ask the LLM to show its work:

**Example**:

```
Solve this word problem step by step:
Sarah has $50. She buys 3 books for $12 each and 2 pens for $3 each. How much money does she have left?

Please show each calculation step.
```

### Check for Understanding

LLMs will often start creating a long response, assuming they know exactly what you want. Tell the LLM to check its understanding at each step before proceeding if you are expecting a long response.

**Example**:

```
Please create a study guide covering the following topics: ...

Confirm that you understand the instructions and output format before creating the document.
```

### Ask to Reflect on Previous Responses

If something looks wrong or is not working, ask the LLM to reflect on its previous responses. It will often notice that it is not following the given instructions, or that it has provided faulty information.

### Start a new Chat

Each chat is its own context window. Start a new chat when:

- Switching topics
- The current chat is getting too long
- You want to clear the context (e.g. you're getting halucinations or bad results)

### Prompt Refinement

If you are working on a non-trivial task, try saving your prompt to the side (e.g. in a text file) and refining it if needed. You may even ask the LLM to help you refine your prompt.

**Iterative Process**:

1. Start with a basic prompt
2. Evaluate the response
3. Identify what's missing or incorrect
4. Refine the prompt
5. Test again (possibly in a new chat)

## Best Practices

### Do:

- Be specific about what you want
- Provide context and constraints
- Use examples when helpful
- Break complex tasks into steps
- Iterate and refine your prompts

### Don't:

- Assume the LLM knows unstated context
- Use ambiguous language
- Ask for information beyond the knowledge cutoff
- Expect perfect accuracy without verification
- Forget that LLMs can hallucinate
