---
name: course-image-insert
description: Downloads an externally-hosted image to the local images/ directory and replaces a matching `<!-- img: alt text -->` placeholder comment in a markdown file with a local <figure> block. Use whenever given an image URL together with a target file or alt text, or when a markdown file contains one or more `<!-- img: ... -->` placeholder comments that need to be resolved to local images.
---

# Course Image Insert

Replaces `<!-- img: alt text -->` placeholder comments in course notes markdown with a local, self-hosted `<figure>` block, downloading the source image into the project's `images/` directory along the way.

## When this runs

You'll typically be given one of:

- A single image URL plus a target file (and optionally which placeholder, if the file has more than one).
- A batch of URL → placeholder pairs to resolve in one pass.

If a URL is given without enough information to identify which placeholder it belongs to, and the target file contains more than one `<!-- img: ... -->` comment, ask which one before doing anything — do not guess.

## Procedure (per image)

1. **Locate the placeholder.** Find the exact `<!-- img: alt text -->` comment in the target file. The alt text inside it is the alt text to use — copy it verbatim into the output, only escaping literal `"` as `&quot;` since it sits inside an HTML attribute.

2. **Download the source, don't trust it blindly.**
   - Use `curl -L --max-time 30 -A "Mozilla/5.0 (compatible; course-notes-bot)" -o <tmpfile> "<url>"` (follow redirects, cap the wait, send a normal-looking User-Agent — plenty of hosts 403 the default curl UA even when the resource is otherwise public).
   - Check the curl exit code and, if you can get it, the HTTP status. A non-2xx response or curl failure means: **stop, leave the file untouched, and report the specific reason** (403, 404, timeout, connection refused, etc.) so the user can supply an alternate source. Never insert a broken reference.
   - Confirm it's actually an image: run `file <tmpfile>` and check the reported type rather than trusting the URL's extension or the server's `Content-Type` header — both lie often enough to matter (a 403 page or redirect-to-login served with a 200 and an `image/*` label is a known failure mode).
   - Reject anything implausibly small (a good rule of thumb: under ~500 bytes is almost always an error page, tracking pixel, or placeholder image, not real content). Flag it the same way as a failed download.

3. **Name the file.**
   - Derive the base filename from the alt text: lowercase, spaces and punctuation collapsed to single hyphens, trimmed of leading/trailing hyphens, capped around 50 characters.
   - Determine the extension from the *actual* file type detected in step 2 (jpg, png, gif, webp, svg), not from the URL.
   - If `images/<name>.<ext>` already exists, don't overwrite it silently. Append `-2`, `-3`, etc. until the name is free.

4. **Save it.** Move the validated temp file to `images/<filename>` under the project's working directory.

5. **Replace the placeholder.** Swap the exact `<!-- img: alt text -->` comment for:

   ```html
   <figure>
     <img src="images/[filename]" alt="[alt text]" style="width: 100%;height: auto;">
   </figure>
   ```

   Match on the placeholder's exact text as the edit anchor — that's what makes the placement unambiguous even without visual context on the document.

## Batch behavior

When resolving several placeholders in one request, handle each independently: one failed download should never block the others. At the end, summarize what happened — which placeholders were resolved (with filenames), and which failed and why, so the user can go find replacement sources for just the failures rather than re-running the whole batch.

## Guardrails

- Never modify a placeholder unless the corresponding download was verified as a real image of reasonable size.
- Never overwrite an existing file in `images/`.
- Never guess at placeholder location by proximity or formatting — the comment text is the only anchor to match on.
- If `curl` isn't available, fall back to `wget` with equivalent flags (`--max-redirect`, timeout, matching `-U` user-agent).
