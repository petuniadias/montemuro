const slideCount = document.querySelectorAll('.slide-count');
const slides = document.querySelectorAll('.image');
let currentIndex = 0;
const intervalTime = 5000;

function updateCarousel(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');

  slideCount.forEach(count => count.classList.remove('active'));
  slideCount[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
}

let slideInterval = setInterval(nextSlide, intervalTime);

slideCount.forEach(count => {
  count.addEventListener('click', (e) => {
    clearInterval(slideInterval);
    currentIndex = parseInt(e.target.dataset.index);
    updateCarousel(currentIndex);
    slideInterval = setInterval(nextSlide, intervalTime);
  });
});

updateCarousel(currentIndex);