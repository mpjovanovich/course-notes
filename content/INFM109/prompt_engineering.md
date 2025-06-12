---
title: Prompt Engineering
course: INFM109
---

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
Create a study guide for the American Civil War with the following format:
- 5 key dates with brief descriptions
- 3 major causes of the war
- 2 important consequences
- 5 vocabulary terms with definitions
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

Give the LLM a specific perspective or expertise level:

**Examples**:
- "You are a math tutor explaining algebra to a struggling student..."
- "As a professional chef, recommend three quick dinner recipes..."
- "You are writing for a business audience unfamiliar with technical terms..."

### Request Step-by-Step Reasoning

For complex problems, ask the LLM to show its work:

**Example**:
```
Solve this word problem step by step:
Sarah has $50. She buys 3 books for $12 each and 2 pens for $3 each. How much money does she have left?

Please show each calculation step.
```

## Advanced Techniques

### System Prompts

A **system prompt** is a set of background instructions that shape how an LLM behaves throughout a conversation, rather than just for one response.

**System prompts typically**:
- Define the AI's role and personality
- Set guidelines for behavior
- Establish the conversation context
- Specify output formats or constraints

~.focusContent.demo

**Example System Prompt**:
```
You are a helpful customer service representative for a bookstore. You are knowledgeable about books, authors, and reading recommendations. Always be polite and professional. If you don't know something, offer to help find the information. Keep responses concise but friendly.
```

Your instructor will demonstrate a custom chatbot built with a system prompt to show how this shapes the entire conversation.

/~

### One-Shot vs Few-Shot Prompting

**Zero-Shot**: Give the LLM a task with no examples
```
Translate this sentence to Spanish: "I love learning about technology."
```

**One-Shot**: Provide one example
```
Translate English to Spanish:
English: "Hello, how are you?"
Spanish: "Hola, ¿cómo estás?"

English: "I love learning about technology."
Spanish: 
```

**Few-Shot**: Provide multiple examples
```
Translate English to Spanish:
English: "Hello, how are you?"
Spanish: "Hola, ¿cómo estás?"

English: "What time is it?"
Spanish: "¿Qué hora es?"

English: "Thank you very much."
Spanish: "Muchas gracias."

English: "I love learning about technology."
Spanish:
```

**When to Use Each**:
- **Zero-shot**: Simple, well-defined tasks
- **One-shot**: When you want to establish a pattern or style
- **Few-shot**: Complex tasks where you need to show multiple examples of the desired behavior

### Chain of Thought Prompting

Encourage the LLM to reason through problems step by step:

**Example**:
```
Let's think through this step by step:

Question: A restaurant bill is $85. If you want to leave an 18% tip, how much should you pay in total?

Step 1: Calculate the tip amount
Step 2: Add tip to original bill
Step 3: State the final answer
```

### Prompt Refinement

**Iterative Process**:
1. Start with a basic prompt
2. Evaluate the response
3. Identify what's missing or incorrect
4. Refine the prompt
5. Test again

**Common Refinements**:
- Add constraints ("in exactly 100 words")
- Specify tone ("in a friendly, casual tone")
- Request citations ("include sources where possible")
- Ask for alternatives ("provide 3 different approaches")

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

## Common Prompt Patterns

### The Template Pattern
```
Create a [type of content] about [topic] for [audience] that includes [specific elements] in [format/style].
```

### The Comparison Pattern
```
Compare and contrast [item A] and [item B] in terms of [criteria 1], [criteria 2], and [criteria 3]. Present your analysis in a table format.
```

### The Role-Playing Pattern
```
You are a [role] with [expertise/background]. [User] is asking for your help with [situation]. Respond as this character would, considering [constraints or considerations].
```

### The Critique Pattern
```
Review the following [content type] and provide constructive feedback on [specific aspects]. Suggest specific improvements while highlighting what works well.
```

**Remember**: Good prompt engineering is part art, part science. Practice with different approaches to find what works best for your specific needs and use cases.