const fName = document.getElementById("name-input");
const email = document.getElementById("email-input");
const message = document.getElementById("message-input");
const form = document.getElementById("form");
// IMPROVE CODE & ALGORITHM
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

form.addEventListener("submit", (e) => {
    let warnings = []
    if (fName.value === "" || fName.value == null ) {
        warnings.push("Required");
    }
    if (email.value === "" || email.value == null ) {
        warnings.push("Required");
    }
    if (email.value === "" || email.value == null ) {
        warnings.push("Required");
    }




    if (warnings.length > 0) {
        e.preventDefault();
        nameError.innerText = warnings[0];
        emailError.innerText = warnings[0];
        messageError.innerText = warnings[0];
    }
})