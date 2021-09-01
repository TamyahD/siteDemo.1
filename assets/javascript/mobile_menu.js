// select DOM items
const menuContainer = document.querySelector('div.hmbgr-menu');
const navContainer = document.querySelector('.nav-container');
const header = document.querySelector('.header');

menuContainer.addEventListener('click', toggleMenu);

function toggleMenu() {
    navContainer.classList.toggle('show');
    header.classList.toggle('show');

}