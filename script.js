
// Año actual en el footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Filtros por etiquetas
  const filterButtons = document.querySelectorAll(".filter-btn");
  const caseCards = document.querySelectorAll(".case-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      caseCards.forEach((card) => {
        const tags = card.getAttribute("data-tags") || "";
        if (filter === "all" || tags.includes(filter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
