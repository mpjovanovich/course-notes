---
title: Applications of Binary and Hexadecimal
course: SDEV120
---

~.toc

- [Applications of Binary and Hexadecimal](#applications-of-binary-and-hexadecimal)
  - [Applications](#applications)
    - [Arithmetic Logic](#arithmetic-logic)
    - [File Permissions](#file-permissions)
    - [Networking](#networking)
      - [MAC address](#mac-address)
      - [IP addresses](#ip-addresses)
      - [Graphics](#graphics)
    - [Error Detection and Correction](#error-detection-and-correction)
      - [Checksums, Digests, and Hashes](#checksums-digests-and-hashes)
  - [Operations](#operations)
    - [Bitmasking](#bitmasking)
      - [Boolean Flags](#boolean-flags)
      - [Color Masking](#color-masking)
      - [Subnet Masking](#subnet-masking)
    - [Bitshifting](#bitshifting)

/~

# Applications of Binary and Hexadecimal

## Applications

### Arithmetic Logic

The Arithmetic Logic Unit (ALU) is the part of the Central Procesing Unit (CPU) that performs arithmetic and logical operation. We will discuss it more formally later on.

We can perform arithmetic operations using binary numbers.

<!-- #### Half-Adder Circuit -->

<!-- TODO: think logicly already has an example -->

<!-- #### Full-Adder Circuit -->

<!-- TODO: think logicly already has an example -->

### File Permissions

In UNIX, file permissions are often set using octal notation.

<figure>
    <span>
        <img src="https://miro.medium.com/v2/0*AAZ3ClsEyE1qFtyT.jpg" style="width: 60%;">
    </span>
</figure>

<figure>
    <span>
        <img src="https://miro.medium.com/v2/1*Qd9k5fOi4crDc33l0VveaQ.png" style="width: 50%;">
    </span>
</figure>

- First three bits = owner permissions
- Next three bits = group permissions
- Last three bits = everyone else's (other) permissions.

~.focusContent.demo

Setup: create a text file in Windows, test.txt We can open and edit the file.

```bash
# Check file permissions
ls -l /mnt/c/Users/mpjov/test.txt
# Make the file read-only by setting Owner: read, Group: read, Others: read
chmod 444 /mnt/c/Users/mpjov/test.txt
```

- What is 444 in binary?
- Compare against UNIX file permissions positions

/~

### Networking

Hexadecimal is used in networking to represent:

#### MAC address

A MAC (Media Access Control) address is a unique identifier assigned to a network interface at the physical layer.

`00:1A:2B:3C:4D:5E`

- How many bits are represented by this address?
- Hint: how many bits does each hex digit (nibble) represent?

#### IP addresses

An IP (Internet Protocol) address is a unique identifier assigned to a network interface at the network layer.

- IPv4 addresses are represented as four octets (8 bits each, 0-255) separated by periods.

`127.0.0.1`

- IPv6 addresses are represented as eight groups of four hexadecimal digits separated by colons.

`2001:0db8:85a3:0000:0000:8a2e:0370:7334`

Which has a larger address space, IPv4 or IPv6?

~.focusContent.demo

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

#### Graphics

Color values are often represented in hexadecimal.

- RGB (Red, Green, Blue) values are represented as three octets (8 bits each, 0-255) in hexadecimal.

<span style="font-weight:bold;color:#000000">`#000000`</span> - Black

<span style="font-weight:bold;color:#ffffff">`#FFFFFF`</span> - White

<span style="font-weight:bold;color:#FF0000">`#FF0000`</span> - Red

<span style="font-weight:bold;color:#00FF00">`#00FF00`</span> - Green

<span style="font-weight:bold;color:#0000FF">`#0000FF`</span> - Blue

~.focusContent.exercise

Try changing the color values in the following example using hexadecimal:

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="OJeYZzd" data-pen-title="Header, 2 columns, footer responsive version" data-user="Mike-Jovanovich" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Mike-Jovanovich/pen/OJeYZzd">
  Header, 2 columns, footer responsive version</a> by Mike Jovanovich (<a href="https://codepen.io/Mike-Jovanovich">@Mike-Jovanovich</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

/~

### Error Detection and Correction

<!-- #### Parity

Parity is a method of error detection that uses an extra bit to ensure the number of bits is even or odd.

... Even parity ...

... Odd parity ... -->

#### Checksums, Digests, and Hashes

- A **checksum** is calculated by adding the bytes in a message and storing the result in a separate byte. Useful for checking small amount of data.

- A **digest** is a fixed-size string that represents the contents of a file. The function used to calculate the digest is called a **hash function**. Useful for checking larger amounts of data.

~.focusContent.example

```bash
# We create an awesome program, and host it on our website.
# We provide a checksum and MD5 digest for users to verify the
# file's integrity.
echo "Hey, I'm the file." > test.exe
sum test.exe    # Checksum
md5sum test.exe # MD5 digest

# Bad actor changes the file and distributes it,
# pretending it's authentic.
echo "I've come to ruin your computer." > test2.exe

# Our friend downloads the file and checks the checksum
# to make sure it's the same as the original.
sum test2.exe
md5sum test2.exe
```

/~

<!--
No, TMI
### Gray Codes

Gray codes are used in digital communication systems to prevent errors when transitioning between binary values. -->

<!-- ### Compression

#### Huffman Coding

... Huffman coding ...

#### Run-Length Encoding

... Run-length encoding ... -->

## Operations

### Bitmasking

**Bitmasking** is the process of using a mask to turn bits on or off.

- **_AND_** - Filter bits (turn a subset of bits off)
- **_OR_** - Turn bits on (regardless of current value)
- **_XOR_** - Toggle bits (turn bits on if they are off, and off if they are on)

#### Boolean Flags

A **bit array** is a data structure that uses a single byte to store multiple true/false values.

- Each bit is known as a **flag**
- The flags represent different boolean values.
- More efficient than using multiple bytes.

~.focusContent.example

Given a bitmap with four flags that correspond to the following options:

- DARK_MODE (1st flag)
- NOTIFICATIONS (2nd flag)
- AUTO_SAVE (3rd flag)
- FULL_SCREEN (4th flag)

Let's toggle some options using bitwise operations in Python.

_This is not something we'll do in this course, but it's a fun example._

```python
# Set all options to off to start.
# Note that we're only using the first four bits.
# Trace the binary values as you go through the operations.
flags = 0b00000000

# Turon on NOTIFICATIONS:
# (OR)
flags = flags | 0b01000000

# Toggle DARK_MODE) on or off:
# (XOR)
flags = flags ^ 0b10000000

# Check if AUTO_SAVE is on:
# (AND)
# Note that 1 = True, 0 = False
dark_mode_enabled = flags & 0b00100000
```

/~

#### Color Masking

We can get the red, green, or blue values from a color using a mask. This is often used in graphics applications (e.g. a photo filter).

~.focusContent.example

Given the color <span style="font-weight:bold;color:#e5c1c1">`#e5c1c1`</span>, use the mask <span style="font-weight:bold;color:#ff0000">`#ff0000`</span> to extract the red value.

- At the bit level, this mask is `11111111.00000000.00000000`
- Bitwise AND leaves only the red value.

Red value = <span style="font-weight:bold;color:#ff0000">`#e50000`</span>

/~

#### Subnet Masking

A subnet mask is used to divide an IP address into network and host portions. This is useful for routing traffic on a network.

~.focusContent.example

Given:

IP address = **`192.168.1.1`**
Subnet mask = **`255.255.255.0'**

Perform a bitwise AND operation to determine the network portion of the IP addresss.

- At the bit level this mask is: `11111111.11111111.11111111.00000000`
- Bitwise AND leaves only the network portion.

Network portion = **`192.168.1`**

/~

### Bitshifting
