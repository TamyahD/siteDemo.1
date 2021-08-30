// select DOM items
const menuContainer = document.querySelector('div.hmbgr-menu');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-item');
const header = document.querySelector('header');
const navContainer = document.querySelector('.nav-container');

menuContainer.addEventListener('click', toggleMenu);

function toggleMenu() {
    navContainer.classList.toggle('show');
    navMenu.classList.toggle('show');
    menuContainer.classList.toggle('show');
    header.classList.toggle('color');


}