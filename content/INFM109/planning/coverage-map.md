# INFM109 Course Objective Coverage Map

Source: objectives and topical areas as listed in `course-objectives.md`. Coverage assessed against every other top-level file in this directory (subdirectories `demos/` and `images/` excluded). `index.md` is the course landing page/schedule, not lecture content, but is included since it links out to modules and occasionally to content outside this directory.

## File Legend

| Code | File                                       |
| ---- | ------------------------------------------ |
| idx  | index.md                                   |
| tde  | timelines_digital_evolution.md             |
| inet | internet.md                                |
| wai  | what_is_ai.md                              |
| llm  | large_language_models.md                   |
| pe   | prompt_engineering.md                      |
| eai  | embedded_ai.md                             |
| pia  | professional_impact_of_ai.md               |
| hw   | hardware.md                                |
| iot  | input_output_technologies.md               |
| app  | application_software.md                    |
| sso  | system_software_operating_system.md        |
| wdo  | what_does_operating_system_do.md           |
| tod  | types_of_data.md                           |
| dhm  | data_hierarchy_modeling.md                 |
| dbs  | database_storage.md                        |
| virt | virtualization.md                          |
| xaas | xaas.md                                    |
| ncp  | networking_communication_patterns.md       |
| coc  | cybersecurity_organizational_challenges.md |
| cam  | cyberattack_motivations_impact.md          |
| ctl  | cybersecurity_threat_landscape.md          |
| caa  | cybersecurity_attacking_with_ai.md         |
| cds  | cyberdefense_strategies.md                 |

`C` = Covered, `P` = Partial/tangential, `–` = No coverage found.

## Coverage Table

| Objective                                                            | idx                                                    | tde                         | inet                     | wai                        | llm | pe  | eai                                  | pia                                 | hw                                    | iot | app                              | sso                    | wdo                                   | tod                           | dhm                            | dbs                                 | virt                                    | xaas                    | ncp                           | coc                                       | cam | ctl | caa                            | cds                          |
| -------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------- | ------------------------ | -------------------------- | --- | --- | ------------------------------------ | ----------------------------------- | ------------------------------------- | --- | -------------------------------- | ---------------------- | ------------------------------------- | ----------------------------- | ------------------------------ | ----------------------------------- | --------------------------------------- | ----------------------- | ----------------------------- | ----------------------------------------- | --- | --- | ------------------------------ | ---------------------------- |
| **1. Meaning of information (human vs. mechanical systems)**         | –                                                      | P (info access across eras) | –                        | P (AI vs. human cognition) | –   | –   | –                                    | –                                   | P (bits/bytes as mechanical encoding) | –   | –                                | –                      | –                                     | P (data vs. information defs) | P (models real-world entities) | –                                   | –                                       | –                       | –                             | –                                         | –   | –   | –                              | –                            |
| **2. Hardware components: functions/interactions**                   | –                                                      | –                           | –                        | –                          | –   | –   | –                                    | –                                   | C                                     | C   | –                                | P (OS/kernel overview) | P (kernel↔hardware, drivers, memory) | –                             | –                              | –                                   | P (virtualized CPU/RAM/storage/network) | –                       | –                             | –                                         | –   | –   | –                              | –                            |
| **3. Engaging presentations w/ visual aids & delivery**              | –                                                      | –                           | –                        | –                          | –   | –   | –                                    | –                                   | –                                     | –   | –                                | –                      | –                                     | –                             | –                              | –                                   | –                                       | –                       | –                             | –                                         | –   | –   | –                              | –                            |
| **4. Software dev principles & SDLC**                                | P (links to `../SDEV120/sdlc.html`, outside this dir)  | –                           | –                        | –                          | –   | –   | –                                    | –                                   | –                                     | –   | P (versioning, licensing models) | –                      | –                                     | –                             | –                              | –                                   | –                                       | –                       | –                             | –                                         | –   | –   | –                              | P (shift-left / secure SDLC) |
| **5. Cloud computing, virtualization, Internet**                     | –                                                      | –                           | C                        | –                          | –   | –   | –                                    | –                                   | P (local vs. cloud storage)           | –   | –                                | –                      | –                                     | –                             | –                              | –                                   | C                                       | C                       | P (underlying comm. patterns) | –                                         | –   | –   | –                              | –                            |
| **6. Data visualization, statistics, reporting in orgs**             | –                                                      | –                           | –                        | –                          | –   | –   | P (AI-generated data viz, mentioned) | –                                   | –                                     | –   | P (spreadsheet formulas demo)    | –                      | –                                     | P (data classification basis) | P (data modeling, not viz)     | –                                   | –                                       | –                       | –                             | –                                         | –   | –   | –                              | –                            |
| **7. Logical/physical storage, local/cloud, DB structures, SAN**     | –                                                      | –                           | –                        | –                          | –   | –   | –                                    | –                                   | P (HDD/SSD/NVMe physical storage)     | –   | –                                | –                      | –                                     | –                             | C (ERD, keys, cardinality)     | P (DB definition only, mostly TODO) | P (storage as shared resource)          | P (IaaS storage rental) | –                             | –                                         | –   | –   | –                              | –                            |
| **8. Informatics supporting an org (life cycles, info flow)**        | –                                                      | –                           | –                        | –                          | –   | –   | –                                    | –                                   | –                                     | –   | –                                | –                      | –                                     | –                             | P (org data modeling, weak)    | P (org DB use, weak)                | –                                       | –                       | –                             | P (org IT/security impact, not info flow) | –   | –   | –                              | –                            |
| **9. Role of security across computing disciplines**                 | –                                                      | –                           | P (passwords, VPN/proxy) | –                          | –   | –   | –                                    | –                                   | –                                     | –   | –                                | –                      | P (memory protection basics)          | –                             | –                              | –                                   | –                                       | –                       | –                             | C                                         | C   | C   | C                              | C                            |
| **10. Ethical, unbiased, effective dissemination of tech knowledge** | P (links to ethics/legal assignment, outside this dir) | –                           | –                        | –                          | –   | –   | P (best practices, human oversight)  | P (critical thinking, verification) | –                                     | –   | –                                | –                      | –                                     | –                             | –                              | –                                   | –                                       | –                       | –                             | –                                         | –   | –   | P (deepfake ethics case study) | –                            |

