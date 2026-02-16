---
title: Virtualization
course: INFM109
---

~.toc

/~

# Virtualization

<figure>
    <span>
        <img src="https://www.racksolutions.com/news//app/uploads/AdobeStock_87909563.jpg" style="width: 100%;height: auto;">
    </span>
</figure>

## What is Virtualization?

**Virtualization** is a technology that allows resources on a single physical machine, the **host machine** to be shared between multiple virtual components.

These shared resources may include:

- CPU (Central Processing Unit)
- Memory (RAM)
- Storage (HDD, SSD)
- Network

These can be used to create **virtual machines** that work the same as a physical computer.

~.focusContent.note

You may also hear the term **container**. This is closely related to virtualization - it offers another way to share resources on the host machine.

/~

## Conceptual Model

<figure>
    <span>
        <img src="images/virtualization.svg" style="width: 100%;height: auto;">
    </span>
</figure>

Before virtualization each server or computer could only run one operating system at a time, and was primarily used for a single purpose. For example, it might host a web application.

With virtualization, a single physical machine can host multiple "virtual machines" that operate independently of each other.

The **host machine** typically serves as nothing more than a pool of resources to be split up among **guest machines**.

## Why Use Virtualization?

<figure>
    <span>
        <img src="images/virtualization_model2.svg" style="width: 100%;height: auto;">
    </span>
</figure>

**Cost Savings**: Renting only the amount of resources needed, rather than buying a whole physical machine.

**Resource Efficiency**: Resources are allocated as needed, resulting in less "dead zones" in the hardware.

**Easy Backup and Recovery**: Virtual machines can be easily copied, moved, or restored from backups.

**Temporal Availability**: Virtual machines can be created (provisioned) and destroyed (decommissioned) quickly, rather than being tied to a physical machine.

## Cloud Computing

**Cloud Computing** is a model for delivering computing services over the Internet that are not tied to any physical location.

Virtualization is the foundation technology that makes cloud computing possible.

Cloud computing can take many forms.

~.focusContent.note

### Personal Cloud Use

<div style="display: flex; align-items: center; gap: 20px; flex-wrap: nowrap; width: 80%;">
    <img src="https://www.icloud.com/icloud_logo/icloud_logo.png" style="flex: 1; height: auto; max-height: 80px; object-fit: contain;">
    <img src="https://150835488.v2.pressablecdn.com/wp-content/uploads/2025/02/app-page-logo_onedrive.png" style="flex: 1; height: auto; max-height: 80px; object-fit: contain;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png" style="flex: 1; height: auto; max-height: 80px; object-fit: contain;">
</div>

You've probably used cloud computing in your daily life:

- Microsoft OneDrive
- Google Drive
- iCloud
- Dropbox

/~

There are also many software products that run in the cloud. We will discuss these in more detail in the next section.

### Cloud Use for IT Professionals

IT professionals such as software developers and DevOps engineers use cloud computing and virtualization to:

- Test software in a controlled environment
- Deploy applications quickly
- Scale services up or down based on demand

~.focusContent.example

**Growing an Application On Demand**

<figure>
    <span>
        <img src="https://www.cloudkeeper.com/cms-assets/s3fs-public/inline-images/table-02.png" style="width: 100%;height: auto;">
    </span>
</figure>

Your team has built a great software application - it has done so well that your server can no longer keep up with all of the users that you have.

Because your application is deployed in the cloud using virtualization, you can easily **scale up** the number of servers to handle the increased load - it's as simple as adding more copies of your application to more virtual servers.

/~
