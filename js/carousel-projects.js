document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.projects__item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;
    
    function updateCarousel() {
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            // En móvil, mostrar solo el elemento actual
            projectItems.forEach((item, index) => {
                item.style.display = (index === currentIndex) ? 'grid' : 'none';
            });
            prevButton.style.display = 'inline-block';
            nextButton.style.display = 'inline-block';
        } else {
            // En pantallas grandes mostrar todos y ocultar botones
            projectItems.forEach(item => {
                item.style.display = 'grid';
            });
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        }
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + projectItems.length) % projectItems.length;
            updateCarousel();
        });

        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % projectItems.length;
            updateCarousel();
        });
    }

    // Actualizar carrusel al cargar y al cambiar tamaño ventana
    updateCarousel();
    window.addEventListener('resize', () => {
        // Asegurarse que currentIndex esté en rango para evitar problemas
        if (currentIndex >= projectItems.length) {
            currentIndex = 0;
        }
        updateCarousel();
    });
});

