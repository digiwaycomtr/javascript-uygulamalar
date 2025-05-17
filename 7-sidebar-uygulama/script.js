
const expand_btn = document.querySelector('.expand-btn')

expand_btn.addEventListener('click', () => {

  document.body.classList.toggle('collapsed');
})



const allLinks = document.querySelectorAll('.sidebar-links a');

allLinks.forEach((item) => {

  item.addEventListener('click', () => {

    const hrefLinkClick = item.href;

    allLinks.forEach((link) => {

      if(link.href === hrefLinkClick) {

        link.classList.add('active');

      }else {

        link.classList.remove('active');
      }
    })
  })
})