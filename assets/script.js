(function () {
  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Tabs / filters
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const items = Array.from(document.querySelectorAll(".t-item"));

  function setTrack(track) {
    tabs.forEach(t => {
      const active = t.dataset.track === track;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });

    items.forEach(i => {
      const tracks = (i.dataset.track || "").split(" ");
      const show = track === "all" || tracks.includes(track);
      i.style.display = show ? "block" : "none";
    });
  }

  tabs.forEach(t => t.addEventListener("click", () => setTrack(t.dataset.track)));
  setTrack("all");

  // Year in footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
