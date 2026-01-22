document.addEventListener("DOMContentLoaded", () => {
  // Año footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ===== LIGHTBOX GALERÍA =====
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  if (!lightbox || !lightboxImg || !lightboxClose) return;

  // Helper: extraer URL desde background-image: url("...")
  const extractBgUrl = (el) => {
    const bg = getComputedStyle(el).backgroundImage; // url("...") o none
    if (!bg || bg === "none") return null;
    const match = bg.match(/url\(["']?(.*?)["']?\)/i);
    return match ? match[1] : null;
  };

  const openLightbox = (url) => {
    if (!url) return;
    lightboxImg.src = url;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  };

  // Click en cualquiera de las mitades (antes/después)
  document.querySelectorAll(".ba__side").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = extractBgUrl(btn);
      openLightbox(url);
    });
  });

  // Cerrar con X
  lightboxClose.addEventListener("click", closeLightbox);

  // Cerrar clickeando el fondo
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

document.addEventListener("DOMContentLoaded", () => {
  // Año footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ===== LIGHTBOX GALERÍA =====
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  if (!lightbox || !lightboxImg || !lightboxClose) return;

  // Helper: extraer URL desde background-image: url("...")
  const extractBgUrl = (el) => {
    const bg = getComputedStyle(el).backgroundImage; // url("...") o none
    if (!bg || bg === "none") return null;
    const match = bg.match(/url\(["']?(.*?)["']?\)/i);
    return match ? match[1] : null;
  };

  const openLightbox = (url) => {
    if (!url) return;
    lightboxImg.src = url;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  };

  // Click en cualquiera de las mitades (antes/después) + también sirve para destacadas
  document.querySelectorAll(".ba__side").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = extractBgUrl(btn);
      openLightbox(url);
    });
  });

  // Cerrar con X
  lightboxClose.addEventListener("click", closeLightbox);

  // Cerrar clickeando el fondo
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // ===== ABONO CARD =====
  const openAbono = document.getElementById("openAbono");
  const abonoCard = document.getElementById("abonoCard");
  const closeAbono = document.getElementById("closeAbono");

  if (openAbono && abonoCard && closeAbono) {
    openAbono.addEventListener("click", () => {
      abonoCard.classList.add("is-open");
    });

    closeAbono.addEventListener("click", () => {
      abonoCard.classList.remove("is-open");
    });

    abonoCard.addEventListener("click", (e) => {
      if (e.target === abonoCard) {
        abonoCard.classList.remove("is-open");
      }
    });
  }
});
// ===== REFUERZO: volver a procesar embeds de Instagram al cargar =====
window.addEventListener("load", () => {
  if (window.instgrm && window.instgrm.Embeds) {
    window.instgrm.Embeds.process();
  }
});

});
