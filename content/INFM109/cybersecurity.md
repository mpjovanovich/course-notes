---
title: Cyber and Digital Security
course: INFM109
---

~.toc

- [Secure Information Systems](#secure-information-systems)
  - [New Challenges to Ensure Secure Information Systems](#new-challenges-to-ensure-secure-information-systems)
    - [Complexity of Systems](#complexity-of-systems)
    - [Bring Your Own Device](#bring-your-own-device)
    - [Sophistication of Cybercrime](#sophistication-of-cybercrime)
  - [Perpetrators of Cybercrime](#perpetrators-of-cybercrime)
    - [Negligence](#negligence)
    - [State Based Cyber Threats](#state-based-cyber-threats)
      - [Case Study: Stuxnet](#case-study-stuxnet)
  - [Attack Types](#attack-types)
  - [Types of Cyberattacks](#types-of-cyberattacks)
    - [Malware](#malware)
      - [Ransomware](#ransomware)
        - [High profile examples:](#high-profile-examples)
    - [Phishing](#phishing)
    - [Man in the Middle Attack](#man-in-the-middle-attack)
    - [Distributed Denial of Service (DDoS)](#distributed-denial-of-service-ddos)
      - [Legitimate Uses of Bots](#legitimate-uses-of-bots)
    - [SQL Injection](#sql-injection)
    - [Zero-day Exploit](#zero-day-exploit)
  - [Consequences of a Cyberattack](#consequences-of-a-cyberattack)
  - [Preventing Cyberattacks](#preventing-cyberattacks)
    - [Hashing and Encryption](#hashing-and-encryption)
    - [User and Group Permissions](#user-and-group-permissions)
    - [Separation of Duties](#separation-of-duties)
    - [CIA Security Triad](#cia-security-triad)
    - [Cyber Threat Tracking](#cyber-threat-tracking)
- [Legal, Ethical, and Social Issues](#legal-ethical-and-social-issues)
  - [Corporate Social Responsibility](#corporate-social-responsibility)
    - [Code of Conduct](#code-of-conduct)
    - [Practical Examples](#practical-examples)
    - [How can Corporate Responsibility Practices go Wrong?](#how-can-corporate-responsibility-practices-go-wrong)
      - [Thorny areas](#thorny-areas)
      - [Other Misleading Branding / Advertising Practices](#other-misleading-branding--advertising-practices)
    - [Respondeat Superior](#respondeat-superior)
  - [Data Collection and Privacy Concerns](#data-collection-and-privacy-concerns)
    - [Government Data Collection](#government-data-collection)

/~

# Secure Information Systems

## New Challenges to Ensure Secure Information Systems

### Complexity of Systems

Increasing complexity offers new avenues for attack.

- Mobile Computing
- Cloud Computing
- Social Media
- IoT
- Big Data
- AI
- Blockchain

Each new device connected to the Internet is a potential entry point for an attacker.

### Bring Your Own Device

**Bring your own device (BYOD)** = employees use their own devices to access company data and applications.

Pros:

- Employee
  - More familiar with own device.
  - (Reportedly) more productive.
  - (Reportedly) more satisfied.
- Company
  - Can reduce need for IT support.
  - Can reduce need for training.
  - Can attract and retain talent due to flexibility of work environment.

Cons:

- Security risks
  - Employees may not keep their devices up to date.
  - Employees may not use strong passwords.
  - Employees may not use antivirus software.
  - Employees may not use a firewall.
  - Employees may not use encryption.
  - Employees may not use a VPN.
  - Employees may not use two-factor authentication.
  - Employees may not use a screen lock.
  - Employees may not use a password manager.
  - Employees may not use a privacy screen.
  - Employees may not use a privacy filter.

### Sophistication of Cybercrime

Sophistication and level or organization of cybercrime is increasing.

- Organized crime (large groups)
  - Dark web
  - Sell services/exploits to highest bidder

## Perpetrators of Cybercrime

| Perpetrator       | Description                                                                                                          |
| :---------------- | :------------------------------------------------------------------------------------------------------------------- |
| Careless Insider  | Employee who accidentally exposes information.                                                                       |
| Malicious Insider | Employee who intentionally exposes information.                                                                      |
| Cybercriminal     | Individual who uses computers, networks, and the Internet to perpetrate crime.                                       |
| Hacktivist        | Individual who hacks computers or Web sites in an attempt to promote a political ideology.                           |
| Lone Wolf         | Individual who acts alone to perpetrate a malicious act.                                                             |
| Cyberterrorist    | Individual who uses computers and the Internet to cause harm to a civilian population to further a political agenda. |

### Negligence

Not all compromises of sensitive information come from bad actors.

<figure>
 <img src="https://i.guim.co.uk/img/media/ae4001f9311f4912db843f79ee2510db6d9419e0/0_180_1472_883/master/1472.png?width=620&dpr=1&s=none" alt="" style="width: 80%;height: auto;">
</figure>

### State Based Cyber Threats

- **Cyberwarfare** = state-sponsored attacks on information systems.
- **Cyberespionage** = state-sponsored attacks on information systems to steal information.

#### Case Study: Stuxnet

<figure>
 <img src="https://media.wired.com/photos/593238c5b8eb31692072e339/master/w_1600,c_limit/Iran.jpg" alt="" style="width: 40%;height: auto;">
</figure>

- First publicly known use of cyberwarfare
- [An Unprecedented Look at Stuxnet, the World's First Digital Weapon](https://www.wired.com/2014/11/countdown-to-zero-day-stuxnet/)
- [Stuxnet explained: The first known cyberweapon](https://www.csoonline.com/article/562691/stuxnet-explained-the-first-known-cyberweapon.html)

## Attack Types

## Types of Cyberattacks

### Malware

Many forms:

- Block access to a system or data
- Install software that allows attacker to control the system
- Covertly steal and transmit information
- Renders system inoperable

#### Ransomware

Malware that threatens to publish the victim's data or perpetually block access to it unless a ransom is paid.

- Ransoms pait in bitcoin.
- Very lucrative business for cybercriminals
- Can halt essential operations for organizations. B/c of this ransom is often paid.

##### High profile examples:

[A timeline of the biggest ransomware attacks](https://www.cnet.com/personal-finance/crypto/a-timeline-of-the-biggest-ransomware-attacks/).

A few of these:

- Colonial Pipeline (2021)
  - Oil flow shut off for 5 days
  - Caused a gas run
  - Caused power outages, including in healthcare facilities
  - Paid $4.4 million in ransom
- University of California at San Francisco (2020)
  - School of medicine hacked.
  - Paid $1.14 million in ransom

### Phishing

Fraudulent attempt to obtain sensitive information or data, such as usernames, passwords and credit card details, by disguising oneself as a trustworthy entity in an electronic communication.

- email
- text message
- phone call
- social media

### Man in the Middle Attack

Malicious actor inserts him/herself into a conversation between two parties, impersonates both parties and gains access to information that the two parties were trying to send to each other.

### Distributed Denial of Service (DDoS)

Cyberattack in which a large number of computers (or other devices) are used to flood a server with requests for information in order to overload the server and deny service to legitimate users.

- Server is so busy handling illigitimate requests that it can't handle legitimate requests.
- Utilizes **botnets**.
  - Network of computers that have been infected with malware that allows them to be controlled remotely.
  - "Zombie" computers.
  - Infected machines do nothing until botnet is activated.

#### Legitimate Uses of Bots

- Search engines
- Web site monitoring, archiving, mirroring, indexing, content filtering, and categorization
- Automated online assistants

<br>

<span class="demo">demo:</span> [scrape_jobs.py](https://github.com/mpjovanovich/ivy_tech/tree/main/Demos/webscrape_beautifulsoup)

### SQL Injection

Attacker inserts malicious code into a server that uses SQL and forces the server to reveal information it normally would not

### Zero-day Exploit

Occurs on the same day a weakness is discovered in software. At that point, it's exploited before a fix becomes available from its creator.

## Consequences of a Cyberattack

- [Data Breach Statistics](https://www.varonis.com/blog/data-breach-statistics/)
  - Good all around.
- [List of Data Breaches and Cyber Attacks in 2023](https://www.itgovernance.co.uk/blog/list-of-data-breaches-and-cyber-attacks-in-2023)

  - See "Top data breach stats..."

- Loss of revenue
- Loss of intellectual property
- Loss of productivity
- Loss of reputation / customer trust

## Preventing Cyberattacks

### Hashing and Encryption

Encryption used to protect data from viewers in storage or as it is transmitted.

Hashing used to verify integrity of data.

- [What is difference between Encryption and Hashing?](https://www.encryptionconsulting.com/education-center/encryption-vs-hashing)
  - See “Hashing and Encryption Use Cases”

_Hashing demo_

```bash
## One letter off...
echo "This is unencrypted." > tmp1.txt
echo "this is unencrypted." > tmp2.txt
md5sum tmp1.txt
md5sum tmp2.txt
```

_Encryption demo_

```bash
## Encrypt then view file...
gpg -c tmp1.txt
rm tmp1.txt
## Then decrypt...
gpg -o tmp1.txt -d tmp1.txt.gpg
```

### User and Group Permissions

Used to control access to files and directories.

_Read only demo_

```bash
## Note the permissions on tmp1.txt
ls -l
## Set tmp1.txt to read only
chmod 444 tmp1.txt
ls -l
## Now we can't edit the file.
```

### Separation of Duties

Divide responsibilities for a system among multiple people / groups to:

- Prevent damage from ignorant users
- Limit damage from a single person

Example:

- Should the (Database Administrator) DBA be able to access/view user information?
- Should user be able to delete a database table?

### CIA Security Triad

- Confidentiality
  - Only authorized users can access sensitive data.
- Integrity
  - Data is accurate and complete.
  - Only authorized users can modify data.
- Availability
  - Data is accessible when needed.
  - "Uptime"
  - e.g., might aim for 99.999% availability.

### Cyber Threat Tracking

[Cybersecurity Alerts & Advisories CISA](https://www.cisa.gov/news-events/cybersecurity-advisories)

Case Study: drill into SEP 26, 2023 Industrial Control Systems Advisory

- Who is the target?
- What devices might be used for the attack?
- What type of attack is it?

# Legal, Ethical, and Social Issues

## Corporate Social Responsibility

### Code of Conduct

Set of rules outlining norms, rules, and responsibilities and proper practices of a party or organization.

- [Google's Code of Conduct](https://abc.xyz/investor/other/google-code-of-conduct.html)
- [Microsoft's Code of Conduct](https://www.microsoft.com/en-us/legal/compliance/codeofconduct)
- [Apple's Code of Conduct](https://www.apple.com/supplier-responsibility/pdf/Apple_Code_of_Conduct.pdf)
- [Facebook's Code of Conduct](https://www.facebook.com/codeofconduct)
- [Amazon's Code of Conduct](https://www.amazon.com/gp/help/customer/display.html?nodeId=200109660)
- [Twitter's Code of Conduct](https://help.twitter.com/en/rules-and-policies/twitter-rules)
- [Uber's Code of Conduct](https://www.uber.com/legal/community-guidelines/us-en/)

### Practical Examples

- Interorganizational commitments
  - Employee diversity
  - Paternity/maternity leave
  - Diverse employee pool
- Philanthropy
  - Disaster relief
    - [How Amazon is assisting in Ukraine](https://www.aboutamazon.com/news/community/amazons-assistance-in-ukraine)
    - [How Companies Are Responding to the Earthquake in Turkey and Syria](https://ccc.bc.edu/content/ccc/blog-home/2023/02/companies-respond-earthquake-turkey-syria.html)
  -
- Human / environmental rights
  - Ethical sourcing
  - Labor standards
  - Environmental sustainability commitments
- Community engagement
  - Community partnerships
    - E.g. what kinds of things to corporations do when they're starting up a new facility in a community?
  - Open source
  - Open education
    - [Oracle Acedemy](https://academy.oracle.com/)
    - [Microsoft Learn](https://learn.microsoft.com/en-us/training/)
    - ...
    - Benefits of providing this?
- Consumer protection
  - Privacy
  - Product safety

### How can Corporate Responsibility Practices go Wrong?

#### Thorny areas

- **Greenwashing** = conveying a false impression or providing misleading information about how a company's products are more environmentally sound.
- **Pinkwashing** = conveying a false impression or providing misleading information about how a company is helping to support breast cancer awareness.
  - ...and other forms of **"causewashing"**.

#### Other Misleading Branding / Advertising Practices

Legal but considered (by most) unethical.

- Vague or nondescript language
  - E.g., "all natural"
- Playing on public hype slogans
  - e.g., "superfoods"
- Misleading statistics
  - Cherry picking; selecting data that supports your position while ignoring data that doesn't.
  - Misleading graphs; e.g., using a graph that doesn't start at zero.
  - Misleading averages; e.g., using mean instead of median.
- Hidden Trade-offs
  - E.g., promoting a product as energy-efficient but neglecting the fact that it uses harmful chemicals

### Respondeat Superior

**Respondeat Superior** = "That the master must answer" (Latin)

- Doctrine that holds an employer or principal legally responsible for the wrongful acts of an employee or agent, if such acts occur within the scope of the employment or agency.

- How is this relevant to our discussion?

## Data Collection and Privacy Concerns

[Internet Data Collection](images/internet_data_collection.png)

- Who should be responsible for setting the rules about what’s okay to collect, when, where, and how?

- If we’re not happy about how it’s currently being done, how can we change the existing policies?

### Government Data Collection

_FISA_

- Foreign Intelligence Surveillance Act
- [Foreign Intelligence Surveillance Act of 1978](https://www.congress.gov/bill/95th-congress/house-bill/7308)
- Limited govt surveillance powers
- Established protections for US citizen - govt needs a warrant to collect data.

_Patriot Act_

- [USA PATRIOT Act](https://www.congress.gov/bill/107th-congress/house-bill/3162)
- "Uniting and Strengthening America by Providing Appropriate Tools Required to Intercept and Obstruct Terrorism Act"
- Greatly expanded govt surveillance powers
- Passed in response to 9/11
- Allowed govt to:
  - Get warrant to monitor electroic comms without probable cause
  - Collect business records without warrant
  - Detain foreign nationals without charging them with crime.
  - See the link for more...

_Freedom Act_

- [USA Freedom Act](https://www.congress.gov/bill/113th-congress/house-bill/3361)
- Limited govt surveillance powers
- Ended the government's bulk collection of phone records
- Added more oversight and transparency of government surveillance programs.
- Expired March 15, 2020
