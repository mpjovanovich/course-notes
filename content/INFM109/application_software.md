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
    - [Design Considerations](#design-considerations)
    - [Productivity Applications](#productivity-applications)
    - [Graphics Technologies](#graphics-technologies)
      - [Bitmap/raster graphics](#bitmapraster-graphics)
      - [Vector graphics](#vector-graphics)
      - [Compression](#compression)
  - [Software Business \& Management](#software-business--management)
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
- **Remote**: Applications that run on a remote server and are accessed over a network, usually through a web browser

#### Native vs Web

- **Native**: Applications built specifically for one operating system or platform, using that platform's own tools and APIs
- **Web**: Applications built using web technologies (HTML/CSS/JavaScript)

~.focusContent.note

**Local vs Remote** and **Native vs Web** are independent classifications. A web app can be packaged and installed locally as a "hybrid" app (e.g., Spotify's desktop app), or run remotely straight from a browser (e.g., Google Docs).

**Mobile** is not a separate technology - it's a device category. A mobile app can be built natively for iOS/Android, or built with web technologies and wrapped for mobile deployment. The same Local vs Remote and Native vs Web distinctions still apply.

/~

~.focusContent.exercise

**Real-World Examples:**

- **Local + Native**: Adobe Photoshop, Microsoft Word (desktop)
- **Remote + Web**: Google Docs, Netflix in browser
- **Local + Web**: Spotify desktop app, Slack desktop app (hybrid)
- **Mobile + Native**: Instagram (iOS/Android app)

/~

### Design Considerations

- **Mobile-first design**: Prioritizing mobile device interfaces
- **Responsive design**: Adapting interfaces to different screen sizes
- **Cross-platform development**: Tools for building across multiple platforms

### Productivity Applications

Commonly used office software are called **productivity applications**. These include:

- Word processing
- Spreadsheets
- Presentation software
- Email
- Calendar
- AI-assisted tools (e.g., Copilot in Office, Gemini in Google Workspace) - increasingly built directly into the categories above rather than standing apart as their own product

~.focusContent.demo

**Spreadsheet Tips and Tricks:**

Demo1: Basic Formulas

| Tax Rate:   | 15%     |                  |                |
| ----------- | ------- | ---------------- | -------------- |
| Item        | Price   | Tax Amount       | Total          |
| ----------- | ------- | ---------------- | -------------- |
| Item 1      | 10.00   | =B3\*$B$1        | =B3+C3         |
| Item 2      | 25.00   | =B4\*$B$1        | =B4+C4         |
| Item 3      | 15.00   | =B5\*$B$1        | =B5+C5         |
| Item 4      | 50.00   | =B6\*$B$1        | =B6+C6         |
| Grand Total |         |                  | =SUM(D3:D6)    |

AI tools can now generate formulas like these for you - but you still need to be able to read a formula and verify it's doing what you expect. Treat the walkthrough below as building that "read and verify" skill.

Demo2: [Kaggle CVE 2024 Database: Exploits, CVSS, OS](https://www.kaggle.com/datasets/manavkhambhayata/cve-2024-database-exploits-cvss-os)

- Auto set column widths
- Bold top row
- Freeze top row
- Filter OS to "Google Android 13.0, Google Android 12.0"
- Sort by CVSS
- Remove filter

/~

~.focusContent.note

Several common keyboard shortcuts are fairly universal, and are essential for productivity. Here are my recommendations in order of priority:

| Shortcut | Action        |
| -------- | ------------- |
| Ctrl+S   | Save          |
| Ctrl+Z   | Undo          |
| Ctrl+C   | Copy          |
| Ctrl+X   | Cut           |
| Ctrl+V   | Paste         |
| Ctrl+A   | Select all    |
| Ctrl+F   | Find          |
| Ctrl+B   | Bold          |
| Ctrl++   | Increase zoom |
| Ctrl+-   | Decrease zoom |

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

### Payment Models

- **Perpetual License**: One-time purchase for indefinite use
  - Traditional retail software packages
  - May include optional paid upgrades for new versions
- **Subscription**: Recurring payment for continued access
  - Software as a Service (SaaS)
  - Usually includes continuous updates and cloud features
- **Freemium**: Core features are free, with paid tiers for advanced features or removing limits
  - Common in mobile apps and consumer SaaS
  - May monetize through in-app purchases, ads, or upgrade prompts

~.focusContent.note

**Open Source Software**

Open source software is software who's source code is available to the public, usually online. Although it is often free, it is not always free.

Some advantages of open source software include:

- **Flexibility**: Can be easily modified to meet specific needs
- **Transparency**: Source code is publicly available for scrutiny. Free testing and development by many people.
- **Community**: Many open source projects have large communities of users who contribute to the project.

Example: [GIMP](https://github.com/GNOME/gimp)

/~

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
