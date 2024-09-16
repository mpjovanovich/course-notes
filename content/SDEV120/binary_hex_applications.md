---
title: Applications of Binary and Hexadecimal
course: SDEV120
---

~~wrapHtml(div,schedule){

- [Applications of Binary and Hexadecimal](#applications-of-binary-and-hexadecimal)
  - [Domains](#domains)
    - [Arithmetic Logic](#arithmetic-logic)
  - [File Permissions](#file-permissions)
  - [Networking](#networking)
    - [MAC address](#mac-address)
    - [IP addresses](#ip-addresses)
    - [Graphics](#graphics)
    - [Error Detection](#error-detection)
    - [Parity](#parity)
    - [Encoding and Decoding](#encoding-and-decoding)
  - [Operations](#operations)
    - [Bitmasking](#bitmasking)
      - [Color Masking](#color-masking)
      - [Subnet Masking](#subnet-masking)
      - [Boolean Flags](#boolean-flags)
    - [Bitshifting](#bitshifting)

}

# Applications of Binary and Hexadecimal

## Domains

### Arithmetic Logic

The Arithmetic Logic Unit (ALU) is the part of the Central Procesing Unit (CPU) that performs arithmetic and logical operation. We will discuss it more formally later on.

We can perform arithmetic operations using binary numbers.

<!-- ~demo{

TODO: ... half-adder, full-adder ...

} -->

## File Permissions

In UNIX, file permissions are often set using octal notation.

~~fig{https://miro.medium.com/v2/0*AAZ3ClsEyE1qFtyT.jpg}

~fig{https://miro.medium.com/v2/1*Qd9k5fOi4crDc33l0VveaQ.png}

- First three bits = owner permissions
- Next three bits = group permissions
- Last three bits = everyone else's (other) permissions.

~~demo{

Setup: create a text file in Windows, test.txt We can open and edit the file.

```bash
# Check file permissions
ls -l /mnt/c/Users/mpjov/test.txt
# Make the file read-only by setting Owner: read, Group: read, Others: read
chmod 444 /mnt/c/Users/mpjov/test.txt
```

- What is 444 in binary?
- Compare against UNIX file permissions positions

}

## Networking

Hexadecimal is used in networking to represent:

### MAC address

A MAC (Media Access Control) address is a unique identifier assigned to a network interface at the physical layer.

`00:1A:2B:3C:4D:5E`

- How many bits are represented by this address?
- Hint: how many bits does each hex digit (nibble) represent?

### IP addresses

An IP (Internet Protocol) address is a unique identifier assigned to a network interface at the network layer.

- IPv4 addresses are represented as four octets (8 bits each, 0-255) separated by periods.

`127.0.0.1`

- IPv6 addresses are represented as eight groups of four hexadecimal digits separated by colons.

`2001:0db8:85a3:0000:0000:8a2e:0370:7334`

Which has a larger address space, IPv4 or IPv6?

~~demo{

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

}

### Graphics

Color values are often represented in hexadecimal.

- RGB (Red, Green, Blue) values are represented as three octets (8 bits each, 0-255) in hexadecimal.

<span style="font-weight:bold;color:#000000">`#000000`</span> - Black

<span style="font-weight:bold;color:#ffffff">`#FFFFFF`</span> - White

<span style="font-weight:bold;color:#FF0000">`#FF0000`</span> - Red

<span style="font-weight:bold;color:#00FF00">`#00FF00`</span> - Green

<span style="font-weight:bold;color:#0000FF">`#0000FF`</span> - Blue

~~exercise{

Try changing the color values in the following example using hexadecimal:

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="OJeYZzd" data-pen-title="Header, 2 columns, footer responsive version" data-user="Mike-Jovanovich" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Mike-Jovanovich/pen/OJeYZzd">
  Header, 2 columns, footer responsive version</a> by Mike Jovanovich (<a href="https://codepen.io/Mike-Jovanovich">@Mike-Jovanovich</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

}

### Error Detection

### Parity

### Encoding and Decoding

## Operations

### Bitmasking

**Bitmasking** is the process of using a mask to turn bits on or off.

- **_AND_** - Turn bits off
- **_OR_** - Turn bits on
- **_XOR_** - Toggle bits

#### Color Masking

We can get the red, green, or blue values from a color using a mask. This is often used in graphics applications (e.g. a photo filter).

~~example{

Given the color <span style="font-weight:bold;color:#e5c1c1">`#e5c1c1`</span>, use the mask <span style="font-weight:bold;color:#ff0000">`#ff0000`</span> to extract the red value.

- At the bit level, this mask is `11111111.00000000.00000000`
- Bitwise AND leaves only the red value.

Red value = <span style="font-weight:bold;color:#ff0000">`#e50000`</span>

}

#### Subnet Masking

A subnet mask is used to divide an IP address into network and host portions. This is useful for routing traffic on a network.

~~example{

Given:

IP address = `192.168.1.1`
Subnet mask = `255.255.255.0'

Perform a bitwise AND operation to determine the network portion of the IP addresss.

- At the bit level this mask is: `11111111.11111111.11111111.00000000`
- Bitwise AND leaves only the network portion.

Network portion = `192.168.1`

}

#### Boolean Flags

Boolean flags are used to store multiple true/false values in a single byte. Each bit represents a different flag. It's more efficient than using multiple bytes.

~~example{

For a graphics program, we can use a single byte to store the following flags:

### Bitshifting
