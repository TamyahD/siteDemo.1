const memberName = document.querySelector('p.name');
const description = document.querySelector('p.description');
const descriptionWrap = document.querySelector('div.description-wrap');
memberName.addEventListener('click', revealDescription);

function revealDescription() {
    console.log('Name successfully clicked!');
    // descriptionWrap.classList.toggle('reveal');
    // description.classList.toggle('reveal');
}