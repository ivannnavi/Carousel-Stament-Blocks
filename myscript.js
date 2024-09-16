const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentPage = 0;
const totalPages = document.querySelectorAll('.carousel-page').length;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentPage * 100}%)`;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updateCarousel();
    }
});