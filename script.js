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

  // ===== LIGHTBOX GALERÍA / DESTACADAS =====
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  if (lightbox && lightboxImg && lightboxClose) {
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

    const closeLightboxFn = () => {
      lightbox.classList.remove("is-open");
      lightboxImg.src = "";
      document.body.style.overflow = "";
    };

    document.querySelectorAll(".ba__side").forEach(btn => {
      btn.addEventListener("click", () => {
        const url = extractBgUrl(btn);
        openLightbox(url);
      });
    });

    lightboxClose.addEventListener("click", closeLightboxFn);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightboxFn();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightboxFn();
    });
  }

  // ===== IG EMBEDS (refuerzo móvil) =====
  const processIG = () => {
    if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === "function") {
      window.instgrm.Embeds.process();
    }
  };

  // Intenta procesar al cargar DOM
  processIG();

  // Reintentos por si el script async de Instagram llega tarde (muy común en móvil)
  setTimeout(processIG, 500);
  setTimeout(processIG, 1500);

  // Y al terminar de cargar todo
  window.addEventListener("load", processIG);
});
