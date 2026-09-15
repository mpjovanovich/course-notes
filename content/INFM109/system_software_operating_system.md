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

/~

# System Software and the Operating System

## Overview

- Even the computer needs programs that manage its internal activities. These programs are called **system software**.

- The **Operating System (OS)** is a set of programs that coordinates activities among device resources. It's the most prominent example of system software, but system software also includes device drivers, firmware, and utility programs.

## Ownership and Licensing Models

In order to understand the different operating systems, we need to understand the different ownership and licensing models that exist.

### Open Source vs Closed Source

Recall from last class: **open source** software makes its source code publicly available for use and modification; **closed source** software keeps its source code private.

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

Red Hat's underlying source code is open (it's licensed under the GPL), but the compiled distribution, trademark, and paid support subscription are commercially controlled by Red Hat - so it counts as both open source _and_ proprietary at the same time.

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

Owned by Microsoft.

Key characteristics:

- Works with almost any PC hardware
- Strong focus on business and enterprise use

### MacOS

<figure>
    <span>
        <img src="https://www.apple.com/newsroom/images/product/os/macos/standard/Apple-previews-macOS-Catalina-screen-06032019_big.jpg.medium_2x.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

Owned by Apple. Only runs on Apple computers.

Key characteristics:

- Only works with Apple computers (their own custom hardware)
- Seamless connection with iDevice ecosystem
- Strong use in "creative" industries and development

### Unix / Linux

<figure>
    <span>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/s2-1.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

Linux is part of the Unix family - it was built as a free, open source alternative to Unix, and follows many of the same design principles.

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
        <img src="https://www.openlogic.com/sites/default/files/inline-images/image.png" style="width: 80%;height: auto;">
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

**Android is a great example of this idea in action.** It's built on top of the Linux kernel, but Google layered its own user interface, app framework, and tools on top - making it look and feel nothing like a typical desktop Linux distro, even though the kernel underneath is the same. This is also why apps often need separate builds for Windows, MacOS, and Linux/Android: each OS provides a different set of tools and APIs on top of its kernel, as we mentioned last class.
