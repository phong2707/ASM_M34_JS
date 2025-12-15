let slides = document.querySelectorAll('.slide img');
let currentIndex = 0;

slides[currentIndex].classList.add('active');

function showSlide() {
    slides[currentIndex].classList.remove('active');

    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    slides[currentIndex].classList.add('active');
}

setInterval(showSlide, 3000);
