---
title: Von Neumann Architecture
course: SDEV120
---

~.schedule

- [Von Neumann Architecture](#von-neumann-architecture)
  - [Prior to von Neumann](#prior-to-von-neumann)
  - [John von Neumann](#john-von-neumann)
  - [Components of the von Neumann Architecture](#components-of-the-von-neumann-architecture)
    - [Input/Output (I/O)](#inputoutput-io)
    - [Memory](#memory)
    - [Central Processing Unit (CPU)](#central-processing-unit-cpu)
      - [Registers](#registers)
      - [Control Unit](#control-unit)
      - [Arithmetic Logic Unit (ALU)](#arithmetic-logic-unit-alu)
  - [Fetch Decode Execute Cycle](#fetch-decode-execute-cycle)

/~

# Von Neumann Architecture

<figure>
    <span>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv48OWeQlyXjKhtwyeGEBddBGa6RX6XzKjHqRv8NmuAyd2zKmymHyaOhKlR47yoSf55vnmoeos-_RJ9kl0fCOSbUZKC7eSAsbfmo37chyxo8ok_i1NG-6lfJ8HUMULUzo1C5Sglg/s640/500004275-03-01.jpg" style="">
    </span>
</figure>

## Prior to von Neumann

- Computers were built for specific tasks
- Programs were hard-wired into the computer
- You had to either build a new computer or rewire the existing one to change the program

## John von Neumann

- Hungarian-American mathematician and physicist
- Member of the Manhattan Project
- Interested in how to build a general-purpose computer

> [Preliminary Discussion of the Logical Design of an Electronic Computing Instrument](https://www.ias.edu/sites/default/files/library/Prelim_Disc_Logical_Design.pdf) \
> \
> -- Arthur W. Burks \
> -- Herman H. Goldstine \
> -- John von Neumann

## Components of the von Neumann Architecture

<figure>
    <span>
        <img src="https://circuitglobe.com/wp-content/uploads/2021/06/Von-Neumann-Architecture.jpg" style="">
    </span>
</figure>

### Input/Output (I/O)

- Devices that allow the computer to interact with the outside world
- Examples:
  - IN: keyboards, mice, touchscreens, file storage (load a file, e.g. a program)
  - OUT: monitors, speakers, printers, file storage (write to a file)
- In von Neumann's time it may have included punch cards or paper tape

### Memory

<figure>
    <span>
        <img src="https://m.media-amazon.com/images/I/61XmhmEup8L._AC_UF894,1000_QL80_.jpg" style="width: 40%;">
    </span>
</figure>

- Stores data and instructions that the CPU needs to operate
- Today if you hear the word "memory" we are referring to RAM. We call hard drives "storage" or "secondary storage".
- In von Neumann's time it may have included vacuum tubes

### Central Processing Unit (CPU)

- The "brain" of the computer
- Where instructions are executed
- Has three main components:
  - Control Unit
  - Arithmetic Logic Unit (ALU)
  - Registers

#### Registers

- Small amount of storage on the CPU itself
- Extremely fast because of proximity to CPU components
- Every operation in the CPU involves fist moving data to and from registers
- There are reserved "special" registers as well as general purpose registers

#### Control Unit

- "Manager" of the CPU
- Manages the flow of data and instructions within the computer

#### Arithmetic Logic Unit (ALU)

- "Worker" of the CPU
- Performs arithmetic and logical operations
  - Arithmetic: addition, subtraction, multiplication, division
  - Logical: AND, OR, NOT, XOR
  - Comparison: greater than, less than, equal to
  - etc.

## Fetch Decode Execute Cycle

<figure>
    <span>
        <img src="https://learnlearn.uk/gcsecs/wp-content/uploads/sites/8/2018/01/fetch-decode-execute-oct-gcse.png" style="">
    </span>
</figure>

The CPU will pick off one instruction at a time from memory and execute it. This is called the **Fetch Decode Execute Cycle**.

1. **Fetch**:
   - Move the instruction from memory to a special _instruction register_ in the CPU.
   - This instruction is determined by the value in the _program counter_ register.
   - The program counter is then incremented so that the next instruction can be fetched.
2. **Decode**:
   - The control unit reads the instruction and determines what to do.
   - It preps the ALU and other components for the operation that will come next.
3. **Execute**:
   - The ALU performs the operation on the data in the registers.
   - The intermediate result is stored in a special register called the _accumulator_.

By shuffling data between memory and registers, the CPU can perform all of the operations necessary to run a program.

~.focusContent.example

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z5JC9Ve1sfI?si=q4IAEEs3UIgPdkuf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

We discuss these instructions in more detail in the "Evoltuion of Programming Languages" page.

See: [x86 instruction listings](https://en.wikipedia.org/wiki/X86_instruction_listings)

_Slight correction to the video: the program counter is incremented immediately after the instruction is fetched, not after it is executed._

_The "JUMP 1" instruction does not skip the execution cycle. It updates the program counter on its execution._

/~
