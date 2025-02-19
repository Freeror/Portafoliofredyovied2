document.addEventListener("DOMContentLoaded", () => {
    // Carrusel
    let index = 0;
    const images = document.querySelectorAll(".carousel-container img");
    const total = images.length;
    
    document.querySelector(".next").addEventListener("click", () => {
        index = (index + 1) % total;
        updateCarousel();
    });

    document.querySelector(".prev").addEventListener("click", () => {
        index = (index - 1 + total) % total;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -index * 100;
        document.querySelector(".carousel-container").style.transform = `translateX(${offset}%)`;
    }

    // Menú Responsive
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
