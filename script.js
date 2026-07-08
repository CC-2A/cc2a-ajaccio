const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const logoUrl = "https://cc-2a.github.io/cc2a-ajaccio/Logos%20CC-2A%20.jpg";

document.querySelectorAll(".brand-mark").forEach((mark) => {
  const logo = document.createElement("img");
  logo.className = "brand-logo";
  logo.src = logoUrl;
  logo.alt = "Logo CC-2A Plomberie Chauffage";
  logo.loading = "eager";
  Object.assign(logo.style, {
    width: "54px",
    height: "54px",
    objectFit: "contain",
    borderRadius: "14px",
    background: "#ffffff",
    padding: "4px",
    boxShadow: "0 12px 30px rgba(255, 204, 26, 0.18)",
    flex: "0 0 auto",
  });
  mark.replaceWith(logo);
});

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
