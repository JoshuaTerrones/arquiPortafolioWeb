/**
 * Animación de contador para la sección de resultados
 * Hace que los números aumenten progresivamente hasta alcanzar su valor final
 * Los contadores están sincronizados para terminar al mismo tiempo
 */

export function initResultsCounter() {
  // Verificar si estamos en un navegador (evita errores en entornos sin DOM)
  if (typeof document === 'undefined') return;
  
  // Seleccionar todos los elementos con la clase results__numbers
  const numberElements = document.querySelectorAll('.results__numbers');
  
  // Si no hay elementos, salir
  if (numberElements.length === 0) {
    console.warn('No se encontraron elementos con la clase results__numbers');
    return;
  }
  
  // Bandera para controlar si la animación ya se ejecutó
  let animationExecuted = false;
  
  // Función para verificar si un elemento está visible en la ventana
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right >= 0
    );
  }
  
  // Función para animar varios contadores sincronizados
  function animateCounters(elements) {
    // Duración fija para todos los contadores
    const duration = 2000; // 2 segundos
    const fps = 60;
    const interval = 1000 / fps; // Intervalo entre frames
    const totalFrames = duration / interval;
    let currentFrame = 0;
    
    // Almacenar los valores finales de cada contador
    const finalValues = Array.from(elements).map(element => {
      const originalText = element.textContent;
      const finalNumber = parseInt(originalText.replace(/\D/g, '')) || 0; // Fallback a 0 si no es un número
      return {
        element: element,
        finalNumber: finalNumber,
        originalText: originalText
      };
    });
    
    // Iniciar la animación
    const animation = setInterval(() => {
      currentFrame++;
      
      // Actualizar cada contador proporcionalmente
      finalValues.forEach(item => {
        const progress = currentFrame / totalFrames;
        if (progress >= 1) {
          // Animación completa, establecer el valor final exacto
          item.element.textContent = item.originalText;
        } else {
          // Calcular el valor actual basado en el progreso
          const currentValue = Math.floor(item.finalNumber * progress);
          item.element.textContent = '+' + currentValue;
        }
      });
      
      // Detener la animación cuando se complete
      if (currentFrame >= totalFrames) {
        clearInterval(animation);
      }
    }, interval);
  }
  
  // Función para iniciar la animación cuando los elementos sean visibles
  function checkAndAnimateCounters() {
    // Si la animación ya se ejecutó, no hacer nada
    if (animationExecuted) return;
    
    // Verificar si el primer elemento está visible
    if (numberElements.length > 0 && isElementInViewport(numberElements[0])) {
      // Marcar la animación como ejecutada para que no se repita
      animationExecuted = true;
      
      // Iniciar la animación sincronizada
      animateCounters(numberElements);
      
      // Remover el evento de scroll una vez que la animación se ha iniciado
      window.removeEventListener('scroll', checkAndAnimateCounters);
    }
  }
  
  // Comprobar los contadores al cargar la página
  checkAndAnimateCounters();
  
  // Comprobar los contadores al hacer scroll
  window.addEventListener('scroll', checkAndAnimateCounters);
  
  // También verificar en caso de redimensión de ventana
  window.addEventListener('resize', checkAndAnimateCounters);
}