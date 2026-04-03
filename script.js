const revealElements = document.querySelectorAll("[data-reveal]");
const themeButtons = document.querySelectorAll("[data-theme-set]");
const themeKey = "parsa-portfolio-theme";

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;

  themeButtons.forEach((button) => {
    const isActive = button.dataset.themeSet === theme;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const initialTheme =
  window.localStorage.getItem(themeKey) ||
  document.documentElement.dataset.theme ||
  "matte";

applyTheme(initialTheme);

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = button.dataset.themeSet;
    applyTheme(nextTheme);
    window.localStorage.setItem(themeKey, nextTheme);
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -24px 0px",
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
