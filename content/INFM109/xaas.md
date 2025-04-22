---
title: XaaS
course: INFM109
---

~.toc

- [XaaS](#xaas)
  - [The Cloud](#the-cloud)
  - [SaaS (Software as a Service)](#saas-software-as-a-service)
    - [What is SaaS?](#what-is-saas)
    - [Perpetual vs Subscription Software Licenses](#perpetual-vs-subscription-software-licenses)
    - [SaaS Examples](#saas-examples)
    - [Thin vs Thick Client](#thin-vs-thick-client)
  - [PaaS (Platform as a Service)](#paas-platform-as-a-service)
    - [What is PaaS?](#what-is-paas)
    - [PaaS Examples](#paas-examples)
  - [IaaS (Infrastructure as a Service)](#iaas-infrastructure-as-a-service)
    - [What is IaaS?](#what-is-iaas)
    - [IaaS Examples](#iaas-examples)
    - [Case Study: AWS](#case-study-aws)

/~

# XaaS

"XaaS" is an acronym for "Anything as a Service". These service based models represent a shift in how software is delivered and consumed.

We will look at a few examples of XaaS in this module.

## The Cloud

The cloud is a model for delivering computing services over the Internet.

<figure>
    <span>
        <img src="https://www.hpe.com/content/dam/hpe/shared-publishing/images-norend/screenshots/Cloud-computing-infographic-4-3.jpg" style="width: 100%;height: auto;">
    </span>
</figure>

- Compute services are not tied to any physical hardware
- Compute resources are allocated dynamically; "checked out" from a pool of available resources
- Users pay for what they use, typically on a subscription or as-needed basis

## SaaS (Software as a Service)

### What is SaaS?

**Software as a Service** is a model where software is delivered to the user as a service.

In the past:

- Software downloaded and installed on computer
- Only option was purchase perpetual software license

~.focusContent.note

### Perpetual vs Subscription Software Licenses

**Perpetual licenses** are purchased for a fixed price and the software is owned by the user.

**Subscription licenses** are purchased on a recurring basis and the software is not owned by the user. Examples may include annual or monthly subscriptions.

**Pay-as-you-go licenses** are another option and are purchased on a usage basis.

/~

With SaaS:

- Software is hosted in the cloud
- Software is accessed via the Internet
- Software updates are automatically applied

Who uses SaaS?

- Organizations
- Individual consumers

### SaaS Examples

- Microsoft Office 365
- Google Docs
- Netflix
- Spotify

~.focusContent.exercise

### Thin vs Thick Client

<figure>
    <span>
        <img src="https://valto.co.uk/wp-content/uploads/2022/10/office-365-apps.jpg" style="width: 80%;height: auto;">
    </span>
</figure>

Many software vendors offer two versions of their software:

- **Thin client** - Software that is delivered to the user via the Internet
- **Thick client** - Software that is downloaded and installed on the user's computer or mobile device

A couple of examples include Microsoft Office and Spotify.

SaaS can refer to either thin or thick clients.

**Critical Thinking Exercise:**

For the two examples above, why might a user choose one (thin or thick) over the other? Consider:

- Collaboration capabilities
- Offline access capabilities
- Network bandwidth and latency
- Compute constraints

/~

## PaaS (Platform as a Service)

### What is PaaS?

From [Google: What is PaaS?](https://cloud.google.com/learn/what-is-paas):

> Platform as a Service (PaaS) is a complete cloud environment that includes everything developers need to build, run, and manage applications—from servers and operating systems to all the networking, storage, middleware, tools, and more.

From [Microsoft: What is PaaS?](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-paas):

> Platform as a service (PaaS) is a cloud computing model that provides developers with a platform to build, deploy, and manage applications without worrying about the underlying infrastructure. It allows developers to focus on writing code, while the cloud provider handles the infrastructure, maintenance, and scalability.
>
> PaaS includes everything needed for application development, including operating systems, runtime environments, databases, development tools, middleware, and hosting and scaling capabilities.

With Paas:

- Focus is on Software Development
- Cloud provider handles the infrastructure, maintenance, and scalability

Who uses PaaS and what for?

**Development Teams:**

- Building and testing web applications
- Developing and testing mobile apps
- Creating custom software solutions

**Operations Teams:**

- Managing deployment environments
- Configuring and scaling infrastructure
- Maintaining application platforms

~.focusContent.note

PaaS is designed for technical professionals, not end-users of software applications.

With PaaS, users don't typically "log in" to a machine. Instead, they use the platform to build, test, and deploy their applications automatically.

/~

### PaaS Examples

The "big three" cloud providers offer PaaS:

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Google App Engine](https://cloud.google.com/appengine)
- [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/)

## IaaS (Infrastructure as a Service)

### What is IaaS?

From [Google: What is IaaS?](https://cloud.google.com/learn/what-is-iaas):

> IaaS, or Infrastructure as a Service, is a cloud computing model that provides on-demand access to computing resources such as servers, storage, networking, and virtualization.

From [Microsoft: What is IaaS?](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-iaas):

> IaaS is a cloud computing model that delivers on-demand servers, storage, and networking, allowing businesses to rent resources, scale flexibly, and reduce hardware costs.

With IaaS you can rent:

- Virtual servers
- Virtual storage
- Virtual networking resources
- Virtual machines

Main benefits are:

- Flexibility
- Scalability
- Cost-effectiveness
- Fault tolerance / high availability

~.focusContent.note

**Where is my data stored?**

As with all XaaS models, the user doesn't know or need to know anything about the underlying infrastructure.

The cloud provider may have many data centers around the world, and abstracts the user from the physical location and hardware of the infrastructure.

A better question would be: "Who currently has ownership of my data?"

/~

### IaaS Examples

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Azure Virtual Machines](https://azure.microsoft.com/en-us/services/virtual-machines/)

### Case Study: AWS

<figure>
    <span>
        <img src="https://pbs.twimg.com/media/GT7EZwzXUAELtWe?format=jpg&name=4096x4096" style="width: 100%;height: auto;">
    </span>
</figure>

~.focusContent.exercise

Amazon has invested heavily in Internet and data hosting infrastructure. Let's take a closer look:

Watch the video below. As you are watching:

- Make a list; anytime you hear something that Amazon has done to improve their web hosting infrastructure, write it down!
- Submit your list as today's discussion assignment.

_Remote students - if you want to mute and watch on your local computer while we watch here you can do so, but you must watch it right now while we watch it here._

<iframe width="560" height="315" src="https://www.youtube.com/embed/q6WlzHLxNKI?si=s3O90sle546EI6Sm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- Afterward we will review the list.

/~
