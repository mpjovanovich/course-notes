---
title: Cyber Defense Strategies
course: INFM109
---

- [Cyberdefense Strategies](#cyberdefense-strategies)
  - [Security Principles](#security-principles)
    - [Shift Left](#shift-left)
      - [What does "shift left" look like for different IT professions?](#what-does-shift-left-look-like-for-different-it-professions)
    - [Principle of Least Privilege](#principle-of-least-privilege)
  - [Technical Controls](#technical-controls)
    - [Hashing and Encryption](#hashing-and-encryption)
      - [Key Differences Between Hashing and Encryption](#key-differences-between-hashing-and-encryption)
      - [Hashing](#hashing)
      - [Encryption](#encryption)
    - [User and Group Permissions](#user-and-group-permissions)
      - [Basic permission types:](#basic-permission-types)
      - [Permission planning questions:](#permission-planning-questions)
  - [Active Threat Monitoring](#active-threat-monitoring)
    - [Threat Intelligence](#threat-intelligence)
      - [Types of threat intelligence:](#types-of-threat-intelligence)
    - [Using CISA Resources](#using-cisa-resources)
  - [Implementing a Comprehensive Defense Strategy](#implementing-a-comprehensive-defense-strategy)
    - [Layered Security (Defense in Depth)](#layered-security-defense-in-depth)
    - [Security Monitoring and Incident Response](#security-monitoring-and-incident-response)
      - [Key monitoring activities:](#key-monitoring-activities)
    - [Building a Security Culture](#building-a-security-culture)
  - [Key Takeaways](#key-takeaways)

# Cyberdefense Strategies

## Security Principles

### Shift Left

TODO: Insert image showing why it's called "shift left"

**Basic concept**: Security should not be an afterthought; it should be considered at the very start of all IT-related activities.

The term "shift left" refers to moving security considerations earlier in any process - whether that's software development, system design, or business planning.

#### What does "shift left" look like for different IT professions?

**Software developers**:

- According to NIST: The cost of correcting a software vulnerability during the development phase is approximately 30-60 times less than the cost of fixing the vulnerability after the program has gone to production
- Implement security reviews during code development
- Use automated security testing tools
- Follow secure coding practices from project start

~.focusContent.demo

TODO: github security alerts demo

/~

**System administrators**:

- Design security into system architecture
- Implement security controls during initial setup
- Plan for security monitoring from day one

~.focusContent.note

You may hear the term **application architecture** in the context of a software system. This refers to how all of the pieces that make up the overall application fit together.

Some examples of incorporating security at the system architecture level include:

- Minimizing the **attack surface** of the applicaition by...
  - Only _exposing_ (opening up for public Internet communication) parts of the application that need to be open to the public.
- Minimizing the **blast radius** by...
  - Using short lived _tokens_ for authentication, so that any attacker who somehow obtains a compromised authentication token only has a short window to launch an attack.

/~

**Business analysts**:

- Communicate with the teams building software to ensure that security best practices are understood.
- Include security requirements in initial project specifications
- Consider security implications during business process design

### Principle of Least Privilege

**Principle of Least Privilege** = Users and systems should be given only the minimum levels of access needed to perform their job functions.

Examples:

- Role Based Authentication (RBAC) TODO: double check this acronym...
- UI should not make visible functionality that users of a particular role don't need to see.
- _Protected pages_ should show as "not found" to unauthenticated users, or reroute to login page.
- Database admin vs read/write vs readonly user

## Technical Controls

### Hashing and Encryption

Two fundamental cryptographic technologies that serve different purposes in cybersecurity.

#### Key Differences Between Hashing and Encryption

| Aspect            | Hashing          | Encryption              |
| ----------------- | ---------------- | ----------------------- |
| **Purpose**       | Verify integrity | Protect confidentiality |
| **Reversible**    | No               | Yes (with key)          |
| **Output length** | Fixed            | Variable                |
| **Key required**  | No               | Yes                     |

#### Hashing

**Purpose**: Verify the integrity of data (ensure it hasn't been changed).

**How it works**: Converts data into a fixed-length string (hash) that uniquely represents the original data. The process cannot be reversed.

**Use cases**:

- Storing passwords securely
- Verifying file integrity
- Digital signatures
- Detecting unauthorized changes to data

~.focusContent.demo

**Hashing Demonstration**

```bash
# Create two files with very similar content
echo "This is unencrypted data." > file1.txt
echo "this is unencrypted data." > file2.txt

# Generate MD5 hashes - note how different they are
md5sum file1.txt
md5sum file2.txt

# Show that even identical files produce identical hashes
cp file1.txt file1_copy.txt
md5sum file1.txt file1_copy.txt
```

**Key takeaway**: Even tiny changes in data produce completely different hashes, making it easy to detect if data has been modified.

/~

#### Encryption

**Purpose**: Protect data from unauthorized viewers during storage or transmission.

**How it works**: Converts readable data (plaintext) into unreadable data (ciphertext) using a key. The process can be reversed with the correct key.

**Use cases**:

- Protecting sensitive files on disk
- Securing data transmitted over networks
- Protecting backups and archives
- Securing communications (email, messaging)

~.focusContent.demo

**Encryption Demonstration**

```bash
# Create a sample file
echo "This is confidential company data." > confidential.txt

# Encrypt the file using GPG
gpg -c confidential.txt

# Remove the original unencrypted file
rm confidential.txt

# Show that the encrypted file is unreadable
cat confidential.txt.gpg

# Decrypt the file back to readable format
gpg -o confidential.txt -d confidential.txt.gpg
cat confidential.txt
```

**Key takeaway**: Encryption makes data unreadable without the proper key, but it's reversible.

/~

TODO: possible JSON web tokens demo - how does token based login work

### User and Group Permissions

File and directory permissions are a fundamental security control that determines who can access what resources.

#### Basic permission types:

- **Read (r)**: View file contents or list directory contents
- **Write (w)**: Modify file contents or create/delete files in directory
- **Execute (x)**: Run a file as a program or enter a directory

~.focusContent.demo

**Permissions Demonstration**

```bash
# Create a sample file and check its permissions
echo "Sensitive company information" > sensitive.txt
ls -l sensitive.txt

# Make the file read-only for everyone
chmod 444 sensitive.txt
ls -l sensitive.txt

# Try to modify the file - this should fail
echo "Additional data" >> sensitive.txt

# Restore write permissions to demonstrate the concept
chmod 644 sensitive.txt
echo "Additional data" >> sensitive.txt
cat sensitive.txt
```

**Key takeaway**: Proper permissions prevent unauthorized access and modifications to critical files.

/~

#### Permission planning questions:

- Who needs access to this data?
- What level of access do they need?
- Should access be temporary or permanent?
- How will we monitor and audit access?

## Active Threat Monitoring

### Threat Intelligence

**Threat intelligence** = Evidence-based knowledge about current and emerging security threats, including their context, mechanisms, indicators, implications, and action-oriented advice.

#### Types of threat intelligence:

**Strategic**: High-level information about threat landscape trends
**Tactical**: Information about threat actor tactics, techniques, and procedures
**Operational**: Information about specific ongoing campaigns
**Technical**: Specific indicators of compromise (IoCs) like IP addresses, file hashes

### Using CISA Resources

The [**Cybersecurity and Infrastructure Security Agency (CISA)**](https://www.cisa.gov/news-events/cybersecurity-advisories) provides free threat intelligence and security advisories to help organizations stay informed about current threats.

~.focusContent.exercise

**Daily Quiz: CISA Advisory Analysis**

Analyze the following advisory: [ICS-25-196-03](https://www.cisa.gov/news-events/ics-advisories/icsa-25-196-03)

1. **Device/System Type**: What kind of device or system is targeted by this vulnerability? (e.g., personal computing devices, corporate computing systems, industrial control systems, etc.)

2. **Vulnerability Description**: What is the actual vulnerability (the problem with the software/device)?

3. **Exploit Difficulty**: Which part(s) of the advisory tell us how difficult it would be for an attacker to exploit this vulnerability?

4. **Attack Consequences**: What are the potential consequences if this vulnerability is successfully exploited?

5. **Mitigation Strategy**: What is one mitigation strategy listed that could defend against this attack?

/~

## Implementing a Comprehensive Defense Strategy

### Layered Security (Defense in Depth)

Effective cybersecurity requires multiple layers of protection:

**Physical layer**: Secure facilities, locked server rooms, badge access
**Network layer**: Firewalls, intrusion detection systems, network segmentation
**System layer**: Antivirus software, system hardening, patch management
**Application layer**: Secure coding, input validation, application firewalls
**Data layer**: Encryption, access controls, data classification
**Human layer**: Security training, awareness programs, clear policies

### Security Monitoring and Incident Response

**Continuous monitoring** is essential because:

- New threats emerge daily
- Attack techniques constantly evolve
- Systems and configurations change over time
- Early detection reduces impact

#### Key monitoring activities:

- **Log analysis**: Review system and security logs for suspicious activity
- **Vulnerability scanning**: Regular checks for known security weaknesses
- **Threat hunting**: Proactive searching for signs of compromise
- **Security metrics**: Track security performance and improvement over time

### Building a Security Culture

Technology alone cannot provide complete protection. Organizations must also focus on:

**Security awareness training**: Regular education about current threats and best practices
**Clear policies**: Well-defined security policies that are communicated and enforced
**Incident reporting**: Encouraging employees to report suspicious activities
**Continuous improvement**: Regular review and update of security practices

## Key Takeaways

Effective cybersecurity defense requires:

- **Early integration**: Implement security from the beginning (shift left)
- **Appropriate access**: Give users only the access they need (least privilege)
- **Strong technical controls**: Use encryption, hashing, and permissions appropriately
- **Active monitoring**: Stay informed about current threats and vulnerabilities
- **Layered approach**: Implement multiple complementary security measures
- **Organizational commitment**: Build security into company culture and processes

Remember: Security is not a destination but an ongoing process that requires constant attention, adaptation, and improvement.
