---
title: Hardware Selection & Care
course: INFM109
---

~.toc

- [Computer Hardware: Choosing and Maintaining Your System](#computer-hardware-choosing-and-maintaining-your-system)
  - [Graphics](#graphics)
  - [Power](#power)
  - [Connectivity](#connectivity)
    - [Types of Ports](#types-of-ports)
    - [Using Adapters](#using-adapters)
  - [Performance Considerations](#performance-considerations)
  - [Reading a Spec Sheet](#reading-a-spec-sheet)
  - [Maintenance and Protection](#maintenance-and-protection)
    - [Device Drivers](#device-drivers)
    - [Power Protection](#power-protection)
    - [Warranty and Coverage](#warranty-and-coverage)
    - [Practical Data Management](#practical-data-management)
    - [System Images and Restore Points](#system-images-and-restore-points)
  - [Conclusion: Making Informed Decisions](#conclusion-making-informed-decisions)

/~

# Computer Hardware: Choosing and Maintaining Your System

## Graphics

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

- **GPUs beyond gaming:**

  - Video encoding/decoding (rendering, streaming)
  - AI/ML workloads - the same parallel processing that renders graphics quickly is used to train and run the AI models covered earlier in this course

- **Practical takeaways:**
  - For basic office work and web browsing, integrated graphics are sufficient;
  - specialized work requires a dedicated GPU
  - Make sure your card fits in your chassis!

## Power

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
  - Bluetooth: Short-range (~30 ft) wireless connection for peripherals (mice, keyboards, headphones) and audio - not used for internet access

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

## Reading a Spec Sheet

~.focusContent.exercise

**In-Class Exercise: Reading a Spec Sheet**

Using what you've learned about CPUs, RAM, storage, graphics, and ports, decode the listing below:

> **Example Laptop**
>
> - CPU: Intel Core i5-1340P (12 cores, up to 4.6 GHz)
> - RAM: 16GB DDR5
> - Storage: 512GB NVMe SSD
> - Graphics: Integrated Intel Iris Xe
> - Ports: 2x USB-C (Thunderbolt 4), 1x USB-A, HDMI, 3.5mm audio jack
> - Battery: Up to 12 hours

Questions:

- What does each specification mean, in your own words?
- Is this machine best suited for everyday use, gaming, or professional creative/technical work? Why?
- If this machine felt slow in a year, what would you consider upgrading first?

/~

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
