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
