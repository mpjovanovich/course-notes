---
title: Networking Communication Patterns
course: INFM109
---

~.toc

- [Networking Communication Patterns](#networking-communication-patterns)
  - [Communication Timing Patterns](#communication-timing-patterns)
    - [Synchronous](#synchronous)
      - [Definition](#definition)
      - [Characteristics](#characteristics)
      - [Examples](#examples)
    - [Asynchronous](#asynchronous)
      - [Definition](#definition-1)
      - [Characteristics](#characteristics-1)
      - [Examples](#examples-1)
  - [Communication Models](#communication-models)
    - [Client-Server](#client-server)
      - [Definition](#definition-2)
      - [Characteristics](#characteristics-2)
      - [Examples](#examples-2)
    - [Peer-to-Peer (P2P)](#peer-to-peer-p2p)
      - [Definition](#definition-3)
      - [Characteristics](#characteristics-3)
      - [Examples](#examples-3)
  - [Data Exchange Patterns](#data-exchange-patterns)
    - [Persistent Connection](#persistent-connection)
      - [Definition](#definition-4)
      - [Characteristics](#characteristics-4)
      - [Examples](#examples-4)
    - [Push](#push)
      - [Definition](#definition-5)
      - [Characteristics](#characteristics-5)
      - [Examples](#examples-5)
    - [Pull](#pull)
      - [Definition](#definition-6)
      - [Characteristics](#characteristics-6)
      - [Examples](#examples-6)
    - [Polling](#polling)
      - [Definition](#definition-7)
      - [Characteristics](#characteristics-7)
      - [Examples](#examples-7)
- [Protocols Introduction](#protocols-introduction)
- [The OSI Model](#the-osi-model)

/~

# Networking Communication Patterns

## Communication Timing Patterns

### Synchronous

<figure>
    <span>
        <img src="https://lifehacker.com/imagery/articles/01HF2GHSHNMHE0PKCW32DH0BCG/hero-image.jpg" style="width: 60%;height: auto;">
    </span>
</figure>

#### Definition

A pattern where both parties communicate in real-time with minimal delay.

#### Characteristics

- The connection is alive for the duration of the conversation.
- Both parties are "waiting" for the other to respond; they do not do other work while waiting.

#### Examples

- Phone calls
- Video conferencing
- Some chat systems

### Asynchronous

<figure>
    <span>
        <img src="https://www.rd.com/wp-content/uploads/2024/06/Scam-Text-Messages-GettyImages-2.png" style="width: 60%;height: auto;">
    </span>
</figure>

#### Definition

Parties do not need to be available at the same time; messages can be stored and retrieved later.

#### Characteristics

- The connection is not alive for the duration of the conversation.
- Messages can be stored and retrieved later.

#### Examples

- Email
- SMS (text messages)

## Communication Models

### Client-Server

<figure>
    <span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/1200px-Client-server-model.svg.png" style="width: 80%;height: auto;">
    </span>
</figure>

#### Definition

A model where one device (the client) requests resources or services from another device (the server).

#### Characteristics

- Many clients may connect to one server
- Clients initiate requests; servers respond
- Centralized control (server manages resources)
- May be async or sync

#### Examples

- Web browsing (browser = client, web server = server)
- Email
- File downloads

### Peer-to-Peer (P2P)

<figure>
    <span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/P2P_network.svg" style="width: 80%;height: auto;">
    </span>
</figure>

#### Definition

A model where each device (peer) can act as both a client and a server, sharing resources directly.

#### Characteristics

- No central server
- Peers connect directly to each other
- May be async or sync

#### Examples

- File sharing (e.g. BitTorrent)
- Video conferencing (e.g. Zoom)
- Chat applications (e.g. Discord)

## Data Exchange Patterns

Assuming the server has some data that the client needs, there are four main patterns for how the client can get that data:

| Pattern           | Initiator | Connection Type      | Timing     | Use Cases                        |
| ----------------- | --------- | -------------------- | ---------- | -------------------------------- |
| Active Connection | Both      | Persistent           | Sync/Async | Chat, streaming, online gaming   |
| Push              | Server    | Persistent/On-demand | Async      | Push notifications, live updates |
| Pull              | Client    | On-demand            | Async      | Web browsing, API requests       |
| Polling           | Client    | Repeated             | Async      | Email checking, software updates |

### Persistent Connection

<figure>
    <span>
        <img src="https://images.ctfassets.net/cpumif18y1gd/3eKQDniB5cF9tuAtyRuAfN/3929339d8379f3ebd396452352eba415/wordpress-imported-image-26125.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

#### Definition

A connection that remains open for the duration of the communication, allowing data to be exchanged at any time.

#### Characteristics

- The connection stays alive for the entire session.
- Can support multiple messages in both directions.
- May be synchronous or asynchronous, depending on implementation.
- Enables real-time or near-real-time communication.

#### Examples

- Real-time chat applications (e.g., instant messaging)
- Streaming media (e.g., video/audio streaming)
- Online gaming
- WebSockets

### Push

<figure>
    <span>
        <img src="https://lifehacker.com/imagery/articles/01HF2GNNPXP4RDFPR5J5M7KNEN/hero-image.fill.size_1200x675.png" style="width: 80%;height: auto;">
    </span>
</figure>

#### Definition

The server sends (pushes) data to the client as soon as it becomes available, without the client needing to request it each time.

#### Characteristics

- The server initiates data transfer to the client.
- The client passively receives updates.
- Typically asynchronous communication.
- Efficient for timely updates.

#### Examples

- Mobile app push notifications
- Server-sent events (SSE) in web applications
- Live sports score updates
- Weather alerts
- Phone lockscreen "widgets"

### Pull

<figure>
    <span>
        <img src="https://www.wikihow.com/images/thumb/6/61/Refresh-a-Page-Step-2-Version-2.jpg/v4-460px-Refresh-a-Page-Step-2-Version-2.jpg" style="width: 100%;height: auto;">
    </span>
</figure>

#### Definition

The client requests (pulls) data from the server whenever it needs information.

#### Characteristics

- The client initiates each data request.
- The server responds only when requested.
- Asynchronous communication.
- Suitable for on-demand data access.

#### Examples

- Web browsing (loading a webpage)
- API requests (fetching data from a server)
- Downloading files

### Polling

<figure>
    <span>
        <img src="https://winblogs.thesourcemediaassets.com/sites/2/2019/04/e72f421e5e0cd1ad79bb4dde65111ba4.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

#### Definition

The client repeatedly requests (polls) the server at regular intervals to check if new data is available.

#### Characteristics

- The client sends requests on a schedule (e.g., every few seconds).
- The server responds with new data if available.
- Automated, repeated form of pull.
- Asynchronous communication.
- Can be less efficient due to repeated requests.

#### Examples

- Email clients checking for new mail
- Applications checking for software updates
- Chat apps without real-time updates

---

<!-- TODO: Move this -->

# Protocols Introduction

Protocols are standardized rules for communication.

In each of the above patterns, the client / server may send messages back and forth to coordinate the transfer of the **payload** (the actual data being transferred).

- Rules for how to establish a connection (handshake)
- Rules for how to break the connection (teardown)
- Address of the sender and receiver
- Type / format of payload (html, image, video, etc.)
- Data about the payload (size, compression, encryption, etc.)

~.focusContent.example

 <figure>
    <span>
        <img src="https://www.lifewire.com/thmb/irn835md4Hf2FmoEbh1rdAVNjTs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tcp-headers-f2c0881ea4c94e919794b7c0677ab90a.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

The TCP header format specifies how the computer should interpret the information. Each field has a set length, position, and purpose.

If the standard was not followed exactly, the data would be misinterpreted.

/~

~.focusContent.example

**Paper Airplane Protocol**

You have developed a paper airplane mode of communication, that you would like to use to serve song lyrics to your friends.

The server, a computer, is very literal. It uses an algorithm to understand the message that was sent, and responds using the same format.

```
Packet Number
Sender Address
Receiver Address
Action
Payload (text data to be transferred)
Data Length (character count of the payload)
Checksum (md5 hash of the payload)
```

**Client**

_Request_

```
1
Desk 4
Desk 11
Get Lyrics
Beatles;Yellow Submarine;Yellow Submarine
41
666180b3e449222c2241b2afe32bfca3
```

**Server**

_Response_

```
1
Desk 11
Desk 4
Data Transfer
In the time that I
18
9eceaa495884413082c94280d965738e
```

```
2
Desk 11
Desk 4
Data Transfer
was born, lived a man
21
690c8054749a1cb7fb448c5804613dc3
```

```
3
Desk 11
Desk 4
Data Transfer
in a submarine. ^ENDMESSAGE^
28
0582957562b0492f8ad2aa0807ea1154
```

/~

# The OSI Model

<figure>
    <span>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*-hQHFX-UjlruHDf9Je0lXg.png" style="width: 100%;height: auto;">
    </span>
</figure>

Each layer of the model encapsulates information from the layer beneath it, and adds information relevant to the layer above it.

This makes a "sandwich" of information, with the outermost layer being the application layer, and the innermost layer being the physical layer.

<!--

........TODO........

## Protocols

## The OSI Model - A Conceptual Framework

- Overview of the 7-layer OSI model
- Practical significance of each layer:
  - Physical layer
  - Data Link layer
  - Network layer
  - Transport layer
  - Session layer
  - Presentation layer
  - Application layer
- **Packet encapsulation explained**
  - How data is wrapped at each layer
  - Headers and payload concepts

## Practical Networking Protocols

- **Protocol comparison** (reference table 9-8/9-9)
- **When and why to use different protocols**
- Key protocols overview:
  - IP (Internet Protocol)
  - TCP vs UDP
  - HTTP/HTTPS
  - DNS
  - **Bluetooth**
    - Use cases and limitations

## IPv4 vs IPv6

- **IPv4 vs IPv6 detailed comparison**
  - Address space limitations and solutions
  - Header differences and improvements
  - Transition mechanisms
  - Adoption challenges -->
