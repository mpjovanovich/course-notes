# INFM109 Module-by-Module: Contribution & Cohesion

Source: module layout from `index.md`, objective coverage from `coverage-map.md`. For each module: what it contributes to the overall course objectives, then an assessment of internal cohesion — does the module hang together as a unit — with suggested additions/removals to tighten it.

Cohesion here is a different axis than the coverage map. Coverage asks "is objective N addressed somewhere." This asks "does everything inside module M belong together, and does it pull its own weight." A module can score well on coverage and still feel like a grab-bag internally (or vice versa). This file is meant to be the working planning document for course alterations: it takes each gap the coverage map identified and resolves it down to a specific module, so the two documents together tell you both *what's missing* and *where it should go*.

---

## Coverage Gaps: Recommended Module Placement

`coverage-map.md`'s "Objectives with Little or No Coverage" section names six problem areas. Each is resolved below to a best-fit module, chosen by matching the gap to the module whose existing theme and content already lean that direction — so closing the gap reinforces cohesion instead of bolting on unrelated material.

| Gap (from coverage-map.md)                        | Best-fit module                  | Why this module                                                                                                                                                          |
| --------------------------------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Obj 1** — meaning of information (human vs. mechanical) | **Module 05: Information Systems** | `types_of_data.md` already draws the data-vs-information distinction as a tangent; making it explicit closes the gap with a small edit to a file that already exists in the right module, rather than new content elsewhere. |
| **Obj 3** — presentations, visual aids, delivery     | *No lecture module — stays project-based* | Per the instructor note, this is deliberately taught through the final-presentation deliverables, not lecture. Treat as intentionally out-of-lecture rather than a true gap; at most, Module 03 (Software) could add a brief pointer since it already covers office-suite software. |
| **Obj 4** — SDLC / software dev principles           | **Module 04: Program and Web Development** | Already the objective's nominal home via the `../SDEV120/sdlc.html` link — but see Module 04 below: the fix is bringing native content into this directory, not relocating the objective. |
| **Obj 6** — data visualization, statistics, reporting | **Module 0X: AI in the Tech Industry** (primary), Module 03 (secondary) | Module 0X already ends in a "Producing a Data-Driven Artifact" assignment with no lecture content backing it — that's the module's own internal gap (see below) and this objective's gap at the same time. Module 03's spreadsheet demo in `app.md` is a smaller existing anchor and can stay as supporting material. |
| **Obj 7 (SAN specifically)** — storage area networks | **Module 06: Networking and Storage** | The module's title already promises "Storage," which is currently underrepresented (see Module 06 below); SAN is infrastructure-level storage and belongs with networking, not with Module 05's data-modeling take on storage. |
| **Obj 8** — informatics supporting an org (life cycles, info flow) | **Module 05: Information Systems** | The module name is a direct match, and `dhm`/`dbs` already gesture at organizational data use without framing it as information flow — this is a framing fix to existing content, not a new topic. |

Net effect: Module 05 absorbs two of the six gaps (Obj 1, Obj 8) and Module 0X's assignment/lecture mismatch turns out to double as the fix for a third (Obj 6). Obj 3 is confirmed intentional rather than missing. Obj 4 and Obj 7 stay in their nominal modules, each needing native content rather than relocation.

---

## Module 00: Course Introduction

**Contributes:** Nothing tied to a numbered objective — pure logistics (course structure, textbook access, computer orientation, icebreaker).

**Cohesion:** Fine as-is. An orientation module is expected to be a checklist rather than a themed unit; there's no content thread to keep taut here. Nothing to add or remove.

---

## Module 01: Digital Citizenry & The Internet

**Contributes:** Obj 1 (P, `tde` — info access across eras), Obj 5 (C, `inet` — Internet fully covered), Obj 9 (P, `inet` — passwords/VPN/proxy), Obj 10 (P, via the ethics/legal-practices assignment).

**Cohesion:** The title promises "digital citizenry" — responsible/informed use of technology — but the two lecture files are a historical timeline (`tde`) and internet mechanics (`inet`); citizenship only shows up in the *assignment* ("Exploration of Ethical and Legal Tech Practices"), not in the lecture content itself. The throughline from "how we got here" to "how the internet works" is reasonable as a sequence, but a student reading only the lecture files would not land on "digital citizenry" as the takeaway.

- **Consider adding:** A short section (in `internet.md` or a new page) on online identity, privacy norms, or acceptable-use expectations — something that actually earns the module name and gives the ethics/legal assignment a lecture-side anchor instead of appearing unprompted.
- **Consider removing/relocating:** Nothing needs to leave; the gap is additive, not one of clutter.

