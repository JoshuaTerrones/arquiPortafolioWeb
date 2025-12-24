/**
 * Archivo principal que inicializa todos los componentes
 */
import { initNavbar } from './components/navbar.js';
import { initLazyLoading } from './components/lazy-loading.js';
import { initContactForm } from './components/contact-form.js';
import { initScrollToTop } from './components/scroll-to-top.js'; 

document.addEventListener("DOMContentLoaded", function() {
  // Inicializar componentes
  initNavbar();
  initLazyLoading();
  initContactForm();
  initScrollToTop();

  // Carga condicional del contador de resultados solo para la página de inicio
  if (window.location.pathname === '/' || window.location.pathname === '/index.php') {
    import('./scripts/results.js')
      .then(module => {
        module.initResultsCounter();
      })
      .catch(error => {
        console.error('Error al cargar el script de resultados:', error);
      });
  }
});