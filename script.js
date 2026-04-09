const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("open");
  });
}

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 960 && siteNav && menuButton) {
      siteNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
});
