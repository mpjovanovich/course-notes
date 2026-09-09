# Input & Output Technologies — Restructure Outline

Reviewed: `input_output_technologies.md`

## Context

The current file is a flat device catalog: 8 Input subsections, 3 Output subsections, then a "Future Trends" tack-on. Each subsection is technically fine on its own, and several of the note boxes (QWERTY jamming, wooden mouse, GPS/relativity, SONAR) are genuinely good trivia — but nothing connects one subsection to the next. It reads as "here are 11 categories of devices," not an argument, which is what makes an otherwise fact-rich lecture feel dry. The second half of the class (interactive) is out of scope for this pass — this is about restructuring the didactic first half only.

## Organizing frame

**Primary throughline (thesis):** the best interface doesn't always win — the first good-enough one does, and switching costs keep it in place. QWERTY is already in the doc as the seed example; promote it from "note box aside" to the lecture's opening frame, then let later sections pay it off.

**Secondary lens (runs under every section):** who does a given interface include or exclude. This is the biggest actual content gap — accessibility is barely present today (BCI's ALS/locked-in mention is the only real example) — and it's the most substantive value-add for an information science course, not just filler.

**Light tertiary callback:** input/output as the interface layer for AI systems now (voice, gesture, BCI as inputs to AI agents) — mirrors the GPU→AI callback already used in the hardware module split (see `hardware_module_review.md`), reusing a pattern that's worked before.

## Restructured flow

Reuses ~90% of existing content, reordered and reframed; new material is called out.

### Opening (NEW, ~1 min)

- Move the QWERTY jamming story out of its note box and up front as the hook.
- State the thesis explicitly: the winning interface is often the first good-enough one, not the best one — switching costs lock it in.
- Keep the existing Input/Processing/Output definitions, but subordinate them under the hook rather than leading with them.

### Part 1: Input

- **Keyboards** — keep QWERTY note as the seed story; add one line after the Dvorak/Colemak bullet explicitly naming this as lock-in (technically inferior standard, real switching cost). NEW: one line on adaptive keyboards (large-key, one-handed, eye-tracking) as an accessibility example.
- **The Mouse** — keep as-is. Optional one-line tie-in: trackball/joystick mice for limited dexterity, under the existing DPI bullet.
- **Touch Technologies** — keep the capacitive note and check-in exercise as-is (already good). NEW: brief counter-example — capacitive touch's glove/moisture problem is itself an exclusion case; screen-reader touch gestures (e.g. VoiceOver) as touch enabling access for blind users.
- **Pen Input** — keep. Add one line: if handwritten notes improve retention, why hasn't pen input displaced typing? — a second lock-in example, ties back to thesis.
- **Voice and Audio Input** — keep ML/phonetics note. NEW: accessibility line (voice as a primary access method for motor-impaired users) + AI-era callback line (natural language as the emerging universal input — ties to `large_language_models.md`).
- **Video and Imaging Input** — keep as-is; already has good breadth (webcam privacy note, interesting-applications list).
- **Motion Input Systems** — keep as-is.
- **Locational Technologies** — keep as-is (GPS/Einstein note, geofencing note both land well already).

### Part 2: Output

- **Print Technologies** — keep as-is.
- **Display Technologies** — keep LCD/OLED/E-ink and the eye-strain lookout box. NEW: one line on accessibility (high-contrast/E-ink modes, screen magnification for low-vision users).
- **Audio Output** — keep SONAR trivia. NEW: one line on captions/audio description as output-side accessibility — pairs with the voice-input transcription mention for symmetry.

### Part 3: Future Trends

- Keep AR/VR as-is.
- **Brain-computer interfaces** — already has the strongest accessibility content in the file (ALS, locked-in syndrome communication); promote it as the intended emotional/practical high point of the close rather than a bullet among bullets.
- Keep the existing AR check-in exercise.
- NEW: closing line that calls back to the opening thesis — will the next winning interface be the best one, or the first good-enough one? — hands off cleanly into the interactive second half.

## New content to write (7 short items, ~1–2 sentences each)

1. Opening thesis/hook paragraph
2. Adaptive-keyboard accessibility line
3. Touch accessibility counter-example (screen-reader gestures)
4. Voice input AI-era callback line
5. Display accessibility line (low-vision)
6. Audio output accessibility line (captions/audio description)
7. Closing thesis-callback line

## Why this structure

- Keeps all existing trivia boxes and the check-in exercises untouched — they already work; the fix is connective tissue between them, not more content.
- Concentrates new writing in short, targeted additions rather than a rewrite.
- Doesn't touch the interactive second half of the class.

## Open questions / follow-up

- Whether to also pull the privacy/surveillance material (webcam note, geofencing, GPS tracking) into an explicit third thread of its own, rather than leaving it as scattered asides — flagging as optional, not doing it in this pass.
- Whether per-section design-challenge prompts (e.g. "pick a display/input combo for X constraint") get added inline here or left to the second half's interactive time — leaning toward leaving them to the second half, but noting the choice.
- TOC in the file will need updating once the opening reframe subsection is added.