---

## Module 0X: AI in the Tech Industry

**Contributes:** Obj 1 (P, `wai`), Obj 6 (P, `eai` — AI-generated data viz, mentioned), Obj 10 (P, `eai` + `pia` — best practices, human oversight, critical thinking). Per the coverage map, `large_language_models.md` and `prompt_engineering.md` map to **no** numbered objective.

**Cohesion:** This is the most internally consistent module in the course — every file (`wai`, `llm`, `pe`, `eai`, `pia`) is squarely about AI, building from "what is it" → "how do the models work" → "how do you use one" → "where does it show up embedded" → "what does it mean for your career." The "Producing a Data-Driven Artifact" assignment lands naturally on top of that sequence. The one real issue is external, not internal: per the instructor note this is an interim module added by discretion, and two of its five files (`llm`, `pe`) don't tie to any numbered course objective — so the module is tight on its own terms but loosely anchored to the course's formal objective list.

- **Consider adding:** The module's own weak point doubles as the fix for coverage-map's Obj 6 gap (data viz/statistics/reporting): the "Producing a Data-Driven Artifact" assignment currently has no lecture content backing it — `eai` only mentions AI-generated data viz in passing. Adding a short lecture segment on basic reporting/statistics practice ahead of that assignment closes both problems at once.
- **Consider removing/relocating:** Nothing to cut; `llm`/`pe` earn their place pedagogically even without an objective citation. If the objectives list is ever revised, this module is the natural place to add an explicit AI-literacy objective, since the content already supports one.

---

## Module 02: Hardware

**Contributes:** Obj 2 (C, `hw` + `iot`), Obj 1 (P, `hw` — bits/bytes), Obj 5 (P, `hw` — local vs. cloud storage), Obj 7 (P, `hw` — HDD/SSD/NVMe).

**Cohesion:** Part I (`hardware.md`, hardware-trends discussion) is a clean, focused unit. Part II breaks the theme: alongside `input_output_technologies.md` (skimmed) it also tacks on installing Git, basic shell commands, and a backup-script exercise. None of those are hardware topics — they're development tooling, and a backup script is arguably more at home next to system software/OS content in Module 03.

- **Consider adding:** Hands-on hardware content to replace what moves out — e.g. reading device specs, comparing storage media, or a benchmarking exercise — so Part II stays on-theme instead of pivoting to tooling.
- **Consider removing/relocating:** Move "Installing Git," "Basic Shell Commands," and the backup-script exercise to Module 03 (Software) or Module 04 (Program and Web Development), where they'd sit next to OS/dev-tooling content instead of hardware content.

---

## Module 03: Software

**Contributes:** Obj 2 (P, `sso` + `wdo` — OS/kernel overview), Obj 4 (P, `app` — versioning/licensing), Obj 6 (P, `app` — spreadsheet formulas demo), Obj 9 (P, `wdo` — memory protection basics).

**Cohesion:** Good. Application software → system software → "what does the OS do" is a natural progression, and the Location Data Case Studies discussion pairs sensibly with `app` (mobile apps, location tracking, privacy). This is one of the more coherent modules as structured.

- **Consider adding:** If Module 02's Git/shell/backup-script content moves here (see above), it fits naturally next to system-software content — this would also strengthen Obj 4 (SDLC/dev-principles) coverage, which is currently thin in this module. A brief pointer toward presentation/delivery norms (Obj 3) could also live here alongside the existing office-suite content, if a lecture-side touch is wanted — see the placement table above.
- **Consider removing/relocating:** Nothing to cut.

---

## Module 04: Program and Web Development

**Contributes:** Obj 4 (P, via the `index.md` link to `../SDEV120/sdlc.html`) — the only objective this module touches, and the content lives in a different course's directory.

**Cohesion:** This is the one module with **no lecture markdown file in this directory at all**. Its content is an external SDLC link plus live-coded/in-class material (HTML/CSS/JS overview, one-page-app exercise) that leaves no artifact behind for students to review later, unlike every other module. The pairing of "process" (SDLC) with "execution" (HTML/CSS/JS, static site, GitHub) is conceptually sound, but the module is thin and undocumented relative to its neighbors.

- **Consider adding:** A lecture note file for the HTML/CSS/JS overview, matching the format of other modules, so this module has native, reviewable content instead of relying entirely on live demo + an out-of-course link. This would also be the natural place to shore up Obj 4 coverage with material that isn't borrowed from `SDEV120` — per the placement table above, the fix for this gap is bringing SDLC content natively into this directory, not moving the objective to a different module.
- **Consider removing/relocating:** Nothing to cut — the module is under-built, not cluttered.

