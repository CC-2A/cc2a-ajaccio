const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

const photoSection = document.querySelector(".work-gallery-section");
if (photoSection) {
  photoSection.id = "photos";

  const heroActions = document.querySelector(".hero-actions");
  if (heroActions && !heroActions.querySelector('[href="#photos"]')) {
    const photoButton = document.createElement("a");
    photoButton.className = "btn btn-outline";
    photoButton.href = "#photos";
    photoButton.textContent = "Voir les photos";
    heroActions.appendChild(photoButton);
  }

  if (nav && !nav.querySelector('[href="index.html#photos"]')) {
    const photoNavLink = document.createElement("a");
    photoNavLink.href = "index.html#photos";
    photoNavLink.textContent = "Photos";
    const contactLink = nav.querySelector('a[href="index.html#contact"]');
    nav.insertBefore(photoNavLink, contactLink || null);
  }
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }),
  );
}
