---
title: Overview of AI
---

~.toc

- [Artificial Intelligence](#artificial-intelligence)
  - [Expert Systems](#expert-systems)
  - [Machine Learning](#machine-learning)
    - [Supervised Learning](#supervised-learning)
    - [Artificial Neural Networks](#artificial-neural-networks)
      - [Single layer perceptron](#single-layer-perceptron)
      - [Layered Neural Networks (Deep Learning)](#layered-neural-networks-deep-learning)
    - [Generative AI](#generative-ai)
  - [Industry and Market Considerations](#industry-and-market-considerations)
    - [GPU Market and Compute Resources](#gpu-market-and-compute-resources)
  - [Challenges and Considerations in AI](#challenges-and-considerations-in-ai)
    - [Technical Challenges](#technical-challenges)
    - [Ethical and Regulatory Considerations](#ethical-and-regulatory-considerations)

/~

# Artificial Intelligence

<figure>
 <img src="https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg" alt="" style="">
 <figcaption>
  <span class="attr">--Magritte, The Treachery of Images ("This is not a pipe")</span>
 </figcaption>
</figure>

## Expert Systems

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

## Machine Learning

**Machine Learning** allows computer systems to learn from data, without being explicitly programmed.

Even though neural networks are most discussed today, there are many types of machine learning.

### Supervised Learning

- Supervised learning is a type of machine learning where the model is trained on a labeled dataset.
- The model learns to map inputs to outputs based on the correctly labeled data.
- The model is then used to predict the output for new inputs that it has not seen before.

### Artificial Neural Networks

<figure>
 <img src="https://www.cusabio.com/statics/images/Structure-Neuron.jpg" alt="" style="">
</figure>

- Inputs are called "features" or "parameters"
- Each layer behaves like a function, transforming the previous layer.
- Complexity of function that can be learned depends on the architecture that's used.

#### Single layer perceptron

<figure>
 <img src="https://schwalbe10.github.io/thinkage/images/posts/perceptron.png" alt="" style="width: 80%;height: auto;">
</figure>

- Simplest form of neural network.
- What can it compute?
  - Linear functions - where output groupings (true or false) can be separated by a line.
  - E.g. AND - yes; XOR - no

<figure>
 <img src="https://static.packt-cdn.com/products/9781788299879/graphics/2271a103-bcc0-4ea0-acca-0eb3e3c99fbd.png" alt="" style="width: 90%;height: auto;">
</figure>

**Demo:** NN Perceptron in Python

#### Layered Neural Networks (Deep Learning)

<figure>
 <img src="https://miro.medium.com/v2/resize:fit:2000/1*ui3IvoiVYBFtaU0auj63ew.gif" alt="" style="width: 80%;height: auto;">
</figure>

<figure>
 <img src="https://www.quantib.com/hs-fs/hubfs/assets/pillar%20pages/The%20ultimate%20guide%20to%20AI%20in%20radiology/images/Pillar%20page%20-%20figure%2010-2.png?width=1022&name=Pillar%20page%20-%20figure%2010-2.png" alt="" style="width: 80%;height: auto;">
</figure>

- Add more layers to the network.
- Can compute more complex functions.

### Generative AI

What we've focused on so for is classification (e.g. "this is a cat" or "this is a dog").

- Generative AI is a type of machine learning where the model is trained to generate new data.
- The model learns to generate new data that is similar to the training data.

**Large Language Models (LLMs)** are a type of generative AI that are trained to generate text. There are also models that can generate images, audio, and other types of data.

## Industry and Market Considerations

### GPU Market and Compute Resources

- **Current State**

  - nVidia dominance and supply constraints
  - Currently linear relationship between compute investment and model performance
    - E.g. 10x larger model -> 10x model performance
    - This is slowing down

- **Future Challenges**

  - Potential "AI bust" scenario for industry
    - Similar to dot-com bubble
  - Potential "compute bust" scenario with limited compute resources
    - US effort: [Stargate Project](https://openai.com/index/announcing-the-stargate-project/)
      - $500 billion US project
      - Energy infrastructure
      - AI hardware

## Challenges and Considerations in AI

### Technical Challenges

- Input encoding methodologies
- Computational limitations
- Model scaling issues

### Ethical and Regulatory Considerations

- **Data Rights and Ownership**

  - Open vs closed source models
  - Training data ownership and sale of data
  - Data storage and sovereignty

- **Ethical Implementation**

  - Training data bias and representation
  - Data labeling practices
  - Fair use of artistic and research works
  - Responsible AI deployment
    - Example: Ethics of AI in hiring practices (facial recognition)

- **AI Safety**

  - Human initiated: Avoid nuclear, biological, chemical, social engineering, autonomous weaponry, cyber warfare
  - AI evolution: AI alignment to human values in case of autonomous AI
  - US has chosen not to join EU level of regulation for AI

- **Long Term Cognitive Impact**
  - Code quality issues for generated code
  - Decreased critical thinking skills for AI "power users" (over-reliance on AI)
