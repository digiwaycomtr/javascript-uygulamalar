
const shareButton = document.querySelector('.share-button');

const container = document.querySelector('.social-menu-container');

const shareIcon = shareButton.querySelector('img');

const toggleSocials = () => {

    container.classList.toggle('active');

    // if(shareIcon.src.includes('share')) {
    //     shareIcon.src = 'assets/close.svg'
    // }else {
    //     shareIcon.src = 'assets/share.svg'
    // }

    shareIcon.src.includes('share') ? shareIcon.src = 'assets/close.svg' : shareIcon.src = 'assets/share.svg';

}

shareButton.addEventListener('click', toggleSocials)

