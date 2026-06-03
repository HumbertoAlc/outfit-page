const themeBtns = document.querySelectorAll(".theme-btn");

themeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const root = document.documentElement;
    const theme = btn.dataset.theme;

    if (theme === "dark") {
      root.style.setProperty("--bg", "#111");
      root.style.setProperty("--text", "#ede4dd");
      root.style.setProperty("--accent", "#ede4dd");
    }

    if (theme === "light") {
      root.style.setProperty("--bg", "#ede4dd");
      root.style.setProperty("--text", "#111");
      root.style.setProperty("--accent", "#111");
    }

    if (theme === "red") {
      root.style.setProperty("--bg", "#ede4dd");
      root.style.setProperty("--text", "#111");
      root.style.setProperty("--accent", "red");
    }
  });
});
