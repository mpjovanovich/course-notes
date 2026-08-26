# `internet.md` Strengthening Plan

**Scope:** This file only. Goal is a topically-consistent, self-contained "how the Internet works" lecture for Module 01, with more content where it's thin — while deliberately staying shallow on OSI layers / the full protocol suite, since a dedicated later module already owns that depth. (Supersedes the earlier overlap-triage doc — that comparison didn't turn up anything worth acting on.)

Status: planning only — no source changes yet.

---

## 1. What changed since the last read

The file has been trimmed: **VPN, Proxy, Private Browsing, Password Management, and the "Demo: What do Websites Look Like from the Back End?" section are gone from the body**, but the TOC (lines 8-20) still links to all of them. That's now the most visible bug — five dead links in the on-page nav.

I checked whether cutting the VPN/password content leaves a real coverage hole: it doesn't. Per `planning/coverage-map.md`, Objective 9 (security/passwords/VPN) has five dedicated cybersecurity files as its primary coverage — `internet.md` was only ever a "supporting mention." Nothing needs to be restored for coverage reasons. (Separately, `planning/module-cohesion.md` notes Module 01's title promises "digital citizenry" but the lecture content doesn't really earn it — see §3.5 below for a lightweight way to address that without re-adding the deleted material wholesale.)

Also still present: the **orphan `## Internet Protocol Suite` section** (line 94) — one image, one sentence, not in the TOC, sitting awkwardly between Client-Server Model and HTTP/HTTPS.

---

## 2. Diagnosis: why the current order doesn't read as topically consistent

Walking it as a reader would:

