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

    // if showMenu is not false, mobile nav menu displays
    // if (!showMenu) {
    //     menuContainer.classList.add('close');
    //     navMenu.classList.add('show');
    //     // menuContainer.classList.add('show');
    //     navItems.forEach(i => i.classList.add('show'));
    //     showMenu = true;
    // }
    // else {
    //     menuContainer.classList.remove('close');
    //     navMenu.classList.remove('show');
    //     // menuContainer.classList.add('show');
    //     navItems.forEach(i => i.classList.remove('show'));
    //     showMenu = false;
    // }



// function hideMenuIcon() {
//     // parent/menu container
//     // children/lines
//     const parentWidth = menuContainer.clientWidth;
//     // console.log(parentWidth);
//     const childrenTranslate = (parentWidth*.5);


//     // Select menu line 1, line 3
//     // merge lines into middle line(line 2)
//     const line1 = document.querySelector('div#line1');
//     const line3 = document.querySelector('div#line3');
//     // line1.style="transform:translate("+childrenTranslate+"px)";
//     // line1.style="transform:translateY(5vh);"
//     // line3.style="transform:translate(-15px, -18px);"
// }