## Per-Module Objective Coverage

Module layout as listed in `index.md`. Coverage level for a module is the best level found among its constituent files (`C` beats `P` beats `–`). `index.md` itself is folded into the module where the relevant link/assignment appears in its schedule (e.g. the SDLC link under Module 04, the ethics/legal assignment under Module 01), rather than treated as a separate column.

### Module Legend

| Code | Module                                      | Files in this directory                                  |
| ---- | ------------------------------------------- | -------------------------------------------------------- |
| M00  | Module 00: Course Introduction              | _(none — orientation/logistics only)_                    |
| M01  | Module 01: Digital Citizenry & The Internet | tde, inet                                                |
| M0X  | Module 0X: AI in the Tech Industry          | wai, llm, pe, eai, pia                                   |
| M02  | Module 02: Hardware                         | hw, iot                                                  |
| M03  | Module 03: Software                         | app, sso, wdo                                            |
| M04  | Module 04: Program and Web Development      | _(none in this dir — content is `../SDEV120/sdlc.html`)_ |
| M05  | Module 05: Information Systems              | tod, dhm, dbs                                            |
| M06  | Module 06: Networking and Storage           | virt, xaas, ncp                                          |
| M07  | Module 07: Cyber and Digital Security       | coc, cam, ctl, caa, cds                                  |

### Module Coverage Table

| Objective                                                            | M00 | M01                               | M0X          | M02         | M03          | M04                              | M05          | M06            | M07                         |
| -------------------------------------------------------------------- | --- | --------------------------------- | ------------ | ----------- | ------------ | -------------------------------- | ------------ | -------------- | --------------------------- |
| **1. Meaning of information (human vs. mechanical systems)**         | –   | P (tde)                           | P (wai)      | P (hw)      | –            | –                                | P (tod, dhm) | –              | –                           |
| **2. Hardware components: functions/interactions**                   | –   | –                                 | –            | C (hw, iot) | P (sso, wdo) | –                                | –            | P (virt)       | –                           |
| **3. Engaging presentations w/ visual aids & delivery**              | –   | –                                 | –            | –           | –            | –                                | –            | –              | –                           |
| **4. Software dev principles & SDLC**                                | –   | –                                 | –            | –           | P (app)      | P (idx → `../SDEV120/sdlc.html`) | –            | –              | P (cds)                     |
| **5. Cloud computing, virtualization, Internet**                     | –   | C (inet)                          | –            | P (hw)      | –            | –                                | –            | C (virt, xaas) | –                           |
| **6. Data visualization, statistics, reporting in orgs**             | –   | –                                 | P (eai)      | –           | P (app)      | –                                | P (tod, dhm) | –              | –                           |
| **7. Logical/physical storage, local/cloud, DB structures, SAN**     | –   | –                                 | –            | P (hw)      | –            | –                                | C (dhm, dbs) | P (virt, xaas) | –                           |
| **8. Informatics supporting an org (life cycles, info flow)**        | –   | –                                 | –            | –           | –            | –                                | P (dhm, dbs) | –              | P (coc)                     |
| **9. Role of security across computing disciplines**                 | –   | P (inet)                          | –            | –           | P (wdo)      | –                                | –            | –              | C (coc, cam, ctl, caa, cds) |
| **10. Ethical, unbiased, effective dissemination of tech knowledge** | –   | P (idx → ethics/legal assignment) | P (eai, pia) | –           | –            | –                                | –            | –              | P (caa)                     |

