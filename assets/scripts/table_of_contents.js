// Create and append the sticky header
const stickyHeader = document.createElement("header");
stickyHeader.classList.add("sticky-header");

// Add menu button
const menuButton = document.createElement("button");
menuButton.innerHTML = "☰";
menuButton.classList.add("menu-toggle");

// Add title
const title = document.createElement("h1");
title.classList.add("header-title");

// Add click handler
menuButton.addEventListener("click", () => {
  const toc = document.querySelector(".toc");
  toc.classList.toggle("open");
});

// Append elements
stickyHeader.appendChild(menuButton);
stickyHeader.appendChild(title);
document.body.prepend(stickyHeader);
