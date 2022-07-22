const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phoneNumber = document.getElementById("phoneNumber");
const date = document.getElementById("date");
const terms = document.getElementById("terms");
const RememberMe = document.getElementById("RememberMe");
const button = document.getElementById("button");
const form = document.getElementById("form");



button.addEventListener("click", (event) => {
    event.preventDefault()

    const formValues = {
        "firstName": firstName.value,
        "lastName": lastName.value,
        "email": email.value,
        "password": password.value,
        "confirmPassword": confirmPassword.value,
        "phoneNumber": phoneNumber.value,
        "terms": terms.value,
        "RememberMe": RememberMe.value,
        "date": date.value,

    }
    console.log(formValues);

});