// Get all code blocks
const codeBlocks = document.querySelectorAll("pre");

codeBlocks.forEach((pre) => {
  // Create button container div
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("codeSnippetButtonContainer");

  // Create copy button
  const copyButton = document.createElement("button");
  copyButton.innerHTML = "📋";
  copyButton.classList.add("codeSnippetButton");

  // Create dark mode toggle button
  const darkModeButton = document.createElement("button");
  darkModeButton.innerHTML = "️☀️";
  darkModeButton.classList.add("codeSnippetButton");

  // Add click handlers
  copyButton.addEventListener("click", () => {
    const code = pre.querySelector("code").innerText;
    navigator.clipboard.writeText(code);

    // Visual feedback
    const originalText = copyButton.innerHTML;
    copyButton.innerHTML = "✓ Copied!";
    setTimeout(() => {
      copyButton.innerHTML = originalText;
    }, 1000);
  });

  darkModeButton.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    darkModeButton.innerHTML = body.classList.contains("dark") ? "🌙" : "☀️";
  });

  // Add buttons to container
  buttonContainer.appendChild(copyButton);
  buttonContainer.appendChild(darkModeButton);

  // Make pre relative positioning for absolute button positioning
  pre.style.position = "relative";

  // Add container to pre
  pre.appendChild(buttonContainer);
});
