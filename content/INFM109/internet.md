---
title: The Internet
course: INFM109
---

~.toc

- [The Internet](#the-internet)
  - [URLs](#urls)
  - [Client-Server Model](#client-server-model)
  - [HTTP and HTTPS](#http-and-https)
  - [TCP/IP](#tcpip)
  - [Domain Name System (DNS)](#domain-name-system-dns)
  - [Putting it All Together: A Round Trip](#putting-it-all-together-a-round-trip)
  - [Demo: What do Websites Look Like from the Back End?](#demo-what-do-websites-look-like-from-the-back-end)

/~

# The Internet

The **Internet** is a global network that connects computers all around the world. It consists of:

- Physical infrastructure: Cables under the ground and ocean, routers that direct traffic, and other hardware that connects everything together
- Communication protocols: Standardized rules and methods that allow computers to exchange information with each other

~.focusContent.note

The **World Wide Web (WWW)** is what most people think of when they hear "the Internet" - but it's actually just one part of the Internet! The WWW is all the websites and web applications that we can access through our web browsers.

Some things on the WWW:

- Websites (like Facebook, YouTube, or Wikipedia)
- Web applications (like Google Docs or Gmail's web interface)
- Web services that apps use to work (like weather data services)

Some things that use the Internet but are NOT part of the WWW:

- Email
- FTP (File Transfer Protocol, a way to transfer files between computers)
- SSH (Secure Shell, a secure way to connect to other computers)
- DNS (Domain Name System, the system that converts website names to addresses)

The WWW is one part of the larger Internet ecosystem.

/~

## URLs

**URL** = Uniform Resource Locator

We will use the URL diagram below as a reference point for the rest of this section.

<figure>
    <span>
        <img src="https://strategylab.ca/wp-content/uploads/2023/06/Parts-of-a-URL.jpg" style="width: 100%;height: auto;">
    </span>
</figure>

## Client-Server Model

A **client server model** is a way of organizing software so that one program (the client) requests services from another program (the server).

<figure>
    <span>
        <img src="https://www.liquidweb.com/wp-content/uploads/2024/03/client-server-network-1024x653-1.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

**Client** = Browser or a program that requests data from a server (e.g. an "app" on your phone)

**Server** = A program that provides data to a client.

~.focusContent.note

<figure>
    <span>
        <img src="https://www.trystar.com/wp-content/uploads/slider/cache/9a2123c06651b09966e2f65f7ca99c06/Server-Rack-Extra.jpg" style="width: 50%;height: auto;">
    </span>
</figure>

The term "server" is used in two main ways:

1. As software: A **web server** is a program that listens for incoming requests and handles them - just like any other program on a computer.

2. As hardware: A "server" can be the actual physical computer that runs server software. While there are specialized computers built specifically to be servers (like the ones in data centers), technically any computer can act as a server - even your laptop could be one!

/~

## HTTP and HTTPS

HTTP (Hypertext Transfer Protocol) and HTTPS (HTTP Secure) are the main protocols used for communication on the World Wide Web. They define how messages are formatted and transmitted between clients and servers.

When you visit a website:

1. Your browser (the client) sends a **web request** to get information
2. The web server processes this request
3. The server sends back a **web response** with the requested information

The only difference between HTTP and HTTPS is that HTTPS encrypts the data being sent, making it secure from tampering or snooping.

~.focusContent.demo

Want to see HTTP in action? Try this:

1. Press F12 to open your browser's developer tools
2. Click the "Network" tab
3. Refresh this page

You'll see all the requests and responses between your browser and our web server. Each entry shows:

- The requested resource (HTML, images, CSS, etc.)
- Response status
- Size of the data
- Time taken

Click any entry to see detailed information about that request and response.

/~

## TCP/IP

TCP/IP is the fundamental protocol suite of the Internet, consisting of two main parts:

**TCP (Transmission Control Protocol)**

Handles reliable delivery of data:

- Breaks large messages into smaller packets
- Makes sure all packets arrive correctly
- Puts the packets back together in the right order
- Requests retransmission of any lost packets

**IP (Internet Protocol)**

Handles addressing and routing:

- Gives every device on the Internet a unique address (IP address)
- Routes packets from sender to receiver across the network

Every device on the Internet needs an IP address:

- Your home network has a **public IP address** visible to the Internet
- Devices inside your network (phones, laptops) have **private IP addresses**

~.focusContent.exercise

Try checking your computer's IP addresses using the commands below:

```bash
## BASH
ifconfig

## PowerShell
ipconfig
```

You'll see both IPv4 (like 192.168.1.1) and newer IPv6 (like fe80::215:5dff:fe15:fcaf) addresses.

When you make a request to a website, your IP request is included in the request packet. This lets the server know where to send the response.

/~

## Domain Name System (DNS)

**DNS** converts domain names into IP addresses:

`google.com` → `172.217.14.206`

DNS exists because:

- Computers communicate using IP addresses
- Domain names are easier for people to remember and type
- Anyone can purchase a domain name for an annual fee.

~.focusContent.exercise

The `ping` command is used to check the connection to a server. It sends a series of packets to the server and measures the time it takes for them to return.

To stop pinging, press `Ctrl+C`.

Try pinging Google's IP address and paste it into your browser's address bar.

```bash
## BASH / PowerShell
ping google.com
```

/~

## Putting it All Together: A Round Trip

When you visit a website, here's what happens:

1. Your browser sends a request to a web server
2. The request is broken into packets and sent across the Internet
3. The web server receives the packets and prepares a response
4. The response is broken into packets and sent back across the Internet
5. Your browser receives and reassembles the packets, then displays the page

The Internet is **decentralized** - packets can take different routes to their destination. If some network connections fail, packets will be automatically routed through working connections instead.

## Demo: What do Websites Look Like from the Back End?

~.focusContent.demo

In this demo, we'll look at a real web server in action:

- Using SSH to connect to a live web server
- Starting and stopping the web server program
- Seeing what happens when requests arrive
- Making changes to the website and watching them go live

This will give you a behind-the-scenes look at how websites actually run.

```
http://174.138.52.187:81
```

/~

## VPN, Proxy, and Private Browsing

### Private Browsing

Convenience feature in browsers to clear cookies and cache, not save history, etc.

Meant to give some degree of privacy to users sharing a single device.

Does **not** hide the origin of requests.

### Proxy

A proxy server is a server that acts as an intermediary for requests from clients seeking resources from other servers.

Meant to hide the origin of requests.

When I visit a website through a proxy, the request will go to the proxy server first, and then to the website.

### VPN

**VPN** = Virtual Private Network

You are "inside" a private network, and the VPN creates a secure tunnel to the Internet.

Meant to provide access to a private network (private IP addresses). E.g. - none of you can "talk" to my lab machine.

When I VPN to Ivy Tech then visit a website, the request will go to the Ivy Tech network first, and then to the website.

## Password Management

Practical Password Management Tips:

- Use multifactor authentication whenever possible
- Use a unique password for each site; DO NOT USE THE SAME PASSWORD FOR MULTIPLE SITES
