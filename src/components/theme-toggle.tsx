"use client";

export function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
      const theme = root.dataset.theme === "light" ? "dark" : "light";

      root.dataset.theme = theme;
      try {
        localStorage.setItem("theme", theme);
      } catch {}
    };

  return (
    <button
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
