// /js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // === NAVBAR / MENÚ MOBILE ===
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu-list");

  if (btn && menu) {
    const iconBars = btn.querySelector(".menu-icon--bars");
    const iconClose = btn.querySelector(".menu-icon--close");

    const setIcons = (isOpen) => {
      if (iconBars) iconBars.style.display = isOpen ? "none" : "block";
      if (iconClose) iconClose.style.display = isOpen ? "block" : "none";
    };

    const openMenu = () => {
      menu.classList.add("show");
      btn.setAttribute("aria-expanded", "true");
      btn.setAttribute("aria-label", "Cerrar menú de navegación");
      setIcons(true);
      // opcional: bloquear scroll del body cuando el menú está abierto
      document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
      menu.classList.remove("show");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Abrir menú de navegación");
      setIcons(false);
      document.body.style.overflow = "";
    };

    const toggleMenu = () => {
      const isOpen = menu.classList.contains("show");
      isOpen ? closeMenu() : openMenu();
    };

    btn.addEventListener("click", toggleMenu);

    // Cerrar al hacer click en un link del menú
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) closeMenu();
    });

    // Cerrar con ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Si pasa a desktop (>=910px), forzar cerrado para evitar estados raros
    const mq = window.matchMedia("(min-width: 910px)");
    const handleMq = (ev) => {
      if (ev.matches) closeMenu();
    };
    mq.addEventListener?.("change", handleMq);
    handleMq(mq);
  }

  // Si luego quieres reactivar otros scripts, agrégalos aquí SIN imports
});
// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

if (scrollToTopBtn) {
  // Ocúltalo al inicio (si quieres que aparezca solo al bajar)
  scrollToTopBtn.style.display = "none";

  // Mostrar/ocultar al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Click: subir arriba
  scrollToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
  // === REVEAL ANIMATIONS (IntersectionObserver) ===
  const revealSelectors = [
    ".services__item",
    ".projects__item",
    ".select__item--card",
    ".testimonials__item",
    ".process__item",
    ".faq__item",
    ".article__item",
    ".districts__list-item",
    ".cta__wrapper",
    ".about__wrapper"
  ].join(",");

  const revealEls = Array.from(document.querySelectorAll(revealSelectors))
    // EXCLUIMOS todo lo que esté dentro de Contacto para que no "grisee"
    .filter((el) => !el.closest(".contact"));

  // Marca como "reveal" y asigna delay suave (stagger)
  revealEls.forEach((el, i) => {
    el.classList.add("reveal");
    // delay repetido para que no se vuelva eterno en listas largas
    el.style.setProperty("--d", `${(i % 6) * 80}ms`);
  });

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealEls.forEach((el) => io.observe(el));
  } else {
    // fallback: si el navegador es muy viejo, mostramos todo
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
  // === HERO ENTRADA AL CARGAR ===
  const hero = document.querySelector(".banner__wrapper");
  if (hero) {
    requestAnimationFrame(() => hero.classList.add("hero-in"));
  }
