document.addEventListener('DOMContentLoaded', (event) => {
  const carousel = document.querySelector('.carousel');
  const cardContainers = document.querySelectorAll('.cardContainer');
  let currentIndex = 0;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % cardContainers.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextSlide, 1500);
});
