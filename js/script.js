// JavaScript to download the resume
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Abdul_Hathi_Resume.pdf'; // Make sure this path is correct and accessible
    link.download = 'Abdul_Hathi_Resume.pdf';
    link.click();
}

// JavaScript to handle slider functionality
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.opacity = '0';
        slide.classList.remove('active');
    });
    slides[currentSlide].style.opacity = '1';
    slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

// Initialize the first slide as active
showSlide(currentSlide);
