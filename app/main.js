document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".category-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const text = btn.textContent.trim().toLowerCase(); // highlights, arrival...
      const target = document.getElementById(text);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

