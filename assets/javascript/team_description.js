// target click elements (image icons)
const images = document.querySelectorAll('.img');
// target memeber name
const memberName = document.querySelector('.name');
// target description wrap & description
const descriptionWrap = document.querySelector('.description-wrap');
const description = document.querySelector('.description');

// add event listener to page automatically on load
window.addEventListener('load', () => {
    teamSlideAnimation();
    addDesktopDiv();
})

// slide animation for team content, 
// if window matches js media query
const teamSlideAnimation = () => {
    const jsMediaQuery = matchMedia("(max-width: 900px)")
    console.log("Function executed on load !:)")
    if (jsMediaQuery.matches) {
        images.forEach(image => {
            image.addEventListener('click', (e) => {
                // console.log(e.target.id);

                if (e.target.id == 'img1') {
                    document.querySelector('p#name1').classList.toggle('disappear');
                    document.querySelector('div#dw1').classList.toggle('show');
                }
                else if (e.target.id == 'img2') {
                    document.querySelector('p#name2').classList.toggle('disappear');
                    document.querySelector('div#dw2').classList.toggle('show');

                }
                else {
                    document.querySelector('p#name3').classList.toggle('disappear');
                    document.querySelector('div#dw3').classList.toggle('show');
                }
            });
        })
    }
}

// add div wrapper around team members' content
// for desktop sized devices
// to display correct styling
const addDesktopDiv = () => {
const lgScreen = matchMedia("(min-width: 900px)");
    if (lgScreen.matches) {
        // choose section of html with elements that need to
        // be wrapped
        const main = document.querySelector('.team-content');
        // create div wrapper
        var div = document.createElement('div');

        // create node array of elements to be wrapped
        // exclude 1st element
        const nodes = [...main.children].splice(1);
        // add div class to style list
        div.classList.add('desktop-wrap');

        // from node array,
        // map each node to append to div as child(ren)
        nodes.map(node => div.appendChild(node));
        // append div to proper section of html
        main.appendChild(div);

        console.log(main.innerHTML); //verified working
    }
}