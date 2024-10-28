---
title: Evolution of Computing
course: SDEV120
---

~.schedule

- [Evolution of Computing](#evolution-of-computing)
  - [Early Computing](#early-computing)
  - [Transitors](#transitors)
  - [Moore's Law](#moores-law)
  - [Continued Growth?](#continued-growth)
  - [Kurzweil's Commentaries](#kurzweils-commentaries)
  - [Alternatives to Von Neumann Architecture](#alternatives-to-von-neumann-architecture)
  - [Alternatives to Transistor Based Computing](#alternatives-to-transistor-based-computing)

/~

# Evolution of Computing

## Early Computing

Early computers were mechanical. They used gears, levers, and other mechanical components to perform calculations. The most famous example is the Babbage Difference Engine.

Later, vacuum tubes were used to build electronic computers. These were large, slow, and unreliable.

## Transitors

<figure>
    <span>
        <img src="https://www.watelectronics.com/wp-content/uploads/NOT-Gate-Using-Transistor.png" style="">
    </span>
    <figcaption>NOT Gate Using Transistor</figcaption>
</figure>

Transistors were invented in 1947. They are the basis of modern computing.

A **transistor** is a switch that can be turned on or off by applying a small voltage. They form the subcomponents of logic gates.

An **integrated circuit**, or is a collection of transistors and other components on a single chip. These are often referred to as "chips" or "microchips".

## Moore's Law

<figure>
    <span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Moore%27s_Law_Transistor_Count_1970-2020.png/1024px-Moore%27s_Law_Transistor_Count_1970-2020.png" style="">
    </span>
</figure>

Moore's Law is an observation made by Gordon Moore, co-founder of Intel, in 1965. It states that:

> The number of transistors on a microchip doubles approximately every two years.

Note the specifics - it's all about how many transistors can be packed onto a chip (density of transisitors).

- Does this translate to a linear increase in performance every year?

## Continued Growth?

- There is currently a debate about whether Moore's Law can continue.
- After a certain point, the size of transistors will be so small that quantum effects will start to interfere with their operation - you can't pack the transistors any closer together.

## Kurzweil's Commentaries

<figure>
    <span>
        <img src="https://till.com/articles/MooresLaw/images/kurzweil_120years.png" style="">
    </span>
</figure>

Ray Kurzweil has observed more generally that the rate of change in technology is itself accelerating. This is a more general observation than Moore's Law, which is specific to transistors.

Above we look at how much we can compute with a dollar over time. The curve is mildly exponential (curved up), not linear (straight).

Kurzweil and others believe that as long as there is a demand for more computing power, the technology will continue to evolve to meet that demand.

## Alternatives to Von Neumann Architecture

**GPU's**

- Originally designed for rendering graphics.
- Optimized for processing arrays and matrices.
- Can perform many calculations in parallel.
- This works well for machine learning and other specialized applications.
- Most supercomputers use GPU's.

**Specialized Processors**

- Other entrants are now tweaking the design of the processor to optimize for specific tasks.
- This is mostly done to support AI / machine learning.
- Special chips designed to do machine learning _inference_ (E.g. on your phone)
- Special chips to do machine learning _training_ (at large scales in computing facilities)
- Special processors for small devices

## Alternatives to Transistor Based Computing

**Quantum Computing**

- Currently experimental, large, and expensive.
- Quantum computers use quantum bits, or qubits, which can be in multiple states at once.
- Not restricted to binary (0 or 1) like classical computers.
- Used in research and specialized applications to do this kind of things that supercomputers are used for.

**Organic Computing**

- Currently experimental.
- Computers made from organic materials.
- Information is encoded in the structure of the material itself.
