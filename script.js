// Set theme immediately to prevent flash
(function () {
  const savedTheme = localStorage.getItem("theme");
  const theme =
    savedTheme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  document.documentElement.setAttribute("data-theme", theme);
})();

// Theme management
document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;

// Get saved theme from localStorage or use system preference
function getPreferredTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme;
  }
  // Check system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Apply theme
function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

// Toggle theme
function toggleTheme() {
  const currentTheme = root.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

// Initialize theme on page load
setTheme(getPreferredTheme());

// Listen for theme toggle button click
themeToggle.addEventListener("click", toggleTheme);

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      // Only update if user hasn't manually set a preference
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });
});
