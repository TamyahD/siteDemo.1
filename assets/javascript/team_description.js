const memberName = document.querySelector('.name');
const description = document.querySelector('p.description');
const descriptionWrap = document.querySelector('div.description-wrap');
memberName.addEventListener('click', toggleDescription);
// by default, name is showing
var showDescription = false;

function toggleDescription() {
    if (showDescription != true) {
        memberName.classList.toggle('disappear');
        descriptionWrap.classList.toggle('reveal');
        showDescription = !showDescription;
    }
    else {
        
    }
    // console.log('Name successfully clicked!');
    // memberName.classList.toggle('disappear');
    // descriptionWrap.classList.toggle('reveal');
    // description.classList.toggle('reveal');
}