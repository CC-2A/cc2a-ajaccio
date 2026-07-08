const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const logoUrl = "https://cc-2a.github.io/cc2a-ajaccio/Logos%20CC-2A%20.png";

function optimizeMobileHero() {
  const mainCallButton = document.querySelector('.hero .hero-actions .btn-primary[href^="tel:"]');
  if (!mainCallButton) return;

  if (window.matchMedia("(max-width: 760px)").matches) {
    mainCallButton.style.display = "none";
  } else {
    mainCallButton.style.display = "";
  }
}

function optimizeMobileBrandText() {
  const brand = document.querySelector(".premium-brand");
  const brandText = brand ? brand.querySelector("span") : null;
  const brandTitle = brand ? brand.querySelector("strong") : null;
  const brandSubtitle = brand ? brand.querySelector("small") : null;
  if (!brand || !brandText || !brandTitle || !brandSubtitle) return;

  if (window.matchMedia("(max-width: 760px)").matches) {
    Object.assign(brand.style, {
      flex: "1 1 auto",
      display: "grid",
      gridTemplateColumns: "96px minmax(0, 1fr)",
      alignItems: "center",
      gap: "0",
      minWidth: "0",
    });

    Object.assign(brandText.style, {
      justifySelf: "center",
      textAlign: "center",
      marginLeft: "18px",
      paddingRight: "4px",
      transform: "translateX(6px)",
      minWidth: "0",
    });

    Object.assign(brandTitle.style, {
      display: "block",
      color: "#ffcc1a",
      textShadow: "0 2px 18px rgba(255, 204, 26, 0.35)",
      letterSpacing: "0.03em",
    });

    Object.assign(brandSubtitle.style, {
      display: "block",
      color: "#f8e7a1",
      letterSpacing: "0.16em",
      textShadow: "0 2px 14px rgba(248, 231, 161, 0.20)",
    });
  } else {
    brand.removeAttribute("style");
    brandText.removeAttribute("style");
    brandTitle.removeAttribute("style");
    brandSubtitle.removeAttribute("style");
  }
}

optimizeMobileHero();
optimizeMobileBrandText();
window.addEventListener("resize", () => {
  optimizeMobileHero();
  optimizeMobileBrandText();
});

document.querySelectorAll(".brand-mark").forEach((mark) => {
  const logo = document.createElement("img");
  logo.className = "brand-logo";
  logo.src = logoUrl;
  logo.alt = "Logo CC-2A Plomberie Chauffage";
  logo.loading = "eager";
  Object.assign(logo.style, {
    width: "70px",
    height: "70px",
    objectFit: "cover",
    objectPosition: "center",
    transform: "scale(1.22)",
    borderRadius: "16px",
    background: "#ffffff",
    padding: "0",
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
