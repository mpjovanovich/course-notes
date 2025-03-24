---
title: Computer Hardware
course: INFM109
---

~.toc

- [Computer Hardware: What You Need to Know](#computer-hardware-what-you-need-to-know)
  - [Introduction: Understanding the Basics](#introduction-understanding-the-basics)
    - [Bits and Bytes: The Foundation of Computing](#bits-and-bytes-the-foundation-of-computing)
  - [Computer System Components](#computer-system-components)
    - [Form Factors](#form-factors)
    - [Chassis](#chassis)
    - [Motherboard](#motherboard)
    - [System Bus](#system-bus)
    - [CPU (Central Processing Unit)](#cpu-central-processing-unit)
  - [Memory](#memory)
    - [Registers](#registers)
    - [Cache](#cache)
    - [Random Access Memory (RAM)](#random-access-memory-ram)
    - [Storage Devices](#storage-devices)
  - [Graphics](#graphics)
    - [Graphics Processing](#graphics-processing)
  - [Power](#power)
    - [Power Supply Unit (PSU)](#power-supply-unit-psu)
  - [Connectivity](#connectivity)
    - [Types of Ports](#types-of-ports)
    - [Using Adapters](#using-adapters)
  - [Performance Considerations](#performance-considerations)
    - [How Much Processing Power Do You Need?](#how-much-processing-power-do-you-need)
  - [Maintenance and Protection](#maintenance-and-protection)
    - [Device Drivers](#device-drivers)
    - [Power Protection](#power-protection)
    - [Warranty and Coverage](#warranty-and-coverage)
    - [Practical Data Management](#practical-data-management)
    - [System Images and Restore Points](#system-images-and-restore-points)
  - [Conclusion: Making Informed Decisions](#conclusion-making-informed-decisions)

/~

# Computer Hardware: What You Need to Know

## Introduction: Understanding the Basics

### Bits and Bytes: The Foundation of Computing

- **What are bits?** Single binary digits (0 or 1) - the smallest unit of data
- **What are bytes?** 8 bits grouped together - can represent 256 different values
- **Why it matters:** All data on your computer—text, images, video, programs—is stored and processed as collections of bits and bytes
- **Practical takeaways:**
  - Understanding data sizes helps you make informed decisions about storage needs and processing requirements

## Computer System Components

~.focusContent.note

**Compute vs. I/O Performance**

As we move through these notes, we'll talk about **compute** and **I/O** performance.

- **Compute performance:** Raw processing power (CPU/GPU)
- **I/O (input/output) performance:** How quickly data moves between components
- **Bottlenecks:** System performance is limited by the slowest component
- **Practical takeaways:**
  - Balanced systems perform better than those with one very high-end component but weaker supporting hardware

/~

### Form Factors

- **What is a form factor?** The physical size, shape, and specification of computer hardware
- **Common form factors:**
  - Desktop towers (full, mid, mini)
  - All-in-ones
  - Laptops (standard, ultrabooks)
  - Tablets and convertibles
- **Practical takeaways:**
  - Form factor affects upgradability, portability, and cooling capacity

### Chassis

- **What is it?** The physical case that houses all internal components
- **Functions:**
  - Physical protection
  - Airflow management
  - Component organization
  - Noise reduction
- **Practical takeaways:**
  - A quality chassis improves cooling efficiency and can extend component lifespan

### Motherboard

<figure>
    <span>
        <img src="https://images.saymedia-content.com/.image/t_share/MTc1MDA5NjY4MTc4MjU3NjQw/the-motherboard-components.png" style="width: 100%;height: auto;">
    </span>
</figure>

- **What is it?** The main circuit board that connects all components
- **Functions:**
  - Provides physical connection points for all components
  - Contains chipsets that control data flow
  - Houses BIOS/UEFI (basic input/output system)
- **Practical takeaways:**
  - The motherboard determines what components are compatible with your system and future upgrade options

### System Bus

- **What is it?** Communication pathways that transfer data between components
  - Not an individual component; it is a specification of the motherboard
- **32-bit vs 64-bit systems:**
  - **Word size:** Refers to the size of data chunks processed at once
  - 64-bit systems can address more RAM (>4GB)
  - 64-bit applications can process larger chunks of data
- **Practical takeaways:**
  - 64-bit systems are standard now and necessary for modern computing tasks

### CPU (Central Processing Unit)

<figure>
    <span>
        <img src="https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/04/53366612939_4a328f5233_o.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

- **What is it?** The "brain" of the computer that executes instructions
- **Key specifications:**
  - Clock speed (GHz) - how many cycles per second
  - Cores - independent processing units
  - Cache - fast memory for quick data access
- **Heat management:**
  - Heat sinks and fans dissipate heat
  - Thermal paste improves heat transfer
  - Overheating reduces performance and lifespan
- **Practical takeaways:**
  - For most everyday tasks, multi-core performance is more important than raw clock speed

~.focusContent.note

**System Clock and Clock Speed**

- **What is it?** Internal timing mechanism that synchronizes operations
- **Clock speed measurement:**
  - Measured in GHz (billions of cycles per second)
  - Higher is generally better, but not the only factor
- **Practical takeaways:**
  - CPU architecture efficiency often matters more than raw clock speed

/~

## Memory

<figure>
    <span>
        <img src="https://www.learncomputerscienceonline.com/wp-content/uploads/2019/06/Computer-Memory-Hierarchy-.jpg" style="width: 100%;height: auto;">
    </span>
</figure>

~.focusContent.note

**Computer Latency in Perspective**

Computers are so fast that it can be difficult to understand the latency of different components. Let's put the relative latency of different components into a human scale:

| Component          | Latency (Round Trip Fetch) | Activity                                    |
| ------------------ | -------------------------- | ------------------------------------------- |
| CPU Registers      | 1 minute                   | Fetch something from your desk              |
| L1 Cache           | 4 minutes                  | Fetch something from other side of building |
| L2 Cache           | 10 minutes                 | Fetch something from another building       |
| L3 Cache           | 50 minutes                 | Fetch something from a nearby town          |
| RAM                | 4 hours                    | Fetch something from another state          |
| SSD                | 1-2 days                   | Fetch something from across the country     |
| HDD                | 5-7 days                   | Fetch something from another country        |
| Network (Internet) | 2-4 weeks                  | Fetch something from another continent      |

/~

### Registers

**Registers** are temporary storage for the CPU to work with as it performs calculations.

- Registers aren't an individual component; they built into the CPU.
- Extremely fast, because they are in the "working space" of the CPU.
- Very small amount - roughly 128-256 bytes
- **Practical takeaways:**
  - Registers are fundamental to the operation of the CPU; they are not a specification that is listed by CPU manufacturers.
  - You do not need to consider this specification when buying a CPU for most everyday computing tasks.

### Cache

**Cache** is a type of memory that stores copies of frequently used data from RAM.

- Also not an individual component; it's built into the CPU.
- Cache is faster than RAM, but smaller and more expensive.
- Cache is used to store copies of frequently used data from RAM.
- Avoids need for longer trip to RAM for frequently used data.
- Different types (L1, L2, L3) have to do with the speed of the cache and the size.
- **Practical takeaways:**
  - Cache becomes important for high-performance computing and specialized computers (e.g. servers)
  - When buying a CPU, you can see the cache size as a specification.

### Random Access Memory (RAM)

<figure>
    <span>
        <img src="https://www.minitool.com/images/uploads/lib/2019/06/random-access-memory/random-access-memory-1.jpg" style="width: 100%;height: auto;">
    </span>
</figure>

- **What is it?** Temporary memory that stores active data for quick access
- **Characteristics:**
  - Volatile (clears when power is off)
  - Much faster than disk storage
  - Different speeds and types (DDR4, DDR5)
- **Practical takeaways:**
  - Insufficient RAM causes system slowdowns when multitasking;
  - Often the most cost-effective upgrade for improved performance

### Storage Devices

- **Types of storage:**
  - HDD (Hard Disk Drive) - mechanical, slower, cheaper per GB
  - SSD (Solid State Drive) - no moving parts, faster, more reliable
  - NVMe drives - fastest current storage technology
- **Disk vs Cloud:**
  - Local storage: faster access, works offline, one-time cost
  - Cloud storage: accessible anywhere, automatic backup, subscription model
- **Practical takeaways:**
  - An SSD for your operating system and programs provides the most noticeable speed improvement for any computer

## Graphics

### Graphics Processing

- **Integrated Graphics:**
  - Built into the CPU
  - Shares system memory
  - Sufficient for basic tasks such as web browsing and office work

<figure>
    <span>
        <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1720450649-617QVnCqXYL.jpg?crop=1xw:1.00xh;center,top&resize=980:*" style="width: 80%;height: auto;">
    </span>
</figure>

- **Dedicated GPU (Graphics Processing Unit):**

  - Separate card with dedicated memory
  - Necessary for gaming, video editing, 3D modeling
  - Much higher power consumption

- **Practical takeaways:**
  - For basic office work and web browsing, integrated graphics are sufficient;
  - specialized work requires a dedicated GPU
  - Make sure your card fits in your chassis!

## Power

### Power Supply Unit (PSU)

<figure>
    <span>
        <img src="https://www.pcworld.com/wp-content/uploads/2023/04/evga-power-supply-100883513-orig.jpg?quality=50&strip=all" style="width: 80%;height: auto;">
    </span>
</figure>

- **What is it?** Converts outlet AC power to DC power for components
- **Key specifications:**
  - Wattage rating - total power output
  - Efficiency rating (80 Plus Bronze, Silver, Gold, etc.)
- **Practical takeaways:**
  - A quality power supply protects your components and can save on electricity bills

## Connectivity

### Types of Ports

<figure>
    <span>
        <img src="https://www.szapphone.com/wp-content/uploads/2023/09/USB-Connector-Port-Types.webp" style="width: 100%;height: auto;">
    </span>
</figure>

- **USB (Universal Serial Bus):**
  - USB-A: Traditional rectangular connector
  - USB-C: Newer, reversible connector
  - USB 2.0, 3.0, 3.1, 3.2: Different speeds

<figure>
    <span>
        <img src="https://goldenmargins.com/wp-content/uploads/2021/07/Numerous-varieties-of-monitor-ports.jpg" style="width: 100%;height: auto;">
    </span>
</figure>

- **Display connections:**
  - HDMI: Standard for TVs and monitors
  - DisplayPort: Higher bandwidth, better for high refresh rates
  - Mini/Micro versions of both

<figure>
    <span>
        <img src="https://www.fibermall.com/blog/wp-content/uploads/2023/10/Gigabit-Ethernet-1024x605.png" style="width: 80%;height: auto;">
    </span>
</figure>

- **Network:**
  - Ethernet (RJ-45): Wired internet connection
  - Wi-Fi: Wireless networking

<figure>
    <span>
        <img src="https://pbs-prod.linustechtips.com/monthly_2021_03/1.jpg.29e2f4207953ac1d8dd07114fb2d2531.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

- **Audio:**
  - 3.5mm audio jacks
  - Digital audio (optical/TOSLINK)

### Using Adapters

<figure>
    <span>
        <img src="https://m.media-amazon.com/images/I/51ST6OSwFdL._AC_UF894,1000_QL80_.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

- **Common adapter types:**
  - USB-C to HDMI/DisplayPort
  - USB-A to USB-C
  - Ethernet to USB
  - "Anything" to "anything-mini"
- **Considerations:**
  - Data transfer speeds may be limited by the adapter
  - Power delivery capabilities vary
  - Quality matters - cheap adapters may be unreliable
- **Practical takeaways:**
  - You don't always need to buy a new cable; you can often find a compatible adapter

## Performance Considerations

### How Much Processing Power Do You Need?

- **Netbook/Chromebook:**
  - Web browsing, document editing
  - Cloud-based applications
  - Minimal local storage
- **Laptop:**
  - Office productivity
  - Light gaming
  - Media consumption
- **Workstation:**
  - Professional 3D/video work
  - Scientific computing
  - Virtualization
- **Practical takeaways:**
  - Buy for your actual use case, not specifications alone;
  - Consider future needs but don't overspend on power you won't use

## Maintenance and Protection

### Device Drivers

- **What are they?** Software that allows your OS to communicate with hardware
- **Importance:**
  - Enable full hardware functionality
  - Provide security updates
  - Fix bugs and improve performance
- **Practical takeaways:**
  - Keep drivers updated, especially for graphics cards and networking components

### Power Protection

<figure>
    <span>
        <img src="https://m.media-amazon.com/images/I/710DLDf3ZQL._AC_UF894,1000_QL80_.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

- **Surge protectors:**
  - Protect against voltage spikes
  - Have limited lifespan
  - Should be replaced every 2-3 years

<figure>
    <span>
        <img src="https://m.media-amazon.com/images/I/51V6xSCNAlS._AC_UF894,1000_QL80_.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

- **UPS (Uninterruptible Power Supply):**

  - Provides battery backup during outages
  - Protects against power fluctuations
  - Allows for proper shutdown

- **Practical takeaways:**
  - A quality surge protector is the minimum protection;
  - A UPS is essential for desktop computers in areas with unreliable power

### Warranty and Coverage

- **Manufacturer warranty:**
  - Standard coverage
  - Extended warranty options
- **Practical takeaways:**
  - You may have manufacturer warranty, even if you didn't buy extra coverage
  - Check your warranty status and register your products

### Practical Data Management

- **Backup strategies:**
  - Differs depending on personal vs business use
  - Automated backup solutions
  - Cloud vs multiple external drives
  - Off site backups for critical data
- **File organization:**
  - Consistent folder structures
  - Descriptive file naming
  - Regular digital decluttering
- **Practical takeaways:**
  - Set up automated backups
  - Make sure you know which of your files are being backed up

### System Images and Restore Points

- **System images:**
  - Complete snapshot of your entire system
  - Useful for cloning an environment to multiple machines
- **System restore points:**
  - Snapshot of system files and settings
  - Doesn't affect personal files
  - Useful for rolling back problematic updates
- **Practical takeaways:**
  - Enable automatic restore points
  - If you regularly set up machines in the same way, use images instead of manually installing software

---

## Conclusion: Making Informed Decisions

- Hardware choices should match your actual usage patterns
- Focus on balanced systems rather than maximizing single components
- Proper protection (both physical and electrical) prevents costly damage
- Good data practices prevent catastrophic information loss
