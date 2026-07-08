const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const siteBaseUrl = "https://cc-2a.github.io/cc2a-ajaccio/";

const internalPages = new Map([
  ["index.html", siteBaseUrl],
  ["realisations.html", `${siteBaseUrl}realisations.html`],
  ["agences-bailleurs-conciergeries.html", `${siteBaseUrl}agences-bailleurs-conciergeries.html`],
  ["recherche-fuite-ajaccio.html", `${siteBaseUrl}recherche-fuite-ajaccio.html`],
  ["remplacement-chauffe-eau-ajaccio.html", `${siteBaseUrl}remplacement-chauffe-eau-ajaccio.html`],
  ["depannage-plomberie-ajaccio.html", `${siteBaseUrl}depannage-plomberie-ajaccio.html`],
  ["debouchage-ajaccio.html", `${siteBaseUrl}debouchage-ajaccio.html`],
  ["mentions-legales.html", `${siteBaseUrl}mentions-legales.html`],
  ["sitemap.xml", `${siteBaseUrl}sitemap.xml`],
]);

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

function normalizeInternalLink(link) {
  const rawHref = link.getAttribute("href");
  if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("tel:") || rawHref.startsWith("mailto:") || rawHref.startsWith("https://wa.me") || rawHref.startsWith("https://maps.app.goo.gl")) {
    return;
  }

  const [page, hash = ""] = rawHref.split("#");
  if (!internalPages.has(page)) {
    return;
  }

  const finalUrl = `${internalPages.get(page)}${hash ? `#${hash}` : ""}`;
  link.href = finalUrl;
  link.dataset.internalUrl = finalUrl;
}

document.querySelectorAll("a[href]").forEach(normalizeInternalLink);

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-internal-url]");
  if (!link) {
    return;
  }
  event.preventDefault();
  window.location.href = link.dataset.internalUrl;
});

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
