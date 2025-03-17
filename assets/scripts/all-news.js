import {newsData} from '../data/newsData.js';

function renderNews() {
  const newsContainer = document.querySelector('.news');
  let newsSummaryHTML = '';

  newsData.forEach(item => {
    newsSummaryHTML += `
    <a class="news-box" href="news.html">
      <img class="news-img" src="${item.image}">
      <div class="news-title-box"></div>
      <h2 class="news-title">${item.title}</h2>
      <p class="news-description">${item.description}</p>
    </a>
    `;
  });
  
  newsContainer.innerHTML = newsSummaryHTML;
  
  displayDescription();
}

renderNews();

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