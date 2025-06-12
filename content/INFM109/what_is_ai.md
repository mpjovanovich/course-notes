---
title: What is AI?
course: INFM109
---

~.toc

- [What is AI?](#what-is-ai)
  - [AI vs Human Intelligence](#ai-vs-human-intelligence)
  - [AI in Daily Life](#ai-in-daily-life)
  - [Classical vs Modern AI: A Paradigm Shift](#classical-vs-modern-ai-a-paradigm-shift)
    - [Classical AI](#classical-ai)
    - [Modern AI](#modern-ai)
  - [Machine Learning](#machine-learning)
    - [Supervised Learning](#supervised-learning)
    - [Artificial Neural Networks](#artificial-neural-networks)
      - [Training](#training)
      - [Inference](#inference)

/~

# What is AI?

<figure>
 <img src="https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg" alt="" style="">
 <figcaption>
  <span class="attr">--Magritte, The Treachery of Images ("This is not a pipe")</span>
 </figcaption>
</figure>

**Artificial Intelligence** is the simulation of human intelligence processes by machines, especially computer systems.

It has been around for a long time, but has recently become more capable, and is seeing more widespread use.

## AI vs Human Intelligence

AI excels at:

- Processing large amounts of data quickly
- Finding patterns humans might miss
- Performing repetitive tasks consistently

AI struggles with:

- Common sense reasoning
- Understanding context like humans do
- Creative problem solving in new situations

## AI in Daily Life

<figure>
    <span>
        <img src="images/dog_search.png" style="width: 100%;height: auto;">
    </span>
</figure>

**Smartphones**

- Predictive text and autocorrect
- Voice assistants (Siri, Google Assistant)
- Camera features (object framing and recognition, search in photo gallery)

**Social Media**

- News feed algorithms
- Friend suggestions
- Content recommendations

**Entertainment**

- Netflix/Spotify recommendations
- Video game AI opponents

**Navigation**

- GPS route optimization
- Traffic prediction

**Shopping**

- Product recommendations
- Fraud detection

## Classical vs Modern AI: A Paradigm Shift

The AI we use today is fundamentally different from earlier AI systems. This represents one of the most significant paradigm shifts in computing history.

### Classical AI

**Approach**: Rule-based and heuristic systems

Classical AI systems were programmed with explicit rules:

```
- "If patient's blood pressure > 140/90, then flag for hypertension review"
- "If credit card transaction amount > $1000, then trigger fraud detection review"
```

These are called **expert systems**. These types of systems are still used today. They are important when we need a **deterministic** system, with no uncertainty in the output.

~.focusContent.example

<figure>
    <span>
        <img src="https://inside-machinelearning.com/wp-content/uploads/2022/09/DecisionTree.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

Here is a "recommender" system that might suggest products based on the current weather in the user's location. These decicion branches would be picked by a human.

/~

### Modern AI

**Approach**: Data-driven learning systems

Modern AI systems learn patterns from data rather than following explicit rules. This allows them to handle complex, uncertain situations that would be difficult to program with traditional rules.

## Machine Learning

**Machine Learning** allows computer systems to learn from data, _without being explicitly programmed_.

~.focusContent.note

**Key Insight: Learning vs Programming**

The fundamental difference between classical and modern AI is how they acquire their capabilities:

- Classical AI: Explicitly programmed with rules by humans
- Modern AI: Learns patterns from data through training

This shift from programming to learning is what makes modern AI so powerful and flexible.

/~

### Supervised Learning

- Supervised learning is a type of machine learning where the model is trained on a labeled dataset
- The model learns to map inputs to outputs based on the correctly labeled data
- Inputs are called "features" or **parameters**
- The model is then used to predict the output for new inputs that it has not seen before

### Artificial Neural Networks

<figure>
 <img src="https://www.cusabio.com/statics/images/Structure-Neuron.jpg" alt="Structure of a biological neuron" style="">
</figure>

**Artificial Neural Networks** are a type of _supervised learning_ model inspired by the human brain.

These have been around since the 1950's, but only recently have they become practical due to the availability of data and compute volume.

#### Training

<figure>
    <span>
        <img src="https://media.licdn.com/dms/image/v2/D5622AQEBHjAgykk3Wg/feedshare-shrink_800/B56ZS_7JGbHQAo-/0/1738386740593?e=2147483647&v=beta&t=DBVDk9YkanakFwUItC8Z1DD-Al2331Uw246sVFhwLdE" style="width: 100%;height: auto;">
    </span>
</figure>

The process of creating a neural network model is called the **training** process. This is where the learning happens.

In this phase the model is given a set of input/output pairs, and it learns to map the inputs (e.g. picture of a cat) to the outputs (e.g. "cat").

After the model has been trained, it is released to the public, e.g. ChatGPT. These models do not learn after this point.

~.focusContent.note

**Key Insights:**

- The model learns by itself through trial and error, using labeled data to adjust its weights until it can make accurate predictions.

~/

#### Inference

<figure>
 <img src="https://miro.medium.com/v2/resize:fit:2000/1*ui3IvoiVYBFtaU0auj63ew.gif" alt="" style="width: 80%;height: auto;">
</figure>

<figure>
 <img src="https://www.quantib.com/hs-fs/hubfs/assets/pillar%20pages/The%20ultimate%20guide%20to%20AI%20in%20radiology/images/Pillar%20page%20-%20figure%2010-2.png?width=1022&name=Pillar%20page%20-%20figure%2010-2.png" alt="" style="width: 80%;height: auto;">
</figure>

By the time a model is released to the public, it is completely done learning.

The process of using the model to make predictions is called **inference**.

~.focusContent.note

**Key Insight: Generalization**

The distinguishing feature of neural networks is the ability to "understand" data that it has not seen before.

- Image classification (medical diagnosis, self-driving cars, photo gallery search)
  - Model has never seen _your_ cat, but it knows it's a cat
- Speech recognition (voice assistants, dictation software)
  - Model has never heard _your_ voice, but it knows your words

This ability to generalize from training data to new situations is what makes neural networks so powerful.

/~
