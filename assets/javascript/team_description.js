// target click elements (image icons)
const images = document.querySelectorAll('.img');
// target memeber name
const memberName = document.querySelector('.name');
// target description wrap & description
const descriptionWrap = document.querySelector('.description-wrap');
const description = document.querySelector('.description');

// select all image icons, add event listener & function to 
// each icon.
// console log id of image targeted/clicked

// if id matches specified id, style that specific
// member's elements
// verify specific images clicked+
// if certain image clicked+
// style that specific section+
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