---
title: System Software and the Operating System
course: INFM109
---

~.toc

- [System Software and the Operating System](#system-software-and-the-operating-system)
  - [Overview](#overview)
  - [Ownership and Licensing Models](#ownership-and-licensing-models)
    - [Open Source vs Closed Source](#open-source-vs-closed-source)
    - [Proprietary vs Non-Proprietary](#proprietary-vs-non-proprietary)
    - [Examples](#examples)
  - [Major OS's in Use Today](#major-oss-in-use-today)
    - [Microsoft Windows](#microsoft-windows)
    - [MacOS](#macos)
    - [Unix / Linux](#unix--linux)
      - [The Kernel](#the-kernel)
      - [Linux Distributions](#linux-distributions)
  - [What does an Operating System Do?](#what-does-an-operating-system-do)
    - [Process Management](#process-management)
    - [Memory Management](#memory-management)
      - [Paging](#paging)
      - [Paging and Swap Space](#paging-and-swap-space)
      - [Thrashing](#thrashing)
      - [Virtual Memory](#virtual-memory)
      - [Safe Memory Access](#safe-memory-access)
    - [Multitasking OS](#multitasking-os)
      - [Multitasking vs Parallel Processing](#multitasking-vs-parallel-processing)
    - [Input/Output (IO)](#inputoutput-io)
    - [File Systems](#file-systems)
      - [Disk Partitioning](#disk-partitioning)

/~

# System Software and the Operating System

## Overview

- Even the computer needs programs that manage its internal activities. These programs are called **system software**.

- The **Operating System (OS)** is a set of programs that coordinates activities among device resources.

## Ownership and Licensing Models

In order to understand the different operating systems, we need to understand the different ownership and licensing models that exist.

### Open Source vs Closed Source

- **Open Source** = Software whose source code is available for public use and modification.

- **Closed Source** = Software whose source code is not publicly available.

### Proprietary vs Non-Proprietary

- **Proprietary** = Software that is privately owned and may not be free to use.

- **Non-Proprietary** = Software that is not under restrictive private ownership and can be freely distributed. May be free or not.

### Examples

Below are some examples of open source and proprietary software. We will use these terms to describe the licensing models of the major operating systems we will discuss.

| Software         | Open Source? | Proprietary? | Notes                                    |
| ---------------- | ------------ | ------------ | ---------------------------------------- |
| Microsoft Office | No           | Yes          | Traditional closed, proprietary software |
| Firefox Browser  | Yes          | No           | Free and open source software            |
| Adobe Reader     | No           | No           | Closed source but free to use            |
| Red Hat Linux    | Yes          | Yes          | Open source but commercially licensed    |

## Major OS's in Use Today

| Vendor    | OS                        | Proprietary?                         |
| --------- | ------------------------- | ------------------------------------ |
| Apple     | MacOS desktop, iOS mobile | Yes                                  |
| Microsoft | Windows                   | Yes                                  |
| Google    | Android                   | Open source core, proprietary extras |
| Community | Linux                     | No (open source)                     |

### Microsoft Windows

<figure>
    <span>
        <img src="https://pub-d00f534024b04d0e8036586fc78a41fa.r2.dev/sites/2/2021/06/WIN_Start_GenZ_Light_16x10_en-US.png" style="width: 80%;height: auto;">
    </span>
</figure>

Owned by Microsoft. The most widely used desktop operating system in the world, especially in business and gaming.

Key characteristics:

- Works with almost any PC hardware
- Familiar interface most people know
- Strong focus on business and enterprise use

### MacOS

<figure>
    <span>
        <img src="https://www.apple.com/newsroom/images/product/os/macos/standard/Apple-previews-macOS-Catalina-screen-06032019_big.jpg.medium_2x.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

Owned by Apple. Only runs on Apple computers. Known for its design and ease of use, particularly popular with creative professionals.

Key characteristics:

- Only works with Apple computers (their own custom hardware)
- Seamless connection with iDevice ecosystem
- Strong security features
- Clean, consistent design across all programs

### Unix / Linux

<figure>
    <span>
        <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_1920,h_1080/https://assets.ubuntu.com/v1/d4ea8bb8-ubuntu-budgie-2410.png" style="width: 80%;height: auto;">
    </span>
</figure>

Unix is the foundation for many modern operating systems.

~.focusContent.note

#### The Kernel

While people would most often say "I use Linux" to indicate the operating system they are using, Linux is actually just the system software at the core of many different operating systems - the **kernel**. The kernel's job is to manage the computer's resources - memory, CPU time, disk space, and other hardware.

A complete operating system needs more than just resource management - it needs user interfaces, utilities (like file managers, text editors), device drivers, and other system tools that let users actually interact with the computer.

/~

Key characteristics:

- The Linux kernel is free and open source system software
- Runs on almost any hardware, from tiny devices to supercomputers
- Many different complete operating systems ("distros") built around the kernel
- Popular in academia, government, and industry due to stability and license flexibility
- Powers most web servers
- Popular with developers and tech enthusiasts due to transparency and customization

~.focusContent.example

#### Linux Distributions

<figure>
    <span>
        <img src="https://www.openlogic.com/sites/default/files/image/2024-03/Screenshot%202024-03-14%20at%2012.27.40%E2%80%AFPM.png" style="width: 80%;height: auto;">
    </span>
    <figcaption>
        <p>
        Source: <a href="https://www.openlogic.com/blog/top-enterprise-linux-distributions">Top Enterprise Linux Distributions From the State of Open Source Report</a>
        </p>
    </figcaption>
</figure>

The many different operating systems that run on the Linux kernel are called **distributions** or **distros**.

There is a fun rivalry within the Linux community regarding which distribution is the best.

/~

## What does an Operating System Do?

The programs that we use directly are called **applications**.

In contrast, operating system software runs in the **background** - it is not directly used by the user. The applications that we use can interact with the OS to use the computer's resources.

### Process Management

A **process** is a program in execution. We can see the processes that the operating system is running by using system tools:

| OS      | Tool                             |
| ------- | -------------------------------- |
| Windows | Task Manager or Resource Monitor |
| MacOS   | Activity Monitor                 |
| Linux   | `top` or `htop`                  |

This will show us both **user processes** (applications) and **system processes** (OS components).

### Memory Management

#### Paging

<figure>
    <span>
        <img src="https://scaler.com/topics/images/contiguous-allocation-of-pages.webp" style="width: 80%;height: auto;">
    </span>
</figure>

The data from running programs must first be loaded into **memory** (RAM) before the CPU can use them, but we don't need to load all of the program into memory at once.

**Paging** is a memory management technique that allows the OS to load parts of a program into memory at different times:

- Programs are split into small, equal-sized chunks called "pages"
- Only the pages that are actively being used are loaded into memory
- When a page is not actively being used but still belongs to a running program, it can be moved to disk (called the **page file** or **swap file**)

~.focusContent.example

#### Paging and Swap Space

<figure>
    <span>
        <img src="https://recoverhdd.com/wp-content/themes/soft/images/blog/swap-file/principle.gif" style="width: 80%;height: auto;">
    </span>
</figure>

Paging works much like taking books from a shelf. If your program is an encyclopedia, here's how the different storage components map to real-world objects:

| Computer Component | Real-World Analogy            | Description                                             |
| ------------------ | ----------------------------- | ------------------------------------------------------- |
| Hard Drive         | Bookcase                      | Long term storage for everything on the computer        |
| Swap Space         | Closest shelf within bookcase | Temporary storage for active program, but still on disc |
| RAM                | Desk                          | Resources at hand for current process                   |
| CPU                | You                           | Can only read one page at a time                        |

/~

~.focusContent.lookout

#### Thrashing

Swapping pages between RAM and the swap file on disc is an expensive operation!

When the program spends more time swapping pages than actually running, it is said to be **thrashing**.

A large swap file is not a substitute for more RAM!

/~

#### Virtual Memory

In early computers, programs had to know exactly where their data was physically stored in memory. This was a problem because one program might accidentally overwrite another program's data.

**Virtual memory** creates a simple way for programs to work with memory by separating two things:

1. The memory addresses that programs use to access data (virtual addresses)
2. The actual physical locations in RAM or on disk (physical addresses)

Each program gets its own set of virtual addresses starting at zero and going up in order. The operating system handles converting these virtual addresses to real physical locations. This system:

- Lets programs work with memory without knowing where data actually is
- Prevents programs from accessing each other's memory space
- Allows the OS to move data between RAM and disk as needed
- Makes it possible to run programs even when RAM is limited

In other words, the OS acts as a middleman between the program and the physical memory.

~.focusContent.example

#### Safe Memory Access

<figure>
    <span>
        <img src="https://ih1.redbubble.net/image.4920882316.2019/raf,360x360,075,t,fafafa:ca443f4786.jpg" style="width: 100%;height: auto;">
    </span>
</figure>

One of the most important jobs of the OS is to protect the memory of one program from another. A user program cannot directly access memory - it must request the OS to access memory on its behalf. This is done through **system calls**.

This security system is crucial because malicious programs often try to exploit memory access. For example, many damaging computer viruses work by attempting to bypass these protections to overwrite the memory of other programs with their own code. If successful, they can inject malicious instructions into running programs, potentially taking control of the system.

/~

### Multitasking OS

Early operating systems were **single-tasking** - they could only run one program at a time. A program may take two minutes to run, so the user would have to wait two minutes for the program to finish before they could run another program.

_Solution:_

**Multitasking** is when the OS switches between programs quickly, giving each program a small slice of CPU time to run.

**Scheduling** is the process of deciding which program should run next.

This rapid switching between programs is called **context switching**.

All of this happens so fast that it creates the illusion that multiple programs are running simultaneously, even if there is only one CPU.

~.focusContent.lookout

#### Multitasking vs Parallel Processing

**Parallel Processing** is when the OS runs multiple programs at the same time. True parallelism is different from multitasking, which is about switching between programs quickly.

All modern operating systems can now handle both multitasking and parallel processing. They do this by using multiple CPUs, and multiple cores within a single CPU. Each core can run a different program at the same time.

/~

### Input/Output (IO)

The OS also manages the input and output devices.

_Buffers_

<figure>
    <span>
        <img src="https://iximiuz.com/nodejs-writable-streams-distilled/kdpv.gif" style="width: 80%;height: auto;">
    </span>
</figure>

The OS can allocate **buffers** to store data that is being transferred between the device and the computer. Buffers are temporary "waiting areas" that help manage data flow between components that operate at different speeds. They act much like a queue. For example:

- When you type quickly on a keyboard, the keystrokes are stored in a buffer until the computer is ready to process them
- When you move your mouse, the cursor location is stored in a buffer until the computer is ready to update the screen
- When reading from a hard drive, data is stored in disk buffers to help manage the speed difference between the fast CPU and slower disk

_Device Drivers_

**Device drivers** are specialized programs that form a layer between hardware and the operating system. Their primary purpose is abstraction - hiding the complex, device-specific details from the rest of the system.

- Applications don't need to know anything about specific hardware
- The OS can treat different devices in similar ways
- Hardware can be updated without changing the OS or applications

### File Systems

A **file system** is a way of organizing and storing files on a computer.

When you look at Windows Explorer or MacOS Finder, you are seeing the file system of the computer.

~.focusContent.exercise

#### Disk Partitioning

<figure>
    <span>
        <img src="https://images.wondershare.com/recoverit/article/what-is-partition.jpg" style="width: 100%;height: auto;">
    </span>
</figure>

A physical disk drive can be divided into multiple logical sections called **partitions**. Each partition functions as an independent storage unit, appearing to the operating system as a separate disk drive.

This allows you to:

- Install multiple operating systems on a single physical disk
- Organize data more effectively
- Separate system files from user data

_Exercise:_

For Windows user, open the Disk Management tool and view the partitions.

For MacOS user, open the Disk Utility tool and view the partitions.

/~
