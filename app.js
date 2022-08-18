const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword")
const phoneNumber = document.getElementById("phoneNumber");
const date = document.getElementById("date");
const terms = document.getElementById("terms");
const RememberMe = document.getElementById("RememberMe");
const submit = document.getElementById("submit");
const form = document.getElementById("contactForm");
// var gender = form.querySelectorAll('input[name="gender"]:checked');
// var formSubmitted = false;

submit.addEventListener("click", (event) => {
    event.preventDefault()
    lname();
    mail();
    mobile();
    fpassword();
    selectDate();
    conPassword();
    fname();
    conditions();
    // genderSelection();
    // details();

    // const firstNameValid = validateInput(firstName, firstNameErr, 'first Name');
    // const lastNameValid = validateInput(lastName, lastNameErr, "last Name");
    // const emailValid = validateInput(email, emailErr, "email");
    // const passwordValid = validateInput(password, passwordErr, "password");
    // const confirmPasswordValid = validateInput(confirmPassword, confirmPasswordErr, "confirm password");
    // const phoneNumberValid = validateInput(phoneNumber, phoneNumberErr, "phone number");
    // const dateValid = validateInput(date, dateErr, "date");


    // if (!firstNameValid && !lastNameValid && !emailValid && !passwordValid && !confirmPasswordValid && !phoneNumberValid && !dateValid) {
    //     return;
    // }

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
        // "genderSelection": gender.value
    }
    console.log(formValues);

    const isFormValid = fname() && lname() && mail() && mobile && fpassword() && selectDate() && conPassword() && conditions();

    if (isFormValid == false) {
        return
    }


    formSubmitted = true;


    var list = `<dl class="d-flex justify-content-start">
      <dd class="me-2"> First Name: </dd>
      <dt>${formValues.firstName}</dt>
    </dl>

    <dl class="d-flex justify-content-start">
      <dd class="me-2">Last Name: </dd>
      <dt>${formValues.lastName}</dt>
    </dl>

    <dl class = "d-flex justify-content-start">
      <dd class="me-2"> Email: </dd>
      <dt>${formValues.email}</dt>
    </dl>

    <dl class = "d-flex justify-content-start ">
      <dd class="me-2"> Password: </dd>
      <dt> ${formValues.password} </dt> 
    </dl>

    <dl class = "d-flex justify-content-start " >
        <dd class = "me-2"> Confirm Password: </dd>
        <dt> ${formValues.confirmPassword} </dt> 
    </dl>

    <dl class = "d-flex justify-content-start" >
        <dd class = "me-2"> Phone Number: </dd>
        <dt> ${formValues.phoneNumber} </dt>
    </dl>

    <dl class = "d-flex justify-content-start " >
        <dd class = "me-2" > Date Of Birth: </dd>
        <dt> ${formValues.date} </dt> 
    </dl>`



    document.getElementById('listID').innerHTML = list

    toggle(formSubmitted);

});

const toggle = (show) => {
    if (show) {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('listID').style.display = 'block';

    } else {
        document.getElementById('contactForm').style.display = 'block';
        document.getElementById('listID').style.display = 'none';
    }
}


const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const success = formField.querySelector('small');
    success.textContent = message;
}

// Validate name
const fname = () => {
    var regex = /^[a-zA-Z\s]+$/;
    if (firstName.value == "") {
        showError(firstName, 'Please enter your first name*.');

    } else if (regex.test(firstName.value) === false) {
        showError(firstName, 'Please enter a valid name*');

    } else if (firstName.value.length < 3) {
        showError(firstName, 'Characters must be more than 3*');

    } else {
        showSuccess(firstName, '');
        return true;
    }
    return false
}

const lname = () => {
    if (lastName.value == "") {
        showError(lastName, 'Please enter your last name*');

    } else if (lastName.value === false) {
        showError(lastName, 'Please enter a valid name*');

    } else if (lastName.value.length < 3) {
        showError(lastName, 'Characters must be more than 3*');

    } else {
        showSuccess(lastName, '');
        return true
    }
    return false
}


// Validate email address
const mail = () => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.value == "") {
        showError(email, 'Please enter your email*');

    } else if (regex.test(email.value) === false) {
        showError(email, 'Please enter a valid email address*');

    } else {
        showSuccess(email, '');
        return true
    }
    return false
}


// Validate mobile number
const mobile = () => {
    if (phoneNumber.value == "") {
        showError(phoneNumber, 'Please enter your phone number*');

    } else if (phoneNumber.value.length < 10) {
        showError(phoneNumber, 'Please enter your phone number*');

    } else {
        showSuccess(phoneNumber, '');
        return true
    }
    return false
}


//first password
const fpassword = () => {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if (password.value == "") {
        showError(password, 'Please enter your password*');

    } else if (strongRegex.test(password.value) === false) {
        showError(password, 'Password must have at least 7 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@# $ % ^ & *)*');

    } else if (password.value.length <= 7) {
        // showError(password, 'Your password is too weak!');
        showError(password, "")

    } else {
        // showSuccess(password, 'Strong password!');
        showSuccess(password, '');

        return true
    }
    return false
}


// confirm password
const conPassword = () => {

    if (confirmPassword.value == "") {
        showError(confirmPassword, 'Please confirm your password*');

    } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Password not matched');

    } else {
        showSuccess(confirmPassword, '');
        return true
    }
    return false
}


//date selection
const selectDate = () => {

    if (date.value == "") {
        // date.style.border = "solid 1px red"
        // dateErr.innerHTML = "Please select the date*"
        showError(date, 'Please select the date*');
    } else {
        // date.style.border = "solid 1px green"
        showSuccess(date, '');
        return true
    }
    return false
}

//terms and condition
const conditions = () => {
    if (terms.checked == "") {
        showError(termsErr, 'You must agree before submitting*');

    } else {
        showSuccess(termsErr, '');
        return true
    }
    return false
}

// // gender selection
// const genderSelection = () => {
//     // const genderMale = document.getElementById("male")
//     // const genderFemale = document.getElementById("female")
//     if (gender.checked == "" || gender.checked == "") {
//         genderErr.innerHTML = "Select your gender*"
//     } else {
//         genderErr.innerHTML = ""
//     }
// }

contactForm.addEventListener('input', (event) => {
    switch (event.target.id) {
        case 'firstName':
            fname();
            break;
        case 'lastName':
            lname();
            break;
        case 'email':
            mail();
            break;
        case 'password':
            fpassword();
            break;
        case 'confirmPassword':
            conPassword();
            break;
        case 'phoneNumber':
            mobile();
            break;
        case 'date':
            selectDate();
            break;
        case 'gender':
            f
            genderSelection();
            break;
        case 'terms':
            conditions();
            break;

    }
})