# Module 02 (Hardware) Review & Split Plan

Reviewed: `hardware.md`, `input_output_technologies.md`, `index.md` (Module 02 section)

## Context

Module 02 is currently split across one class day:

- **Part I:** `hardware.md` (445 lines) — entire file
- **Part II:** `input_output_technologies.md` (skim, 343 lines) + Installing Git + Basic Shell Commands + backup script exercise

`hardware.md` is the longest lecture file in the whole course (median lecture file is ~175–230 lines; next-longest is `networking_communication_patterns.md` at 419 lines, which is itself a full day's Part I+II). Loading all of `hardware.md` into a single "Part I" slot — especially one where "Part II" the same day is already packed with I/O, Git, and a shell exercise — is too much for one sitting. It should be split.

## Relevancy — content check

- No overlap/redundancy found between `hardware.md`'s **Connectivity** section (ports/cables/adapters) and `input_output_technologies.md`. The latter covers input/output *device categories* (keyboards, mice, displays, sensors); the former covers physical *connectors*. They're complementary, not duplicative — no change needed there.
- All sections in `hardware.md` are on-topic for an intro hardware survey. Nothing looks out of place enough to cut outright. The **Maintenance and Protection** subsections (drivers, surge/UPS, warranty, backups, system images) are more "how to protect your investment" than physical components, but that's a reasonable and expected close to a consumer hardware lecture — flagged below only as a natural split boundary, not as content to remove.

## Clarity issues found (not yet fixed)

1. **Line 182, Registers:** "they built into the CPU" → grammar error, should be "they **are** built into the CPU."
2. **CPU section redundancy:** the "Key specifications" bullet (line 128, clock speed in GHz) and the "System Clock and Clock Speed" note box directly below it (lines 138–149) both explain GHz/clock speed back-to-back. Worth tightening into one explanation rather than two.
3. **System Bus section (lines 107–116):** the word-size/32-bit-vs-64-bit explanation is denser than the rest of the file's reading level and may be more detail than an intro audience needs — candidate for simplification.
4. **Heading structure:** `## Graphics`, `## Power`, and `## Performance Considerations` each contain exactly one `###` subsection (`### Graphics Processing`, `### Power Supply Unit (PSU)`, `### How Much Processing Power Do You Need?`). A heading with a single child adds a TOC entry without adding navigational value — candidates to flatten (drop the redundant `###` and fold its content under the `##`).

These are small enough to fix inline whenever the split is implemented — no separate cleanup pass needed.

## Proposed split

Split `hardware.md` into two files along the natural "how it works" → "how to choose and care for it" boundary. This keeps Part I / Part II of the class day as-is and instead gives Part I two shorter, better-paced files:

### File 1: `hardware_fundamentals.md` (~190 lines + 1 new subsection)

Internal components — the conceptual half.

- Introduction: Understanding the Basics (bits and bytes)
- Computer System Components (form factors, chassis, motherboard, system bus, CPU)
- Memory (registers, cache, RAM, storage devices)
  - **NEW — "How Much RAM Do You Need?"**: short table under RAM, same shape as the existing "How Much Processing Power Do You Need?" table (e.g. 8GB: browsing/office, 16GB: multitasking/light creative work, 32GB+: video editing/virtualization/dev work). Gives the RAM section a practical takeaway on par with the rest of the file instead of ending on "often the most cost-effective upgrade" alone.

Keeps the latency-analogy table and the compute-vs-I/O note box, since both set up vocabulary used throughout the rest of the module.

### File 2: `hardware_selection_and_care.md` (~215 lines + 3 new subsections)

Choosing, connecting, and protecting a machine — the applied half.

- Graphics
  - **NEW — "GPUs Beyond Gaming"**: brief addition to Graphics Processing covering video encoding and AI/ML workloads. Deliberate callback to the course's earlier AI module (`what_is_ai.md`, `large_language_models.md`) — connects hardware back to why GPUs matter for the AI content students already covered.
- Power (PSU)
- Connectivity (ports, adapters)
  - **NEW — Bluetooth**: minimal coverage alongside the existing Network bullet (Ethernet/Wi-Fi) — what it is, common uses (peripherals, audio), effective range. Kept light; this isn't meant to become a full wireless-standards section.
- Performance Considerations (how much processing power do you need)
- **NEW — "Reading a Spec Sheet"**: capstone subsection/in-class exercise placed just before the Conclusion. Real (or realistic) product listing; students decode it using CPU/RAM/storage/GPU/port vocabulary from both files. Gives Part I a concrete hands-on moment and a natural transition into the Conclusion's decision-making framing.
- Maintenance and Protection (drivers, power protection, warranty, data management, system images/restore points)
- Conclusion: Making Informed Decisions

This groups everything a student would actually weigh when buying or maintaining a computer, closing with the existing conclusion (which already reads as a buying/decision-making summary, so it fits better here than as a cap on the internals file).

### Why this split point

- Roughly even length (188 vs. 215 lines pre-cleanup), both in line with peer lecture files.
- Matches a natural teaching transition: explain how a computer works internally, then apply that to choosing/connecting/maintaining one.
- The Conclusion's framing ("hardware choices should match usage patterns," "balanced systems," "protection prevents damage") ties directly to File 2's content, not File 1's.

## Follow-up (not part of this plan, flagging for later)

- `index.md`'s Module 02 "Part I" bullet list currently points to `hardware.html` alone; it would need a second bullet added for the new second file once the split is made.
- Apply the 4 clarity fixes above during the split edit, since the content is being touched anyway.
