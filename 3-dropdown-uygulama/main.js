
const toggleDropdown = () => {

    const dropdown = document.getElementById('dropdown');

    if(!dropdown) return;

    dropdown.classList.toggle('open');
}

const handleDropdownClicked = (event) => {

    event.stopPropagation();

    toggleDropdown();
}

const handleSubMenuClicked = (menu) => {

    if(menu) {

        const subMenus = document.getElementsByClassName('sub-menu')

        for (let s of subMenus) {

            s.classList.remove('open')
        }

        const subMenu = document.getElementById(menu);

        subMenu.classList.add('open')
    }

    const mainMenu = document.getElementById('menu-inner');

    mainMenu.classList.toggle('open');

}