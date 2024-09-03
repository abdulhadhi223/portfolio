// JavaScript to download the resume
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'cv/Abdul_Hathi_Resume.pdf'; // Make sure this path is correct and accessible
    link.download = 'Abdul_Hathi_Resume.pdf';
    link.click();
}

// JavaScript to handle slider functionality
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.opacity = '0';
        slide.style.transform = 'translateX(100%)';
    });

    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.opacity = '1';
    slides[currentSlide].style.transform = 'translateX(0)';
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

// Initialize the first slide as active
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('show');
    });
});
