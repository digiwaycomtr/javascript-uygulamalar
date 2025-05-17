const searchContainer = document.querySelector('.search-container');

const searchBtn = document.querySelector('.search-btn');

const searchInput = document.querySelector('.search-input');

const loadingScreen = document.querySelector('.search-loading')

const animationDuration = 400;


window.addEventListener('load', () => {
  //console.log('sayfa yüklendi')

  searchBtn.style.transition = 'transform 0.9s ease';

  searchBtn.style.transform = 'scale(1.2)'

  setTimeout(() => {
    searchBtn.style.transform = 'scale(1)'
  }, animationDuration)

});

searchBtn.addEventListener('click', (e) => {

  e.stopPropagation();

  searchBtn.style.transition = 'transform 0.4s ease';
  searchBtn.style.transform = 'translateY(-8px) scale(1)';

  setTimeout(() => {
    searchBtn.style.transform = 'translateY(0) scale(1)';
  }, animationDuration)

  if (!searchContainer.classList.contains('active')) {

    searchContainer.classList.add('active');

    //console.log('active eklendi')

    searchInput.focus();
  }

});

document.addEventListener('click', () => {

  if (searchInput.value.trim() === '') {

    searchContainer.classList.remove('active');

    searchInput.value = '';

  }
})

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && searchInput.value.trim() !== '') {
    e.preventDefault();

    loadingScreen.style.display = 'flex';

    searchContainer.style.display = 'none';

    setTimeout(() => {
      loadingScreen.style.display = 'none';
      searchContainer.style.display = 'flex';
      searchInput.value = '';
      searchContainer.classList.remove('active');
    }, 3000)

  }
})