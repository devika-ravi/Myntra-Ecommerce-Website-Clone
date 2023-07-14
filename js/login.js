let form = document.getElementById("formToValidate");
let phoneNumber = document.getElementById("phoneNumber");

form.addEventListener("submit", checkForDefault);

function checkForDefault(event) {
    event.preventDefault(); //built-in
    validateInput(); //call function validateInputs()
}

function validateInput() {
    let phoneNumberValue = phoneNumber.value.trim();

    let regEx = /^\d{10}$/;

    if (phoneNumberValue === "" || phoneNumberValue.length < 10 || phoneNumberValue.length > 10 || isNaN(phoneNumberValue)) {
        setError(phoneNumber, "Please provide a valid mobile number (10 digits)");
    } else {
        setSuccess(phoneNumber);
        alert("You are successfully logged in!")
        window.open("home.html")

    }
}

// function isValidNumber(phoneNumber) {
//     // regEx is written just to know that it's a regular expression
//     let regEx = /^\d{10}$/;
//     return regEx.test(phoneNumber);
// }

function setError(element, message) {
    const inputControl = element.parentElement; //This line retrieves the parent element of the input element passed as the "element" parameter. 
    const errorDisplay = inputControl.querySelector(".errorMessage");

    errorDisplay.innerHTML = message;   //Add error message

}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".errorMessage");

    errorDisplay.innerHTML = " ";    //Remove error message

}      