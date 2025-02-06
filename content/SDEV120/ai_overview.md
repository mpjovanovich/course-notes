---
title: Overview of AI
---

<figure>
 <img src="https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg" alt="" style="">
 <figcaption>
  <span class="attr">--Magritte, The Treachery of Images ("This is not a pipe")</span>
 </figcaption>
</figure>

~.toc

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

<figure>
 <img src="https://static.javatpoint.com/tutorial/ai/images/expert-systems-in-ai.png" alt="" style="width: 60%;height: auto;">
</figure>

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

<figure>
 <img src="https://static.packt-cdn.com/products/9781788299879/graphics/2271a103-bcc0-4ea0-acca-0eb3e3c99fbd.png" alt="" style="width: 90%;height: auto;">
</figure>

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
