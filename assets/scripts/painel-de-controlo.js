/* PAGES */

const itemsPerPage = 6;
const contentSection = document.querySelectorAll('.content-section');

const totalPages = Math.ceil(contentSection.length / itemsPerPage);
for (i = 1; i <= totalPages; i++) {
  const pageBtn = document.createElement('div');
  pageBtn.classList.add('number-sort');
  pageBtn.textContent = i;
  pageBtn.dataset.page = i;
  pageBtn.addEventListener('click', () => {
    showPage(i);
  });
}

showPage(1);

function showPage(pageNumber) {

  contentSection.forEach((section, index) => {
    if (index >= (pageNumber - 1) * totalPages && index < pageNumber * totalPages) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}