Reading across a row shows where in the course sequence an objective gets picked up (and where it doesn't); reading down a column shows how much weight a given module carries. Objective 3 has a blank row across every module — confirms the file-level finding above that presentation skills aren't addressed anywhere in this directory's lecture content (per the instructor note, it's covered by the final-presentation deliverables instead, outside of lecture). Module 00 and Module 04 are blank across the board because neither has lecture content living in this directory (M00 is pure orientation; M04's SDLC content is a cross-course link into `SDEV120`).

## Files with no mapping to any numbered objective

These cover useful topical-area material (per README's "Topical areas" list) but don't land squarely on a numbered learning objective: `large_language_models.md`, `prompt_engineering.md` (LLM mechanics/technique, not tied to an objective), and much of `timelines_digital_evolution.md` beyond the Obj. 1 tangent.

## Objectives with Little or No Coverage

- **Objective 3 (presentations, visual aids, delivery techniques)** — **No coverage anywhere.** Not a single file addresses presentation skills, visual aid design, or delivery technique, despite being a numbered objective and a topical area ("Effective Presentations"). This looks like a real content gap, not just a search miss.

- **Objective 8 (informatics supporting an organization — life cycles, components, flow of information)** — Only weak, incidental coverage from `cybersecurity_organizational_challenges.md` (organizational risk/impact, not information flow) and thin tangents in the data-modeling/database files. No file directly frames information systems' organizational life cycle or information flow.

- **Objective 1 (meaning of information: human vs. mechanical systems)** — Only tangential treatment (`types_of_data.md`'s data-vs-information definitions, `what_is_ai.md`'s AI-vs-human framing, `hardware.md`'s bits/bytes). No file explicitly contrasts how information is "meaningful" to a human vs. how it's represented/processed mechanically.

- **Objective 4 (SDLC / software development principles)** — The actual SDLC lecture (`sdlc.html`) lives in the `SDEV120` course directory, referenced only via a link in `index.md`, not in this directory. Within this directory, coverage is limited to `application_software.md` (versioning/licensing) and `cyberdefense_strategies.md` (shift-left security in dev). No file walks through SDLC phases themselves.

- **Objective 6 (data visualization, statistics, reporting)** — Scattered and shallow: a spreadsheet formulas demo (`application_software.md`), data-classification basics (`types_of_data.md`), and a passing mention of AI-generated visualizations (`embedded_ai.md`). No dedicated treatment of statistics, reporting practices, or visualization techniques.

- **Objective 7, SAN specifically** — The objective explicitly names "storage area network (SAN) technology," and it is **not mentioned in any file**. Logical/physical storage and cloud storage are otherwise reasonably covered (`data_hierarchy_modeling.md`, `hardware.md`, `virtualization.md`, `xaas.md`), and `database_storage.md` is largely a stub (its detailed content is commented out as TODO).

## Well-Covered Objectives (for contrast)

- **Objective 9 (security)** — Strongest coverage in the set: five dedicated files (`cybersecurity_organizational_challenges.md`, `cyberattack_motivations_impact.md`, `cybersecurity_threat_landscape.md`, `cybersecurity_attacking_with_ai.md`, `cyberdefense_strategies.md`) plus supporting mentions in `internet.md` and `what_does_operating_system_do.md`.
- **Objective 5 (cloud, virtualization, Internet)** — Fully covered via `internet.md`, `virtualization.md`, and `xaas.md`, each a dedicated deep-dive.

## Instructor notes on coverage:

There is a final presentation that takes place as a series of deliverables. This teaches office suite competency and presentation skills outside of lecture.

SDLC content is taken from another course. You may assume that it is completely covered.

The AI notes are an interrim module introduced at my discretion. It was deemed critical to provide exposure to these topics prior to students exiting college in an IT program.