---

## Module 05: Information Systems

**Contributes:** Obj 1 (P, `tod` + `dhm`), Obj 6 (P, `tod` + `dhm`), Obj 7 (C, `dhm` — ERD/keys/cardinality; `dbs` — largely a stub), Obj 8 (P, `dhm` + `dbs`, both flagged as weak in the coverage map).

**Cohesion:** Types of data → data hierarchy/modeling → database storage is a clean, logical build, and the guided "Student Study App" assignment gives it a concrete practical payoff. The weak link is `database_storage.md` itself: the coverage map notes its detailed content is commented out as TODO, so the module's final lecture step doesn't yet match the depth of the two that precede it.

- **Consider adding:** Finish `database_storage.md` — it's the module's natural capstone before the guided assignment, and right now it's the thinnest file backing the strongest guided exercise in the course. Per the placement table above, this module is also the recommended landing spot for two coverage-map gaps: make `types_of_data.md`'s data-vs-information distinction explicit (closes Obj 1), and reframe `dhm`/`dbs`'s organizational data-use content as organizational information *flow* (closes Obj 8). Both are edits to existing files, not new topics.
- **Consider removing/relocating:** Nothing to cut.

---

## Module 06: Networking and Storage

**Contributes:** Obj 2 (P, `virt`), Obj 5 (C, `virt` + `xaas`, with `ncp` as a supporting tangent), Obj 7 (P, `virt` + `xaas`).

**Cohesion:** The title promises "Networking *and* Storage," but storage only appears as a side effect of virtualization/cloud content ("storage as a shared resource," "IaaS storage rental" per the coverage map) — there's no dedicated storage treatment here, and the coverage map separately flags that SAN (storage area network) technology, explicitly named in Objective 7, appears in **no file anywhere** in the course. Module 05 already owns "Information Systems" storage (`database_storage.md`); this module is where physical/network storage infrastructure would belong, and right now it's largely absent, leaving "Storage" in the title underrepresented.

- **Consider adding:** A dedicated storage-infrastructure section covering SAN — per the placement table above, this is the recommended fix for coverage-map's Obj 7 (SAN) gap, since SAN belongs with networking/infrastructure rather than with `database_storage.md`'s data-modeling focus in Module 05.
- **Consider removing/relocating:** Nothing to cut; the WiFi app/table and AWS discussion both earn their place under networking and cloud, respectively.

---

## Module 07: Cyber and Digital Security

**Contributes:** Obj 4 (P, `cds` — shift-left/secure SDLC), Obj 8 (P, `coc` — org IT/security impact), Obj 9 (C — all five files: `coc`, `cam`, `ctl`, `caa`, `cds`), Obj 10 (P, `caa` — deepfake ethics case study).

**Cohesion:** The strongest-organized module in the course. The explicit Part I (attack) / Part II (defense) split gives it a clear internal narrative, all five lecture files are purpose-built for this module (none are shared/reused elsewhere), and the "Have You Been Pwned" intro plus WiFi-table callback both serve as natural hooks into the attack material.

- **Consider adding:** Nothing needed — this module can serve as the template for tightening the others.
- **Consider removing/relocating:** Nothing to cut.

---

## Cross-Module Observations

- **Dev-tooling content (Git, shell commands, backup scripts) is currently parked in Module 02 (Hardware)** where it doesn't thematically belong. Relocating it to Module 03 or 04 would sharpen Module 02's hardware focus and give Module 03/04 more native Obj 4 material.
- **Storage is split awkwardly across two modules with different framings**: Module 05 covers it as a data-modeling concern (`database_storage.md`, currently a stub) and Module 06 covers it only incidentally under virtualization/cloud, with the course-wide SAN gap falling into the seam between them. Resolved above: Module 06 owns infrastructure-level storage (including SAN), Module 05 owns data-modeling-level storage.
- **Module 0X (AI) is the tightest thematically but the loosest against the formal objectives list** — worth flagging if the objectives are ever revisited, since the content already exists to support an explicit AI-literacy objective. Its lecture/assignment mismatch also turns out to be the best home for the Obj 6 (data viz/reporting) gap, so closing it serves two goals at once.
- **Every coverage-map gap now has a resolution** except Obj 3, which is confirmed as intentionally project-based rather than missing. See the placement table above for the full reconciliation; the "Consider adding" bullets in each module section below implement it.
