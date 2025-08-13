const renderTitle = (element, iconClass, title) => {
  const iconElement = document.createElement("i");
  iconElement.className = `bi ${iconClass}`;

  const titleElement = document.createElement("span");
  titleElement.textContent = title;

  const container = document.createElement("div");
  container.classList.add("focusContentTitleContainer");
  container.appendChild(iconElement);
  container.appendChild(titleElement);

  element.insertBefore(container, element.firstChild);
};

const demos = document.querySelectorAll(".demo");
const examples = document.querySelectorAll(".example");
const exercises = document.querySelectorAll(".exercise");
const lookouts = document.querySelectorAll(".lookout");
const asides = document.querySelectorAll(".note");

demos.forEach((demo) => {
  renderTitle(demo, "bi-lightbulb", "Demo");
});

examples.forEach((example) => {
  renderTitle(example, "bi-search", "Example");
});

exercises.forEach((exercise) => {
  renderTitle(exercise, "bi-pencil-square", "Exercise");
});

lookouts.forEach((lookout) => {
  renderTitle(lookout, "bi-exclamation-circle", "Look Out!");
});

asides.forEach((aside) => {
  renderTitle(aside, "bi-book", "Side Note");
});
