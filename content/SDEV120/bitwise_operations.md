---
title: Bitwise Operations
course: SDEV120
---

~.toc

- [Bitwise Operations](#bitwise-operations)
  - [Operator Symbols](#operator-symbols)
  - [Bitmasking](#bitmasking)
    - [Graphics Applications](#graphics-applications)
    - [Networking Applications](#networking-applications)
  - [Boolean Flags](#boolean-flags)

/~

# Bitwise Operations

Many times in computing, we need to manipulate individual bits of data. We can use **bitwise operations** to do this.

These operations follow the same logical rules as the Boolean operations we discussed earlier.

## Operator Symbols

| Symbol | Operation | Use Case                |
| ------ | --------- | ----------------------- |
| &      | AND       | Filter bits             |
| \|     | OR        | Turn bits on            |
| ^      | XOR       | Toggle bits             |
| ~      | NOT       | Invert bits for masking |

## Bitmasking

A **bitmask** is a pattern of bits that is used to enable or disable specific bits in a byte.

We can use bitmasks to turn specific bits on or off.

~.focusContent.example.mathTable.hideHeaderRow.firstColLabels.lastRowResult

In this example we apply a bitwise AND operation to a byte.

The mask effectively filters the bits we want to extract.

_Starting bits:_ **`00101101`**

_Mask:_ **`00001111`**

|               |     |     |     |     |     |     |     |     |
| ------------- | --- | --- | --- | --- | --- | --- | --- | --- |
| Starting bits | 0   | 0   | 1   | 0   | 1   | 1   | 0   | 1   |
| Mask          | 0   | 0   | 0   | 0   | 1   | 1   | 1   | 1   |
| Result        | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   |

_Result:_ **`00001101`**

/~

### Graphics Applications

**Using Hexadecimal for Color Values**

Color values are often represented in hexadecimal.

- RGB (Red, Green, Blue) values are represented as three octets (8 bits each, 0-255) in hexadecimal.

<span style="font-weight:bold;color:#000000">`#000000`</span> - Black

<span style="font-weight:bold;color:#ffffff">`#FFFFFF`</span> - White

<span style="font-weight:bold;color:#FF0000">`#FF0000`</span> - Red

<span style="font-weight:bold;color:#00FF00">`#00FF00`</span> - Green

<span style="font-weight:bold;color:#0000FF">`#0000FF`</span> - Blue

---

**Masking a Color Value**

We can get the red, green, or blue values from a color using a mask. This is often used in graphics applications (e.g. a photo filter).

~.focusContent.example

Given the color <span style="font-weight:bold;color:#e5c1c1">`#e5c1c1`</span>, use the mask <span style="font-weight:bold;color:#ff0000">`#ff0000`</span> to extract the red value.

- At the bit level, this mask is `11111111.00000000.00000000`

- Remember that hex is just a shorthand way of representing binary numbers. The hex color value is three bytes put together. Each octet represents one of the three color values.

- Bitwise AND leaves only the first octet, which represents the red value.

Red value = <span style="font-weight:bold;color:#e50000">`#e50000`</span>

/~

### Networking Applications

**MAC Address**

A MAC (Media Access Control) address is a unique identifier assigned to a network interface at the physical layer.

`00:1A:2B:3C:4D:5E`

- How many bits are represented by this address?
- Hint: how many bits does each hex digit (nibble) represent?

---

**IP Address**

An IP (Internet Protocol) address is a unique identifier assigned to a network interface at the network layer.

- IPv4 addresses are represented as four octets (8 bits each, 0-255) separated by periods.

`127.0.0.1`

- IPv6 addresses are represented as eight groups of four hexadecimal digits separated by colons.

`2001:0db8:85a3:0000:0000:8a2e:0370:7334`

Which has a larger address space, IPv4 or IPv6?

~.focusContent.exercise

**Checking your IP address**

Follow along and find your own IP address.

Windows users:

```cmd
ipconfig
```

Mac / Linux users:

```bash
ifconfig
```

/~

---

**Subnet Masking**

A subnet mask is used to divide an IP address into network and host portions. This is useful for routing traffic on a network.

~.focusContent.example

Given:

IP address = **`192.168.1.1`**
Subnet mask = **`255.255.255.0'**

Perform a bitwise AND operation to determine the network portion of the IP addresss.

- At the bit level this mask is: `11111111.11111111.11111111.00000000`

- Each number in the IP address is a value in the range 0-255 - in other words, each number is an 8-bit byte.

- Bitwise AND leaves only the first three octets, which represent the network portion.

Network portion = **`192.168.1.0`**

/~

## Boolean Flags

A **bit array** is a data structure that uses a single byte to store multiple true/false values.

- Each bit is known as a **flag**
- The flags represent different boolean values.
- More efficient than using multiple boolean variables for each flag.

~.focusContent.demo

Given a bitmap with four flags that correspond to the following options:

- DARK_MODE (1st flag)
- NOTIFICATIONS (2nd flag)
- AUTO_SAVE (3rd flag)
- FULL_SCREEN (4th flag)

Let's toggle some options using bitwise operations in Python.

_This is not something you'll have to do in this course, it's just a practical example of how bitwise operations are used._

```python
# ############################################################
# Bitwise Operations Example
# An 8-bit byte is the smallest addressable unit of memory in a computer.
# We're only using the first four bits for this example - the rest are zeros.
# We will enable / disable options by setting the positional bits to 1 or 0.
# ############################################################

print("FLAGS: [DARK_MODE, NOTIFICATIONS, AUTO_SAVE, FULL_SCREEN, 0, 0, 0, 0]")

# Set all options to off to start.
flags = 0b00000000
print(f"Flag Values: {flags:08b}")

# Turn on NOTIFICATIONS:
# (OR)
flags = flags | 0b01000000
print(f"Flag Values: {flags:08b}")

# Toggle DARK_MODE on or off:
# (XOR)
flags = flags ^ 0b10000000
print(f"Flag Values: {flags:08b}")

# Toggle DARK_MODE again:
# (XOR)
flags = flags ^ 0b10000000
print(f"Flag Values: {flags:08b}")

# Check if AUTO_SAVE is on:
# (AND)
# The single bit that is extracted from the flags will be 1 if the bit is on,
# and 0 if the bit is off.
dark_mode_enabled = flags & 0b00100000
print(f"Dark Mode Enabled: {dark_mode_enabled}")
```

/~
