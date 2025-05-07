
function searchArticles() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const articles = document.querySelectorAll('.content h3');
  articles.forEach(h3 => {
    const articleBlock = h3.nextElementSibling.nextElementSibling; // <p>Published...</p> and <p>desc</p>
    const hr = h3.nextElementSibling.nextElementSibling.nextElementSibling;
    const text = h3.textContent.toLowerCase() + ' ' + articleBlock.textContent.toLowerCase();
    if (text.includes(input)) {
      h3.style.display = '';
      h3.nextElementSibling.style.display = '';
      articleBlock.style.display = '';
      hr.style.display = '';
    } else {
      h3.style.display = 'none';
      h3.nextElementSibling.style.display = 'none';
      articleBlock.style.display = 'none';
      hr.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var galeriMenu = document.getElementById('galeri-menu');
  var galeriCategories = document.getElementById('galeri-categories');
  galeriMenu.addEventListener('click', function() {
    galeriCategories.style.display = galeriCategories.style.display === 'none' ? 'block' : 'none';
  });
});

