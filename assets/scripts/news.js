document.querySelectorAll('.news-box').forEach(box => {
  const newsContent = box.querySelector('.news-content');
  const newsTitle = box.querySelector('.news-title');

  box.addEventListener('mouseenter', () => {
    if (!box.newsContentPreview) { // Evita múltiplos elementos
      const newsContentPreview = document.createElement('p');
      newsContentPreview.classList.add('news-content-preview');
      newsContentPreview.innerHTML = `Hoje na cidade de Petersburgo, a Ovelha Xoné...`;

      newsContent.appendChild(newsContentPreview);

      box.newsContentPreview = newsContentPreview;

      newsTitle.style.transform = 'translateY(-55px)'; // Move o título para cima
      newsTitle.style.transition = 'transform 0.3s ease-in-out'; // Animação suave
      newsContent.style.transform = 'translateY(15px)'; // Move o título para cima
      newsContent.style.transition = 'transform 0.3s ease-in-out'; // Animação suave
    }
  });

  box.addEventListener('mouseleave', () => {
    if (box.newsContentPreview) {
      newsContent.removeChild(box.newsContentPreview);
      box.newsContentPreview = null;

      newsTitle.style.transform = 'translateY(-20px)'; // Move o título para cima
      newsTitle.style.transition = 'transform 0.3s ease-in-out'; // Animação suave
    }
  });
});