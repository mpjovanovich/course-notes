---
title: Overview of AI
---

> This, said Theuth, will make the Egyptians wiser and give them better memories; it is a specific both for the memory and for the wit. Thamus replied: O most ingenious Theuth, the parent or inventor of an art is not always the best judge of the utility or inutility of his own inventions to the users of them. And in this instance, you who are the father of letters, from a paternal love of your own children have been led to attribute to them a quality which they cannot have; for this discovery of yours will create forgetfulness in the learners' souls, because they will not use their memories; they will trust to the external written characters and not remember of themselves. The specific which you have discovered is an aid not to memory, but to reminiscence, and you give your disciples not truth, but only the semblance of truth; they will be hearers of many things and will have learned nothing; they will appear to be omniscient and will generally know nothing; they will be tiresome company, having the show of wisdom without the reality. \
> <span class="attr">--Socrates recounting the gift of letters offered by Ammon</span>

<iframe class="center" width="560" height="315" src="https://www.youtube.com/embed/qTmPrVhdtks?si=8Z9CK1dP1vPdgcQv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

~.schedule

- [Artificial Intelligence](#artificial-intelligence)
  - [Types of AI](#types-of-ai)
    - [Expert Systems](#expert-systems)
      - [Artificial Neural Networks](#artificial-neural-networks)
        - [Single layer perceptron](#single-layer-perceptron)
    - [Potential Entrants to AI](#potential-entrants-to-ai)
  - [Staying Current on Innovation](#staying-current-on-innovation)

/~

# Artificial Intelligence

<!-- TODO: split into several pages -->

These notes are a mess, as I'm currently porting them from:

https://docs.google.com/document/d/1ctlNbZHVTEDOqJWp9rlHQWI1H_RKuFs8A7oxcxTqUA8/edit?usp=sharing

Not all info is copied over.

**See also:**

- demos on git
  - Python NNs
  - OCR
  - k-means clustering

**Other topics to discuss:**

- How to encode inputs
- Where is AI being used
  - Medical imaging
  - Pharmaceutical discovery
  - Self-driving cars
  - Marketing
  - Precision agriculture
  - ...
- LLMs
  - The "old" way
  - Attention mechanisms (QKV puts words in context and assigns weights)
- Ethical issues
  - How does training data affect the model?
    - Who is labeling?
    - How representative is the data of the population? Try making an image of "successful businessman sipping a cocktail while riding a rodeo bull"...
  - Open vs closed source
  - Who owns the training data? Can you train from artists' or researchers' work?
  - Where does the data "live"?
  - Limits to AI (case study of facial recognition used in hiring)

## Types of AI

### Expert Systems

Simulate human intelligence...

- Are a form of AI.
  - _No active learning by machine_.
  - _Rely upon predefined rules_.

~~fig(60){https://static.javatpoint.com/tutorial/ai/images/expert-systems-in-ai.png}

- **_Frequent firing of a neuron strengthens the synapse between connected neurons._**
  - Synaptic distance decreases; "tighter" connection along circuit.
  - Close synapses are more likely to fire together.
  - Aids in memory formation.

#### Artificial Neural Networks

- Inputs are called "features" or "parameters"
- Each layer behaves like a function, transforming the previous layer.
- Complexity of function that can be learned depends on the architecture that’s used.

##### Single layer perceptron

<!-- https://towardsdatascience.com/everything-you-need-to-know-about-neural-networks-and-backpropagation-machine-learning-made-easy-e5285bc2be3a -->

- What can it compute?
  - Linear functions - where output groupings (true or false) can be separated by a line.
  - E.g. AND - yes; XOR - no

~~fig(90){https://static.packt-cdn.com/products/9781788299879/graphics/2271a103-bcc0-4ea0-acca-0eb3e3c99fbd.png}

### Potential Entrants to AI

- **_Barriers to entry_** = factors that make it difficult for new competitors to enter the market.
  - Capital
    - Can't raise initial funding to start
  - Expertise
    - Can't afford to hire experts
  - Monopoly
    - Supply locked
    - Can't compete with prices
    - Can't compete with branding

<p class="demo">Case study:</p>

**nVidia and GPU Market**

- Industries scrambling to create/employ AI plan
- Huge demand, low supply
- Rivalry / competitors in ramp up mode
- Who profits?

  - Are these profits tenable long term?

- Currently, there are linear profits for linear scaling in compute
- Will there be a "compute bust"?
- Responses to need for massive compute power...
  - Efficient algorithms
  - Compression

<p class="demo">Case study:</p>

**AI Software and Hardware Architechtures**

- Started off niche
- Odd position where "products" are not yet defined;
  - Exploritory investment
- Major tech leaders, e.g. Meta, now open sourcing how to do things
- How does this influence barrier to entry?
  - Startups?
  - Good or bad for innovation?

## Staying Current on Innovation

Technical skills must be supplemented with knowledge of current trends and innovations.

- MS Build convention, Satya Nadella and others, Microsoft... find something interesting!

  - [Microsoft Build 2023](https://news.microsoft.com/build-2023/)

    <iframe width="560" height="315" src="https://www.youtube.com/embed/FaV0tIaWWEg?si=p7Z10SGF9KC5Tkmf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Andrej Karpathy, Tesla / OpenAI

<iframe width="560" height="315" src="https://www.youtube.com/embed/bZQun8Y4L2A?si=0hnLcMHB6GZwOzgT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
