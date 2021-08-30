// select DOM items
const menuContainer = document.querySelector('div.hmbgr-menu');
const navContainer = document.querySelector('.nav-container');

menuContainer.addEventListener('click', toggleMenu);

function toggleMenu() {
    navContainer.classList.toggle('show');

}