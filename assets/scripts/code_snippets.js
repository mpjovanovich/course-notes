// Get all code blocks
const codeBlocks = document.querySelectorAll("pre");

codeBlocks.forEach((pre) => {
  // Create button container div
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("codeSnippetButtonContainer");

  // Create copy button
  const copyButton = document.createElement("button");
  copyButton.innerHTML = '<i class="bi bi-clipboard"></i>';
  copyButton.classList.add("codeSnippetButton");
  copyButton.setAttribute("title", "Copy code");

  // Create dark mode toggle button
  const darkModeButton = document.createElement("button");
  darkModeButton.innerHTML = '<i class="bi bi-sun"></i>';
  darkModeButton.classList.add("codeSnippetButton");
  darkModeButton.setAttribute("title", "Toggle dark mode");

  // Add click handlers
  copyButton.addEventListener("click", () => {
    const code = pre.querySelector("code").innerText;
    navigator.clipboard.writeText(code);

    // Visual feedback
    const originalIcon = copyButton.innerHTML;
    copyButton.innerHTML = '<i class="bi bi-clipboard-check"></i>';
    setTimeout(() => {
      copyButton.innerHTML = originalIcon;
    }, 1000);
  });

  darkModeButton.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    darkModeButton.innerHTML = body.classList.contains("dark")
      ? '<i class="bi bi-moon"></i>'
      : '<i class="bi bi-sun"></i>';
  });

  // Add buttons to container
  buttonContainer.appendChild(copyButton);
  buttonContainer.appendChild(darkModeButton);

  // Make pre relative positioning for absolute button positioning
  pre.style.position = "relative";

  // Add container to pre
  pre.appendChild(buttonContainer);
});
