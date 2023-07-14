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
        // window.open("https://www.myntra.com/otplogin?referer=https%3A%2F%2Fwww.myntra.com%2F%3Futm_source%3Ddms_google&show=true")
        alert("You entered a valid Phone number!")
    }
}

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