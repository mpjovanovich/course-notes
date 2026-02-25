---
title: Cybersecurity Threat Landscape
course: INFM109
---

~.toc

- [Cybersecurity Threat Landscape](#cybersecurity-threat-landscape)
  - [Types of Cyberattacks](#types-of-cyberattacks)
    - [Malware](#malware)
    - [Ransomware](#ransomware)
    - [Distributed Denial of Service (DDoS)](#distributed-denial-of-service-ddos)
    - [Phishing](#phishing)
    - [Man in the Middle Attack](#man-in-the-middle-attack)
    - [Code Injection](#code-injection)
    - [Demo: SQL Injection Attach](#demo-sql-injection-attach)
    - [Exercise: How to Scam Users 101](#exercise-how-to-scam-users-101)

/~

# Cybersecurity Threat Landscape

## Types of Cyberattacks

### Malware

Malicious software designed to damage, disrupt, or gain unauthorized access to computer systems. Malware can take many forms:

- Block access to a system or data
- Install software that allows attacker to control the system
- Covertly steal and transmit information
- Render system inoperable

### Ransomware

A specific type of malware that threatens to publish the victim's data or perpetually block access to it unless a ransom is paid.

Key characteristics:

- Ransoms paid in cryptocurrency (usually bitcoin)
- Very lucrative business for cybercriminals
- Can halt essential operations for organizations
- Because of operational impact, ransom is often paid

~.focusContent.example

**High Profile Examples**

<figure>
    <span>
        <img src="https://www.sangfor.com/sites/default/files/inline-images/colonial-restart-supply-updated-diagram_0.jpg" style="width: 100%;height: auto;">
    </span>
</figure>

- **Colonial Pipeline (2021)**

  - Oil flow shut off for 5 days
  - Caused a gas shortage panic
  - Caused power outages, including in healthcare facilities
  - Company paid $4.4 million in ransom

- **University of California at San Francisco (2020)**
  - School of medicine systems compromised
  - Paid $1.14 million in ransom to restore operations

/~

### Distributed Denial of Service (DDoS)

Cyberattack in which a large number of computers are used to flood a server with requests in order to overload the server and deny service to legitimate users.

How it works:

- Server becomes so busy handling illegitimate requests that it can't handle legitimate ones
- Utilizes **botnets** - networks of infected "zombie" computers
- Infected machines remain dormant until the botnet is activated

~.focusContent.note

**Legitimate Uses of Bots**

Not all bots are malicious:

- Search engine crawlers
- Website monitoring and archiving
- Content filtering and categorization
- Automated content scraping and aggregation

/~

~.focusContent.demo

**Demo: Job Posting Aggregator**

In this example we will create a script that finds Python related jobs from a live website.

The original source of the data is: [https://realpython.github.io/fake-jobs/](https://realpython.github.io/fake-jobs/)

```python
import requests
from bs4 import BeautifulSoup


URL = "https://realpython.github.io/fake-jobs/"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
results = soup.find(id="ResultsContainer")

# Look for Python jobs
print("PYTHON JOBS\n==============================\n")
python_jobs = results.find_all(
    "h2", string=lambda text: "python" in text.lower()
)
python_job_elements = [
    h2_element.parent.parent.parent for h2_element in python_jobs
]

for job_element in python_job_elements:
    title_element = job_element.find("h2", class_="title")
    company_element = job_element.find("h3", class_="company")
    location_element = job_element.find("p", class_="location")
    print(title_element.text.strip())
    print(company_element.text.strip())
    print(location_element.text.strip())
    link_url = job_element.find_all("a")[1]["href"]
    print(f"Apply here: {link_url}\n")
    print()
```

/~

### Phishing

Fraudulent attempt to obtain sensitive information such as usernames, passwords, and credit card details by disguising oneself as a trustworthy entity in electronic communication.

Common phishing methods:

- Email (most common)
- Text message (SMS phishing or "smishing")
- Phone call (voice phishing or "vishing")
- Social media messages

### Man in the Middle Attack

Malicious actor inserts themselves into a conversation between two parties, impersonates both parties, and gains access to information that the two parties were trying to send to each other.

Common scenarios:

- Unsecured Wi-Fi networks
- Compromised routers
- Certificate spoofing

### Code Injection

<figure>
    <span>
        <img src="https://imgs.xkcd.com/comics/exploits_of_a_mom_2x.png" style="width: 100%;height: auto;">
    </span>
</figure>

<figure>
    <span>
        <img src="https://cwe.mitre.org/data/images/CWE-269-Diagram.png" style="width: 100%;height: auto;">
    </span>
</figure>

Attacker inserts malicious code into a website link or server that uses databases. This may execute a script in the user's browser or extract or delete data from the database.

Software developers must defend against this by validating user input and sanitizing data.

~/focusContent.demo

### Demo: SQL Injection Attach

We can use test applications like [Damn Vulnerable Web Application](https://github.com/digininja/DVWA) to test our hacking skills.

Let's do a SQL Injection attack.

_Prep_

- Run the program in Docker: `docker run --rm -it -p 80:80 vulnerables/web-dvwa`
- Navigate to localhost on port 80
- Login with creds "admin/password"
- Create the database
- Go to the SQL Injection tab

_Attack_

- Enter `1` into the box for a normal query
- Enter `1' OR 1=1-- -` to get all users
- Enter `1' UNION SELECT user, password FROM users-- -` to get all users and passwords!

Why does this work? Bad coding:

[Bad Query](https://github.com/digininja/DVWA/blob/master/vulnerabilities/sqli/source/low.php)

```php
$query  = "SELECT first_name, last_name FROM users WHERE user_id = '$id';";
```

Dev should have used parameterized query.

/~

~.focusContent.exercise

### Exercise: How to Scam Users 101

<figure>
    <span>
        <img src="https://cwe.mitre.org/data/images/CWE-79-Diagram.png" style="width: 100%;height: auto;">
    </span>
</figure>

In this exercise we will walk through the process of tricking a user into visiting a sketchy website. We will learn to think like an attacker in order to better understand how to defend against them.

You must complete Phase 1 of this exercise and turn in your HTML file for the daily quiz.

**Phase 1: Code Injection**

In this phase we will construct our attack vector.

1. _Probe for vulnerabilities._ In our scenario, we've already identified a vulnerable website with the following code. In reality this would be a live website on the Internet. In our case we will save the HTML document below as `my-site.html` and open it in a browser. **Important: Save the file with a `.html` extension, not `.txt`.**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>XSS Demo</title>
  </head>
  <body>
    <h1>Search Results</h1>
    <div id="results"></div>

    <script>
      // Simulate getting user input from URL parameter
      const urlParams = new URLSearchParams(window.location.search);
      const searchTerm = urlParams.get("q") || "";

      // VULNERABLE: Directly inserting user input into DOM without sanitization
      document.getElementById("results").innerHTML =
        "You searched for: " + searchTerm;
    </script>
  </body>
</html>
```

2. _Test the legitimate use case._ Visit the page with the following query string: `my-site.html?q=Hello`. Query strings are used to pass information to the server. **Try using Google search and observe what appears at the end of the URL.**

3. _Test the malicious use case._ Visit the page with the following query strings:

- `my-site.html?q=<img src=x onerror=alert('XSS')>` - Should show an alert box
- `my-site.html?q=<img src=x onerror="window.location='https://google.com'">` - Should redirect to Google

**What's happening:** The malicious code is being executed because the website directly inserts user input into the HTML without validation or sanitization.

This technique is often used in **session hijacking**: stealing the "logged in" state of another user and visiting a page that requires login.

**Phase 2: Phishing**

In this phase we will execute the attack via phishing.

_Link Obfuscation_

We don't want our malicious script to be plainly visible on the page. In the simple case, we can make the text of the link say whatever we want (this is the default for HTML links), and hope the user does not hover over the link to inspect the actual URL.

```html
<a href="http://my-site.html?q=<img src=x onerror=[MALICIOUS CODE HERE]>"
  >Register for your upcoming event</a
>
```

For more complexity, we can use a URL shortener service such as [Bitly](https://bitly.com/) to hide the actual URL. This provides URLs that look random, such as: `https://bit.ly/3q2q2q2`. **The user cannot see any script in the URL, making it much harder to detect the attack.**

_Email Spoofing_

Emails can be composed in HTML format. Now that we have our contaminated link, let's put it in an email message and make it look like it came from a legitimate source.

```php
<?php
$to = "victim@company.com";
$subject = "Register for your upcoming event";
$message = "Please register for the upcoming event by clicking the link below.";

// Don't worry if you don't understand this code. What matters is that the
// "From" address is completely fake... we are sending this, not Microsoft.
// It will still read as "From: events@microsoft.com" in the email client.
// This is a common technique used by spammers.
$headers = "From: events@microsoft.com\r\n";
$headers .= "Reply-To: events@microsoft.com\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Send the spoofed email
mail($to, $subject, $message, $headers);
?>
```

**Key Takeaway:** This demonstrates why you should never trust email addresses alone as proof of sender identity. If in doubt:

- Hover over the email address to see the actual email address
- Hover over links to see the actual URL
- Examine the source code of the page to see the actual content

/~
