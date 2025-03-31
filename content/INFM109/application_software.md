---
title: Application Software
course: INFM109
---

~.toc

- [Software Applications: Types, Uses, and Management](#software-applications-types-uses-and-management)
  - [Types of Applications](#types-of-applications)
    - [Classification of Applications](#classification-of-applications)
      - [Local vs Remote](#local-vs-remote)
      - [Native vs Web](#native-vs-web)
    - [Productivity Applications](#productivity-applications)
    - [Graphics Technologies](#graphics-technologies)
      - [Bitmap/raster graphics](#bitmapraster-graphics)
      - [Vector graphics](#vector-graphics)
      - [Compression](#compression)
  - [Software Business \& Management](#software-business--management)
    - [Design Considerations](#design-considerations)
    - [Payment Models](#payment-models)
    - [Target Markets](#target-markets)
    - [Software Updates and Versioning](#software-updates-and-versioning)

/~

# Software Applications: Types, Uses, and Management

## Types of Applications

### Classification of Applications

Applications may run in a variety of environments, and often it takes multiple machines working together to run a single application.

~.focusContent.note

The line between one category and another can be blurry. There are very few applications that do not use the Internet in some way.

/~

#### Local vs Remote

- **Local**: Applications installed and executed directly on the device's hardware
- **Remote**: Applications accessed through a web browser without local installation

#### Native vs Web

- **Native**: Applications designed specifically for a particular operating system or platform
- **Web**: Applications accessed through a web browser without local installation
- **Mobile**: Applications designed for mobile devices (smartphones, tablets)

### Productivity Applications

Commonly used office software are called **productivity applications**. These include:

- Word processing
- Spreadsheets
- Presentation software
- Email
- Calendar

~.focusContent.example

**Tips and Tricks:**

- Word Processing:

  - Headers and footers for consistent page formatting
  - Page breaks to control document flow
  - Show/hide formatting marks (¶) to see hidden characters
  - Styles for consistent formatting throughout document
  - Find and Replace with formatting options

- Spreadsheets:

  - Basic formulas (SUM, AVERAGE, COUNT)
  - Auto-fill for series and formulas
  - Cell references (absolute vs. relative)
  - Freeze panes to lock rows/columns
  - Conditional formatting to highlight data

/~

~.focusContent.note

Several common keyboard shortcuts are fairly universal, and are essential for productivity:

| Shortcut | Action     |
| -------- | ---------- |
| Ctrl+S   | Save       |
| Ctrl+Z   | Undo       |
| Ctrl+C   | Copy       |
| Ctrl+X   | Cut        |
| Ctrl+V   | Paste      |
| Ctrl+A   | Select all |
| Ctrl+F   | Find       |
| Ctrl+B   | Bold       |

/~

### Graphics Technologies

#### Bitmap/raster graphics

<figure>
    <span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1200px-Sunflower_from_Silesia2.jpg?20091008132228" style="width: 80%;height: auto;">
    </span>
</figure>

Pixel-based images. Best for smooth gradients and natural images like photographs.

- JPEG
- PNG
- GIF
- WebP

#### Vector graphics

<figure>
    <span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Vector-based_example.svg" style="width: 80%;height: auto;">
    </span>
</figure>

Mathematical formula-based images. Best for simple shapes with hard edges (illustrations, logos, diagrams) and text.

- SVG

~.focusContent.exercise

**Examining an SVG Image**

Let's try saving the SVG image above and opening it in a text editor to see the mathematical formula that defines it!

/~

#### Compression

Compression is the process of reducing the size of a file or data. This is useful for saving space and for transmitting data more quickly.

<figure>
    <span>
        <img src="https://bitmovin.com/wp-content/uploads/2020/03/LossyCompressionDoggo.jpeg" style="width: 100%;height: auto;">
    </span>
</figure>

There are two types of compression:

| Compression Type | Description                                                                                                                |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Lossless         | The original data can be perfectly reconstructed from the compressed data.                                                 |
| Lossy            | The original data cannot be perfectly reconstructed from the compressed data. Information is discarded during compression. |

It may seem as if we should always use lossless compression, but in many cases, the quality difference is not noticeable, and the file size is significantly reduced.

Lossy compression is most visible in JPEG images, where the image can become _pixelated_ at lower quality settings. These out of place pixels are called _artifacts_.

~.focusContent.lookout

**Sending High Quality Images**

If you've ever saved the image from a text message and tried to open it on a computer with a larger screen, you may have noticed that the image is pixelated. This is because the image was compressed using lossy compression for the smaller screen of the phone.

If you need to send a high quality image to someone, you should send the original image file, not a compressed version.

/~

## Software Business & Management

### Design Considerations

- **Mobile-first design**: Prioritizing mobile device interfaces
- **Responsive design**: Adapting interfaces to different screen sizes
- **Cross-platform development**: Tools for building across multiple platforms

~.focusContent.note

We will talk about why applications have different versions for different platforms in the next lecture.

/~

### Payment Models

- **Perpetual License**: One-time purchase for indefinite use
  - Traditional retail software packages
  - May include optional paid upgrades for new versions
- **Subscription**: Recurring payment for continued access
  - Software as a Service (SaaS)
  - Usually includes continuous updates and cloud features

### Target Markets

- **Business-to-Consumer (B2C)**
  - Personal productivity tools (e.g., Microsoft 365 Personal)
  - Mobile apps
  - Consumer creative software
- **Business-to-Business (B2B)**
  - Enterprise software solutions
  - Custom-developed applications
  - Professional tools and services

### Software Updates and Versioning

With **semantic versioning**, software versions are typically written as `MAJOR.MINOR.PATCH`.

- **Major version**: Significant changes to the software. Breaks backward compatibility.
- **Minor version**: New features or improvements. Compatible with previous version.
- **Patch version**: Bug fixes and security updates. Compatible with previous version.