1. Intro defines the Internet as infrastructure + protocols.
2. URLs — introduces a domain name, but nothing about domain names is explained yet.
3. Client-Server Model — new topic, who talks to whom.
4. Internet Protocol Suite — orphan, undeveloped, breaks flow.
5. HTTP/HTTPS — how the client and server talk (good, follows from #3).
6. TCP/IP — introduces IP addresses and packetization, including public/private IP... but DNS, which is the thing that actually connects a URL's domain name to an IP address, hasn't been introduced yet.
7. DNS — finally explains domain name → IP address, four sections after URLs first showed a domain name.
8. Round Trip — synthesis, works well as a capstone.

The core problem: **naming/addressing concepts (URL → domain name → DNS → IP address) are split across four non-adjacent sections**, so a reader hits forward references twice (URL uses a domain name before DNS is defined; TCP/IP uses IP addresses before DNS explains what they're for). Everything else is in reasonable shape.

---

## 3. Proposed structure

Group into three clear arcs — **naming/addressing**, **how data moves**, **what you actually see** — then synthesize, then a short citizenship close.

### 3.1 What Is the Internet (intro — unchanged)
Keep as-is, including the WWW aside.

### 3.2 Naming & Addressing — *merged arc: URLs → DNS → IP Addresses*
Combine the current URLs section, DNS section, and the IP-addressing half of TCP/IP into one throughline:
- URL anatomy (existing diagram/content, unchanged)
- → "the domain name in that URL isn't the real address — it's a nickname" → DNS (existing content, unchanged, keep both demos: whatsmydns.net, hosts file)
- → "what DNS resolves to is an IP address" → IP addressing content currently living in TCP/IP (public/private IP, the `ifconfig`/`ipconfig` exercise)
- **New, short:** why IPv4 addresses are scarce enough that private/NAT addressing exists at all (one or two sentences — "there are only ~4 billion IPv4 addresses, fewer than the number of internet-connected devices on Earth, which is why your home network shares one public address across many private ones"). This gives the public/private IP split an actual reason, which it currently states but doesn't motivate.

This resolves the forward-reference problem in §2 — a domain name is never used before it's explained.

### 3.3 How Data Moves — *Client-Server Model → TCP (reliability half only) → NEW: Physical Infrastructure*
- Client-Server Model (unchanged content)
- TCP's job (reliability/packetization half of the current TCP/IP section — addressing half moved to 3.2 per above)
- **New section: The Physical Path** — the intro's very first bullet promises "physical infrastructure: cables, routers, and other hardware" and the file never comes back to it. Add a short section: ISPs, backbone/undersea cables, routers as intersections. `images/modern-internet-backbone.jpg` is already a local asset (currently used once in the timelines file) and fits directly here — reusing it creates a nice visual callback between the two Module 01 files rather than requiring a new external image.
- **New, one line:** name "packet switching" explicitly and tie it to the "decentralized, packets can take different routes" claim that currently only appears later in the Round Trip section, unsupported. This also sets up (without teaching yet) the idea that there's a formal *layered* system governing all this — one line, e.g. *"There's a whole standard stack of rules governing how these layers hand off to each other — we'll cover that in depth in the networking module."* This is the right place for that forward-pointer, and lets the orphan "Internet Protocol Suite" section be cut entirely rather than awkwardly folded in — it was never more than that one sentence anyway.

### 3.4 What You Actually See — *HTTP/HTTPS (unchanged, keep the DevTools demo)*
No changes needed; it already reads well and follows naturally once client-server and addressing are established.

### 3.5 Putting It All Together: A Round Trip (unchanged, capstone)
Keep as-is. Now that packet switching and decentralization are introduced in 3.3, this section can lean on that vocabulary instead of introducing "decentralized" for the first time here.

### 3.6 New, short: Staying Safe & Being a Good Digital Citizen
Not a re-add of the deleted VPN/Proxy/Password sections (those five dedicated cybersecurity files already own that depth — see §1). Instead, 3-5 sentences plus a forward pointer:
- One line each on digital footprint / think-before-you-click / using unique passwords
- Explicit forward-pointer: *"We'll go deep on threats and defenses in the cybersecurity module — this is just the everyday-user layer."*

This directly answers the module-cohesion gap ("lecture content doesn't earn the 'digital citizenry' title") with minimal net-new content, and gives the module a close that isn't just a protocol diagram. Low effort, real payoff — worth doing even under time pressure. If you'd rather skip this and keep the file purely mechanical, that's a reasonable call too; flagging it as optional rather than required.

---

## 4. Bug fixes required regardless of the reorg

- Delete the five dead TOC entries (Demo, VPN, Private Browsing, Proxy, VPN, Password Management) or replace them with the new 3.6 entry.
- Delete the orphan `## Internet Protocol Suite` heading (per 3.3, replaced by a one-line forward-pointer instead of its own section).
- Regenerate the TOC to match the final heading set and order.

---

## 5. New content summary (what's actually being added, net of reorg)

| Addition | Where | Size | Why |
|---|---|---|---|
| Why IPv4 scarcity → public/private IP split exists | Naming & Addressing (3.2) | 1-2 sentences | Currently states the split as fact with no reason |
| Physical Path: ISPs, backbone cables, routers | How Data Moves (3.3) | New short section, reuses existing local image | Intro promises this, file never delivers it |
| "Packet switching" named explicitly | How Data Moves (3.3) | 1 sentence | Currently implied but never named; supports the later "decentralized" claim |
| Forward-pointer to OSI/protocol-suite module | How Data Moves (3.3) | 1 sentence | Replaces the orphan stub section; sets reader expectation without duplicating depth |
| Staying Safe & Digital Citizenship close | New section (3.6) | 3-5 sentences + pointer | Addresses a previously-flagged module-cohesion gap cheaply |

Nothing here duplicates OSI-layer or full-protocol-suite content — that stays reserved for the later module, consistent with your instruction.

---

## 6. Suggested execution order

1. Fix TOC dead links / regenerate TOC (mechanical, do last actually — easiest to do after headings are final).
2. Reorder: pull DNS and the IP-addressing half of TCP/IP up next to URLs (3.2); leave TCP's reliability half + Client-Server where they are, append new Physical Path section (3.3).
3. Delete orphan Internet Protocol Suite section, replace with the one-line forward-pointer inside 3.3.
4. Write the two short new-content pieces (IPv4 scarcity rationale, Physical Path section) — Physical Path needs the reused image, no new asset sourcing required.
5. Write the new 3.6 closing section (or skip, per your call).
6. Regenerate TOC against final structure.
