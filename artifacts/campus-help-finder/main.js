const searchInput = document.querySelector("#resource-search");
const cards = Array.from(document.querySelectorAll(".resource-card"));
const countLabel = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const clearButton = document.querySelector("#clear-search");

function filterResources() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  for (const card of cards) {
    const searchableText = `${card.dataset.search} ${card.textContent}`.toLocaleLowerCase();
    const matches = searchableText.includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  }

  countLabel.textContent = `${visibleCount} ${visibleCount === 1 ? "resource" : "resources"}`;
  emptyState.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterResources);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  filterResources();
  searchInput.focus();
});

document.querySelectorAll(".learn-link").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
