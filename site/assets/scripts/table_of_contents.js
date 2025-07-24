const toc = document.querySelector(".toc");
if (toc) {
  // Add Bootstrap collapse class
  toc.classList.add("collapse");
  toc.id = "toc";

  // Extract course URL from current path
  const currentPath = window.location.pathname;
  const courseMatch = currentPath.match(/\/course-notes\/([^\/]+)/);
  if (courseMatch) {
    const courseUrl = `https://mpjovanovich.github.io/course-notes/${courseMatch[1]}/`;

    // Create home link
    const homeLink = document.createElement("a");
    homeLink.href = courseUrl;
    homeLink.textContent = "Home";
    homeLink.className = "toc-home";

    // Create container for home link
    const homeLi = document.createElement("li");
    homeLi.appendChild(homeLink);

    // Insert at top of TOC
    const tocUl = toc.querySelector("ul");
    tocUl.insertBefore(homeLi, tocUl.firstChild);
  }

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
