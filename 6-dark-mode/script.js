
const toggleBtn = document.getElementById('theme-toggle');

const rootElemnet = document.documentElement;

const toggleTheme = () => {

    rootElemnet.classList.toggle('dark-theme');

    const icon = toggleBtn.querySelector('i');

    if ( rootElemnet.classList.contains('dark-theme')) {

        icon.classList.remove('fa-moon');

        icon.classList.add('fa-sun');

    } else {

        icon.classList.remove('fa-sun');

        icon.classList.add('fa-moon')
    }

};

toggleBtn.addEventListener('click', toggleTheme);