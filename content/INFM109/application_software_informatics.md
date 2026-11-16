---
title: Application Software in Informatics
course: INFM109
---

<!--
TENTATIVE DRAFT - Lecture 1 of 2 on software (Lecture 2: System Software and the Operating System).
Software development and web development are covered in Module 04 and are out of scope here.

Timing (75 min):
  Overview 5 | Taxonomy 12 (incl. 3 min grid activity) | Apps & OS 8 | Data 12 | Humans 10
  Selecting & Adopting 10 | Critical Perspectives 8 | Case Study / Audit 7 | Summary 3

Notes to self:
  - [ ] Choose the case study (candidates below in "Case Study and Application Audit")
  - [ ] Prepare 2-3 live demos (e.g., the same file opened in different applications)
  - [ ] Trim candidates if short on time: detail in "Selecting and Adopting Software", extra topics in "Critical Perspectives"
-->

~.toc

- [Application Software in Informatics](#application-software-in-informatics)
  - [Learning Objectives](#learning-objectives)
  - [Overview](#overview)
  - [A Taxonomy of Application Software](#a-taxonomy-of-application-software)
    - [By Purpose](#by-purpose)
    - [By Delivery Model](#by-delivery-model)
  - [Applications and the Operating System](#applications-and-the-operating-system)
    - [What the OS Provides](#what-the-os-provides)
    - [Why Applications Are Platform Specific](#why-applications-are-platform-specific)
  - [Data in Applications](#data-in-applications)
    - [Data Capture](#data-capture)
    - [Data Storage](#data-storage)
    - [Open vs Proprietary File Formats](#open-vs-proprietary-file-formats)
    - [Interoperability](#interoperability)
    - [Vendor Lock-in](#vendor-lock-in)
  - [Humans and Applications](#humans-and-applications)
    - [Usability](#usability)
    - [Accessibility](#accessibility)
    - [Why Good Software Gets Rejected](#why-good-software-gets-rejected)
  - [Selecting and Adopting Software](#selecting-and-adopting-software)
    - [Commercial vs Open Source](#commercial-vs-open-source)
    - [Build vs Buy](#build-vs-buy)
    - [Licensing Models](#licensing-models)
    - [Total Cost of Ownership](#total-cost-of-ownership)
    - [Integration and Legacy Systems](#integration-and-legacy-systems)
    - [Change Management](#change-management)
  - [Critical Perspectives](#critical-perspectives)
    - [Privacy and Telemetry](#privacy-and-telemetry)
    - [The Subscription Economy](#the-subscription-economy)
    - [Obsolescence and End of Support](#obsolescence-and-end-of-support)
    - [Dark Patterns and Default Settings](#dark-patterns-and-default-settings)
  - [Case Study and Application Audit](#case-study-and-application-audit)
  - [Summary](#summary)

/~

# Application Software in Informatics

## Learning Objectives

By the end of this lecture, you should be able to:

1. Classify application software by purpose and by delivery model.
2. Explain how applications depend on the operating system.
3. Describe how applications capture, store, and exchange data, and why interoperability matters.
4. Evaluate software using usability, accessibility, cost, and licensing criteria.
5. Identify the privacy, ethical, and organizational issues that application software raises.

## Overview

~.focusContent.exercise

**Warm-up:**

How many distinct applications did you use before arriving today? Count them - alarm clock, messaging, maps, music, email, a bank app, a learning management system...

/~

**Application software** is software that performs tasks _for users_ - writing a paper, booking an appointment, analyzing a dataset. This is in contrast to **system software**, which manages the computer itself (we'll cover that next lecture).

From an informatics point of view, applications are where **people**, **data**, and **organizational goals** meet. A hospital's records system isn't just a program - it's also the nurses who use it, the patient data inside it, and the hospital's need to deliver (and bill for) care.

## A Taxonomy of Application Software

There are thousands of applications, so it helps to sort them. We'll use two different lenses: **what the application is for** (purpose) and **how it reaches the user** (delivery model).

### By Purpose

| Category                        | What it does                                         | Examples                                                          |
| ------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------- |
| Productivity                    | General-purpose document and data work               | Word processors, spreadsheets, presentation software              |
| Enterprise Systems              | Run the core operations of an organization           | ERP (SAP), CRM (Salesforce), supply chain management              |
| Domain-Specific                 | Serve the needs of one field or profession           | Electronic health records (EHR), GIS, library systems, SPSS / R   |
| Creative and Media              | Create and edit images, audio, and video             | Photoshop, GIMP, Audacity, DaVinci Resolve                        |
| Communication and Collaboration | Help people talk to and work with each other         | Email, Slack, Zoom, Microsoft Teams, shared workspaces (Notion)   |

~.focusContent.note

**Enterprise Acronyms**

- **ERP (Enterprise Resource Planning)**: Ties together finance, HR, purchasing, and inventory into one shared system
- **CRM (Customer Relationship Management)**: Tracks every interaction an organization has with its customers
- **SCM (Supply Chain Management)**: Tracks goods from suppliers, through production, to customers

/~

~.focusContent.example

**Domain-Specific Software: GIS**

<figure>
    <span>
        <img src="images/qgis-gis-application-interface.png" alt="QGIS application showing a map of median income in Houston" style="width: 100%;height: auto;">
    </span>
    <figcaption>
        <p>
        Source: <a href="https://commons.wikimedia.org/wiki/File:QGIS_Interface_Screenshot_with_Map_of_Median_Income_in_Houston_(2010).png">Wikimedia Commons</a> (CC0)
        </p>
    </figcaption>
</figure>

A **Geographic Information System (GIS)** such as QGIS or ArcGIS combines map data with other data - here, census income data - so that patterns can be seen spatially. City planners, public health departments, and emergency services all depend on GIS software.

/~

### By Delivery Model

| Delivery Model          | Where it runs                          | Who maintains it                    | Examples                           |
| ----------------------- | -------------------------------------- | ----------------------------------- | ---------------------------------- |
| Installed (desktop)     | Your computer                          | You / your IT department            | Microsoft Excel (desktop), GIMP    |
| Mobile app              | Your phone or tablet                   | You, through an app store           | Instagram, your bank's app         |
| Web-based application   | A server, accessed through a browser   | The provider                        | Google Docs, Canvas LMS            |
| Software as a Service   | The provider's cloud, by subscription  | The provider                        | Salesforce, Microsoft 365, Zoom    |

~.focusContent.note

**Blurry Categories**

The lines between categories blur constantly:

- Microsoft Teams is a desktop app, a mobile app, _and_ a web app - all sharing the same cloud data.
- Excel is a productivity tool, but many organizations run critical "enterprise" processes out of a spreadsheet.
- Almost every installed application now checks in with the Internet for updates, licensing, or syncing.

/~

~.focusContent.lookout

**Who Controls SaaS?**

With installed software, _you_ decide when (or if) to update. With SaaS, the vendor can change features, pricing, or terms of service overnight - and your data lives on their servers. The shift to SaaS has quietly moved control from the user to the provider.

/~

~.focusContent.exercise

**Activity: The Taxonomy Grid**

With a partner, place five applications you use regularly on the grid below. Some may belong in more than one cell!

|                    | Installed | Mobile | Web-based | SaaS |
| ------------------ | --------- | ------ | --------- | ---- |
| Productivity       |           |        |           |      |
| Enterprise         |           |        |           |      |
| Domain-Specific    |           |        |           |      |
| Creative and Media |           |        |           |      |
| Communication      |           |        |           |      |

/~

## Applications and the Operating System

<figure>
    <span>
        <img src="images/user-application-operating-system-hardware-layers.svg" alt="Layers of a computer system: user, application, operating system, hardware" style="width: 50%;height: auto;">
    </span>
    <figcaption>
        <p>
        Source: <a href="https://commons.wikimedia.org/wiki/File:Operating_system_placement.svg">Wikimedia Commons</a> (CC BY-SA 3.0)
        </p>
    </figcaption>
</figure>

Applications almost never talk to the hardware directly. Instead, they ask the **operating system (OS)** to do things on their behalf.

### What the OS Provides

- **Resource management**: Shares the CPU, memory, and storage between all running applications
- **File access**: Opening, saving, and organizing files
- **Hardware abstraction**: An application can "print" without knowing which printer model you own
- **User interface services**: Windows, menus, buttons, fonts, and notifications that applications can reuse

### Why Applications Are Platform Specific

An application built for Windows usually won't run on macOS (and vice versa). This is because each OS offers:

- Different **system calls** - the requests an application makes to the OS
- Different **APIs (Application Programming Interfaces)** - the libraries of ready-made functions applications build on
- Different **binary formats** - the way an executable program file is laid out (`.exe` on Windows, Mach-O on macOS, ELF on Linux)

Consequences of this:

- **Compatibility**: Software must be built (and tested) separately for each platform
- **App stores**: Platform owners (Apple, Google, Microsoft) control a major channel for distributing applications
- **Cross-platform tools**: Web apps and frameworks that let one application run on several platforms
- **Virtualization and compatibility layers**: Running another OS inside your own (a virtual machine), or translating one platform's requests into another's (e.g., Wine for running Windows programs on Linux)

~.focusContent.note

**Looking Ahead**

Everything we have discussed so far relies on a layer we haven't examined yet. Next lecture, we'll look at the operating system itself.

/~

## Data in Applications

From an informatics perspective, an application is largely a machine for **capturing**, **storing**, and **exchanging** data.

### Data Capture

How does data get _into_ an application?

- **Forms**: A patient intake form, a course registration page
- **Sensors**: GPS in a phone, a heart-rate monitor, a barcode scanner
- **Imports**: Uploading a spreadsheet or loading a file exported from another system
- **User-generated content**: Posts, photos, reviews, and comments

### Data Storage

| Storage Approach | Description                                                        | Example                             |
| ---------------- | ------------------------------------------------------------------ | ----------------------------------- |
| Local files      | Data saved as files on the user's own device                       | A `.docx` file in your Documents    |
| Databases        | Structured data managed by a database system, often on a server    | A library's catalog of holdings     |
| Cloud storage    | Data stored on a provider's servers and synced across devices      | OneDrive, Google Drive, iCloud      |

### Open vs Proprietary File Formats

- **Open format**: The specification is published, and anyone may build software that reads or writes it (e.g., `.csv`, `.txt`, `.png`, `.pdf`, `.odt`)
- **Proprietary format**: The specification is controlled by one company, and may be undocumented or restricted (e.g., `.psd` for Photoshop, older `.doc` files)

Why does this matter?

- **Longevity**: Will you still be able to open the file in 20 years - after the company is gone?
- **Choice**: Can you switch to a different application without losing your work?
- **Fidelity**: Formatting is often lost or garbled when one application "translates" another's proprietary format.

~.focusContent.demo

**Same File, Different Applications**

Open the same `.docx` file in Microsoft Word, Google Docs, and LibreOffice Writer. What changes? Look at fonts, page breaks, comments, and tracked changes.

Then open a `.csv` file in a spreadsheet application _and_ in a plain text editor. Why does the `.csv` look the same everywhere?

/~

### Interoperability

**Interoperability** is the ability of different systems to exchange data and make use of it. This depends on:

- **Exchange formats**: Common formats both systems understand (CSV, JSON, XML)
- **APIs**: Defined ways for one application to request data from another
- **Standards**: Agreements, often industry-specific, about how data is structured
  - **HL7 FHIR**: Exchanging electronic health records
  - **MARC 21**: Describing items in library catalogs

<figure>
    <span>
        <img src="images/xkcd-standards-comic.png" alt="xkcd Standards comic" style="width: 80%;height: auto;">
    </span>
    <figcaption>
        <p>
        Source: <a href="https://xkcd.com/927/">xkcd: Standards</a> (CC BY-NC 2.5)
        </p>
    </figcaption>
</figure>

~.focusContent.example

**Moving Records Between Systems**

A clinic is switching from one electronic health record system to another. Questions to ask:

- Can the old system export _all_ of the data, or only some of it?
- Do both systems support a common standard (e.g., FHIR)?
- Do fields line up? One system may store "Name" as a single field while the other uses "First" and "Last."
- What happens to attachments, scanned documents, and audit history?

The same questions come up when a library moves its catalog from one integrated library system to another.

/~

### Vendor Lock-in

**Vendor lock-in** occurs when switching away from a product is so costly or difficult that an organization is effectively stuck with it.

How it arises:

- Data stored in proprietary formats, or with limited export options
- Custom workflows and integrations built around one product
- Staff training and habits tied to one interface
- Multi-year contracts and bundled pricing

~.focusContent.lookout

**The Cost of Lock-in**

A locked-in organization loses its bargaining power. When the vendor raises prices, discontinues a feature, or is acquired by another company, the organization has little choice but to accept it. Ask about data export **before** adopting software, not after.

/~

## Humans and Applications

### Usability

**Usability** is how easily and effectively people can use an application to reach their goals. Key qualities:

- **Learnability**: How quickly can a new user accomplish basic tasks?
- **Efficiency**: Once learned, how quickly can tasks be performed?
- **Error prevention**: Does the design make mistakes hard to make, and easy to recover from (e.g., undo, confirmation dialogs)?

### Accessibility

<figure>
    <span>
        <img src="images/refreshable-braille-display.jpg" alt="Refreshable Braille display" style="width: 60%;height: auto;">
    </span>
    <figcaption>
        <p>
        Source: <a href="https://commons.wikimedia.org/wiki/File:Refreshable_Braille_display.jpg">Wikimedia Commons</a> (CC BY-SA 3.0)
        </p>
    </figcaption>
</figure>

**Accessibility** means that people with disabilities can use the application. Software should work with **assistive technology** such as:

- Screen readers (e.g., NVDA, JAWS, VoiceOver)
- Refreshable braille displays (pictured above)
- Screen magnifiers and high-contrast modes
- Voice control and alternative input devices

**Inclusive design** goes further - designing from the start for the full range of people who might use a product, rather than bolting on accessibility at the end.

~.focusContent.note

**Legal and Ethical Obligations**

In the U.S., the Americans with Disabilities Act (ADA) and Section 508 of the Rehabilitation Act set accessibility requirements. In 2024, the Department of Justice adopted a rule requiring state and local government web content and mobile apps - including those of public colleges - to meet the **WCAG 2.1 AA** standard.

Beyond the law: an inaccessible application excludes people from work, education, and services.

/~

### Why Good Software Gets Rejected

<figure>
    <span>
        <img src="images/xkcd-workflow-comic.png" alt="xkcd Workflow comic" style="width: 40%;height: auto;">
    </span>
    <figcaption>
        <p>
        Source: <a href="https://xkcd.com/1172/">xkcd: Workflow</a> (CC BY-NC 2.5)
        </p>
    </figcaption>
</figure>

Technically excellent software can still fail if people won't (or can't) use it. Common reasons:

- **Poor fit with workflow**: The software forces people to work in a way that doesn't match how the job is really done
- **Training gaps**: Users are given a login, but not the time or support to learn the system
- **Resistance to change**: People are comfortable with the old way, and the benefits of the new system aren't obvious to them

~.focusContent.example

**A Technically Sound System, Abandoned**

In 2003, Cedars-Sinai Medical Center in Los Angeles suspended a multimillion-dollar computerized physician order entry system only months after rollout. The system worked, but physicians objected that it slowed them down, interrupted them with too many alerts, and didn't match how they actually cared for patients.

The lesson: success is measured by whether people use the software to do their jobs - not by whether the software runs.

/~

## Selecting and Adopting Software

### Commercial vs Open Source

- **Commercial (closed source)** software is sold by a vendor that keeps the source code private. The vendor typically provides support, updates, and accountability.
- **Open source** software makes its source code publicly available to use and modify. It is often free to obtain, but support may come from a community or from a paid third party.

Free to download doesn't mean free to run - someone still has to install, support, and maintain it.

### Build vs Buy

Organizations can either **buy** an existing product, or **build** (or commission) custom software.

| Option | Advantages                                       | Disadvantages                                           |
| ------ | ------------------------------------------------ | ------------------------------------------------------- |
| Buy    | Available now, proven, vendor handles updates    | May not fit the workflow exactly; dependence on vendor  |
| Build  | Fits the organization's exact needs              | Expensive, slow, and the organization must maintain it  |

Most organizations buy for common needs (email, payroll) and consider building only for what makes them unique.

### Licensing Models

| Model        | How it works                                          | Example                                     |
| ------------ | ----------------------------------------------------- | ------------------------------------------- |
| Perpetual    | Pay once, use that version indefinitely               | Older boxed versions of Microsoft Office    |
| Subscription | Pay monthly or yearly for continued access            | Adobe Creative Cloud, Microsoft 365         |
| Per-seat     | Pay per named user (or device)                        | Most business SaaS products                 |
| Site license | One fee covers everyone at an organization or campus  | A university-wide statistics package        |

### Total Cost of Ownership

The **Total Cost of Ownership (TCO)** is the full cost of a piece of software over its lifetime - not just the price tag.

- **Licenses**: The purchase or subscription price
- **Training**: Staff time spent learning the system
- **Support**: Help desk, vendor support contracts, IT staff
- **Migration**: Moving data out of the old system and into the new one
- **Integration**: Connecting the software to the organization's other systems

~.focusContent.exercise

**Check-In: Is Free Really Free?**

An office of 50 people is considering replacing a paid word processor with a free, open source alternative. List three costs that the office would still face.

/~

### Integration and Legacy Systems

<figure>
    <span>
        <img src="images/xkcd-dependency-comic.png" alt="xkcd Dependency comic" style="width: 40%;height: auto;">
    </span>
    <figcaption>
        <p>
        Source: <a href="https://xkcd.com/2347/">xkcd: Dependency</a> (CC BY-NC 2.5)
        </p>
    </figcaption>
</figure>

New software rarely arrives into an empty organization. It must work alongside **legacy systems** - older systems that are still in use because they are critical, expensive to replace, or nobody fully understands them anymore.

A new application that can't exchange data with the existing billing, scheduling, or student records systems creates double data entry and errors.

### Change Management

**Change management** is the people side of adopting software.

- **Stakeholders**: Identify everyone affected - end users, managers, IT, customers, patients - and involve them early
- **Training**: Plan for it, schedule it, and budget for it
- **Rollout strategies**:
  - **Big bang**: Everyone switches on the same day
  - **Phased**: One department or feature at a time
  - **Pilot**: A small group tries it first, and the lessons are applied before the full rollout
  - **Parallel**: The old and new systems run side by side for a period

~.focusContent.lookout

**The Riskiest Rollout**

A big-bang rollout is the fastest and cheapest - right up until something goes wrong. Then, everyone is affected at once, and there is no old system to fall back on.

/~

## Critical Perspectives

### Privacy and Telemetry

Applications often collect far more data than they need to do their job.

- **Permissions**: Access to your location, contacts, camera, microphone, or files
- **Telemetry**: Usage data automatically sent back to the vendor - what you click, how long you stay, when the app crashes
- **Third parties**: Analytics and advertising code embedded inside apps can share data with other companies

~.focusContent.exercise

**Check Your Permissions**

On your phone, open the settings for app permissions (location, microphone, or camera). Find one app that has access you didn't expect. Does it really need it?

/~

### The Subscription Economy

More and more software is rented rather than owned:

- Stop paying, and you may lose access to the software - and sometimes to your own files.
- Prices and features can change at any time.
- On the plus side: continuous updates, lower upfront costs, and easier access to new features.

### Obsolescence and End of Support

All software eventually reaches **end of support**, when the vendor stops providing updates and security patches. For example, Microsoft ended mainstream support for Windows 10 in October 2025.

End of support can force organizations to replace hardware that still works, or to keep running unsupported software and accept the security risk.

### Dark Patterns and Default Settings

<figure>
    <span>
        <img src="images/dark-patterns-pop-up-example.svg" alt="Example pop-up containing dark patterns" style="width: 50%;height: auto;">
    </span>
    <figcaption>
        <p>
        Source: <a href="https://commons.wikimedia.org/wiki/File:Dark_patterns_example.svg">Wikimedia Commons</a> (CC BY-SA 4.0)
        </p>
    </figcaption>
</figure>

**Dark patterns** (also called **deceptive design**) are interface designs that trick or pressure users into doing things they didn't intend. The pop-up above packs in several:

- **Fake urgency**: The countdown timer and "only 5 coupons left"
- **Social proof**: "67 friends have signed up"
- **Confirmshaming**: The opt-out link reads "I'm boring and like paying full price"
- **Trick wording**: A pre-checked box with a confusing double negative

**Default settings** matter just as much. Most people never change the defaults, so whoever chooses the defaults (e.g., "share usage data: ON") effectively makes the decision for millions of users.

~.focusContent.exercise

**Discussion: Who Is Responsible?**

When an application harms its users - leaks their data, manipulates them, or makes a dangerous error - who is responsible?

- The **vendor** that built it?
- The **organization** that chose and deployed it?
- The **user** who clicked "I Agree"?

/~

## Case Study and Application Audit

<!-- TODO: Choose one activity. Case study candidates: HealthCare.gov launch (2013) or Canada's Phoenix pay system (2016). -->

~.focusContent.exercise

**Option A - Case Study: A Troubled Rollout**

Read the case study handout. Possible cases:

- **HealthCare.gov (2013)**: The U.S. federal health insurance marketplace crashed under load at launch; reportedly only a handful of people managed to enroll on the first day.
- **Phoenix Pay System (Canada, 2016)**: A new federal government payroll system left tens of thousands of public servants overpaid, underpaid, or not paid at all.

In groups, identify what went wrong in terms of:

- **Data**: Was data migrated, integrated, and validated correctly?
- **Usability**: Could people actually use the system?
- **Adoption**: Were users trained and the rollout planned?
- **Cost**: What did the failure cost, and who paid?

/~

~.focusContent.exercise

**Option B - Application Audit**

In pairs, choose an application you use every day and fill in the worksheet:

| Inputs (what data goes in?) | Outputs (what comes out?) | Stakeholders (who is affected?) | Privacy Concerns |
| --------------------------- | ------------------------- | ------------------------------- | ---------------- |
|                             |                           |                                 |                  |

/~

## Summary

- Applications can be classified by **purpose** (productivity, enterprise, domain-specific, creative, communication) and by **delivery model** (installed, mobile, web, SaaS).
- Applications depend on the **operating system** for resources, files, hardware access, and interface services - which is why they are platform specific.
- Applications **capture, store, and exchange data**. Open formats and standards make interoperability possible; proprietary formats can lead to vendor lock-in.
- Software should be evaluated on **usability, accessibility, cost, and licensing** - and the total cost of ownership is always more than the license.
- Applications raise **privacy, ethical, and organizational** questions that go beyond the technology.

~.focusContent.note

**Key Takeaway**

Application software is a **socio-technical system** - the people, data, and organization around it matter as much as the program itself.

/~

**Next lecture:** [System Software and the Operating System](system_software_operating_system.html) - the layer that underpins everything we discussed today.
