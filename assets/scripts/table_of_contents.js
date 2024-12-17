const toc = document.querySelector(".toc");
if (toc) {
  // Add Bootstrap collapse class
  toc.classList.add("collapse");
  toc.id = "toc";

  // Create toggle button with Bootstrap attributes
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "toc-toggle btn btn-primary";
  toggleBtn.setAttribute("data-bs-toggle", "collapse");
  toggleBtn.setAttribute("data-bs-target", "#toc");
  toggleBtn.innerHTML = '<i class="bi bi-chevron-right"></i>';

  toggleBtn.addEventListener("click", () => {
    const icon = toggleBtn.querySelector("i");
    setTimeout(() => {
      if (icon.classList.contains("bi-chevron-right")) {
        icon.classList.remove("bi-chevron-right");
        icon.classList.add("bi-chevron-left");
      } else {
        icon.classList.remove("bi-chevron-left");
        icon.classList.add("bi-chevron-right");
      }
    }, 200);
  });

  toc.parentNode.insertBefore(toggleBtn, toc.nextSibling);
}
