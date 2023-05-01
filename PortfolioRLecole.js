const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;
let slideInterval;

function goToSlide(n) {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.opacity = 1;
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function autoPlay() {
    slideInterval = setInterval(nextSlide, 5000);
}

prevButton.addEventListener('click', () => {
    prevSlide();
    clearInterval(slideInterval);
    autoPlay();
});

nextButton.addEventListener('click', () => {
    nextSlide();
    clearInterval(slideInterval);
    autoPlay();
});

goToSlide(currentSlide);
autoPlay();
