"use client";

export function setTheme(theme: "dark" | "light") {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {}
}

export function ThemeToggle() {
  const toggleTheme = () => {
    setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
  };

  return (
    <button
      aria-keyshortcuts="L D"
      aria-label="Toggle light and dark mode"
      className="nav-link theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span className="theme-label-light">[L]&nbsp;Light</span>
      <span className="theme-label-dark">[D]&nbsp;Dark</span>
    </button>
  );
}
