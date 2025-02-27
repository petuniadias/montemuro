function displayDescription() {
  document.querySelectorAll('.news-box').forEach(box => {
    const newsDescription = box.querySelector('.news-description');
    const newsTitle = box.querySelector('.news-title');

    box.addEventListener('mouseenter', () => {
      newsDescription.style.display = 'block';
      newsTitle.style.bottom = `60px`;
    });
    box.addEventListener('mouseleave', () => {
      newsDescription.style.display = 'none';
      newsTitle.style.bottom = '0px';
      
    });
  });
}

displayDescription();