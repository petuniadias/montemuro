window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const newsImage = document.querySelector('.news-image');

  const scrollPosition = window.scrollY;
  const containerHeight = newsImage.offsetHeight;

  if (scrollPosition > containerHeight / 2) {
    header.style.display = `flex`;
  } else {
    header.style.display = `none`;
  }
});