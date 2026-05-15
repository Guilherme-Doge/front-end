const html = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

function applyTheme(theme) {
    if (theme === "dark") {
        html.classList.add("dark");
        if (themeIcon) themeIcon.src = "./assets/icons/sun.svg";
    } else {
        html.classList.remove("dark");
        if (themeIcon) themeIcon.src = "./assets/icons/moon.svg";
    }
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isDark = html.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");

        if (themeIcon) {
            themeIcon.src = isDark ? "./assets/icons/sun.svg" : "./assets/icons/moon.svg";
        }
    });
}

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}