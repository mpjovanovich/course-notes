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
        <img src="images/virtualization_model1.svg" style="width: 100%;height: auto;">
    </span>
</figure>

Before virtualization each server or computer could only run one operating system at a time, and was primarily used for a single purpose. For example, it might host a web application.

With virtualization, a single physical machine can host multiple "virtual machines" that operate independently of each other.

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

~.focusContent.example

**Software Development**

_Without Virtualization_

You're a software developer who has spent weeks writing an application and are ready to deploy (move the application code) to a server.

But then... it doesn't work because the server isn't running the same way as your personal computer! You stay up all night and drive home at 4am looking foward to your next day that starts in two hours.

<figure>
    <span>
        <img src="https://media.glamour.com/photos/57f2699f9a82193d19bdd22b/master/pass/crying-at-work.jpg" style="width: 60%;height: auto;">
    </span>
</figure>

_With Virtualization_

You've learned your lesson and instead you now use a **virtual environment** on your personal computer that exactly matches the server.

You can confidently deploy your application to the server and know that it will work.

<figure>
    <span>
        <img src="https://40e507dd0272b7bb46d376a326e6cb3c.cdn.bubble.io/cdn-cgi/image/w=512,h=512,f=auto,dpr=2.5,fit=contain/f1702225796164x239307219801281120/AI-fashion-design-Silver%2C-metalic-underbust-corset.-Short-dress-with-long%2C-1731Sun-1-.jpeg" style="width: 60%;height: auto;">
    </span>
</figure>

/~
