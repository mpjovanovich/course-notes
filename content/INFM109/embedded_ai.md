---
title: Embedded AI
course: INFM109
---

~.toc

- [Embedded AI](#embedded-ai)
  - [Computer Access and Tool Integration](#computer-access-and-tool-integration)
  - [Best Practices for Tool Use](#best-practices-for-tool-use)

/~

# Embedded AI

## Computer Access and Tool Integration

**File Access**

- Read and analyze documents you upload
- Create and modify files
- Work with spreadsheets, PDFs, images, and other media formats

AI is being used more often to produce **artifacts** like code, documents, and presentations.

Additionally, it is being used to **control** other applications and services.

~.focusContent.demo

**Using an AI Harness: Part I**

An LLM by itself only produces text — it can't touch your computer. A **harness** is a tool (e.g. Claude Code) that gives the model the ability to execute actions on a computer: reading files, writing files, running commands.

Let's automate a simple task to create ten folders using a given convention:

```
Create ten folders named "week-01" through "week-10" in the current directory.
```

Notice that the harness stops and asks for **permission** before creating anything. That confirmation step — not the model deciding to behave — is what keeps a hands-on AI tool safe to use.

/~

~.focusContent.demo

**Using Skills to Automate Repeatable Tasks**

An AI **skill** is a saved description of a task that can be used by agents. This keeps the user from needing to write out context related to the task each time it is run.

Let's see an example. I've created a skill that I use when building lecture notes for the course website. I provide the agent with a URL to an image and it will:

- Download an image to the directory that I've specified
- Replace my placeholder text, `<!-- img: alt text -->`, with an HTML image tag
- Add alt text to the html image
- Add styles that I've specified to the image

/~

**Office Suite Software**

Office suite software (Word, Google Docs, Excel, etc.) increasingly ships with AI features that can read the file you're currently working in as context, without you copying and pasting anything in yourself.

This is the same weights-vs-context idea from [Prompting and Context](prompting_and_context.html#context-what-the-model-can-and-cant-know). The AI isn't learning your document, it's just being handed it as context for each request.

**Web Integration**

- Search the internet for current information
- Use multiple sources to compile a summary
- Use user-provided websites as context

~.focusContent.example

**Using Current Data to Produce Artifacts**

```
Given the following website:

- https://www.visualcapitalist.com/which-countries-trust-self-driving-cars-the-most/

Please translate the table in the "Data & Discussion" section into a simple but interactive web page that I can download. It does not have to be self contained; you may use CDN content if you choose to use libraries.
```

/~

**Code Execution**:

- Write and run programs
- Perform complex calculations
- Create data visualizations
- Debug and test code

~.focusContent.example

**Editing Code with AI Tools**

Let's demo some code editing with AI tools:

https://github.com/mpjovanovich/ai-html-sandbox.git

We will use AI within an IDE (code editing software) to have AI do a job that was previously tedious and slow - converting data from one format to another.

/~

## Best Practices for Tool Use

**Diligence and Awareness**:

- Always review AI-generated content before using it
- Always know what information the AI system has access to
- Always know what the AI system is capable of doing (e.g. executing programs)

**Verification Steps**:

- Check sources and citations independently
- Validate calculations and analysis
- Test generated code in safe environments before production use

**Privacy Protection**:

- Make sure provided information does not contain sensitive personal information
- Be cautious with proprietary business data
- Understand what data the AI system retains

**Human Oversight**:

- **_Maintain final decision-making authority_**
- Don't blindly follow AI recommendations
- Use AI as a tool to augment, not replace, human judgment. Critical thinking skills are weakened when not exercised.
