document.addEventListener("DOMContentLoaded", function () {
    // Landing page slider logic
    const slides = document.querySelectorAll(".landing-slide");
    const navbar = document.querySelector(".navbar");
    let currentSlide = 0;

    slides[0].classList.add("active");
    navbar.style.backgroundColor = slides[0].dataset.navColor;

    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
        navbar.style.backgroundColor = slides[currentSlide].dataset.navColor;
    }

    // Change slide every 1 second
    setInterval(nextSlide, 1000);

    // Hamburger menu logic
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});
