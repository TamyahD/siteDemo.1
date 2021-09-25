// target phrase number icons
const phraseElements = document.querySelectorAll(".phraseIcon");
const ch = "<span>CodeHearted</span>";

const icon = document.querySelector('h3');
// create array with catchphrases
const catchphrases = ["Live It - ", " Online & in Real Life", "Don't You Love Being "];

// target catchphrase element by classname
// change catch phrase function takes in event(e) parameter
// sets value of event param to element in array
// returns that text
phraseElements.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        
        /* chooses exclusive h3 element
        refers to class list in styling
        adds chosen styles */
        // document.querySelector('.sm-heading').classList.add('.sm-heading');

        if (el.innerHTML.match("01")) {
            document.querySelector('h3').innerHTML = "<h3 class='sm-heading'>"+catchphrases[0]+"<br>"+ch+"!</h3>";
            document.querySelector('#icon1').style.color = "gold";
            // document.querySelector('#phrase-text').classList.toggle('style-phrase'); //TEST

            // changes non-selected
            // icons to default styles
            // COULD BE REVISED FOR BETTER TECHNIQUE
            document.querySelector('#icon2').style.color = "lightgray";
            document.querySelector('#icon3').style.color = "lightgray";
        }
        else if (el.innerHTML.match("02")) {
            document.querySelector('h3').innerHTML = "<h3 class='sm-heading'>"+ch+"<br>"+catchphrases[1]+"</h3>";
            document.querySelector('#icon2').style.color = "gold";

            document.querySelector('#icon1').style.color = 'lightgray';
            document.querySelector('#icon3').style.color = 'lightgray';
        }
        else {
            document.querySelector('h3').innerHTML = "<h3 class='sm-heading'>"+catchphrases[2]+"<br>"+ch+"?</h3>";
            document.querySelector('#icon3').style.color = "gold";
  
            document.querySelector('#icon1').style.color = 'lightgray';
            document.querySelector('#icon2').style.color = 'lightgray';
        }
    })
})













// catchphrase #2 function
// phraseElements.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("Working");

    /* chooses exclusive h3 element
    refers to class list in styling
    adds chosen styles */
    // document.querySelector('h3').classList.add('main-content','catchphrase', 'span');


    /* chooses h3 element along w content
    creates new h3 element
    appends corresponding catchphrases[] value
    creates new span(child of h3) to correct style brand name */
    // document.querySelector('h3').innerHTML = "<h3>"+catchphrases[0]+"<span>CodeHearted!</span>"+"</h3>";




// });
