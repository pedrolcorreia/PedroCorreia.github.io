(function () {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Highlight current nav item
  const path = location.pathname.replace(/\/$/, "");
  const links = document.querySelectorAll('a[data-nav]');
  links.forEach(a => {
    const href = a.getAttribute("href").replace(/\/$/, "");
    if (href !== "/" && path.endsWith(href)) a.classList.add("pill");
  });
})();
