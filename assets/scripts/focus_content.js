const renderTitle = (element, icon, title) => {
  const iconElement = document.createElement("span");
  iconElement.textContent = icon;

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
  renderTitle(demo, "💡", "Demo");
});

examples.forEach((example) => {
  renderTitle(example, "🔍", "Example");
});

exercises.forEach((exercise) => {
  renderTitle(exercise, "📝", "Exercise");
});

lookouts.forEach((lookout) => {
  renderTitle(lookout, "👀", "Lookout!");
});

asides.forEach((aside) => {
  renderTitle(aside, "📚", "Side Note");
});
