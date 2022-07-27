const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm")
const phoneNumber = document.getElementById("phoneNumber");
const date = document.getElementById("date");
const terms = document.getElementById("terms");
const RememberMe = document.getElementById("RememberMe");
const button = document.getElementById("button");
const form = document.getElementById("form");

button.addEventListener("click", (event) => {
    event.preventDefault()
    // formValidation();
    lname();
    mail();
    mobile();
    fpassword();
    selectDate();
    conPassword();
    NameErr();
    conditions();
    genderValidation();
    // selectGender();

    const formValues = {
        "firstName": firstName.value,
        "lastName": lastName.value,
        "email": email.value,
        "password": password.value,
        "passwordConfirm": passwordConfirm.value,
        "phoneNumber": phoneNumber.value,
        "terms": terms.value,
        "RememberMe": RememberMe.value,
        "date": date.value,
    }
    console.log(formValues);
});


// Validate name
const NameErr = () => {

    if (firstName.value == "") {
        firstNameErr.innerHTML = "Please enter your name*"
        firstName.style.border = " solid 1px red"
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(firstName.value) === false) {
            firstNameErr.innerHTML = "Please enter a valid name*"
        } else {
            // lastName.innerHTML = "Valid"
            firstName.style.border = " solid 1px green"
            // nameErr = false;
        }
    }
}

const lname = () => {

    if (lastName.value == "") {
        lastNameErr.innerHTML = "Please enter your name*"
        lastName.style.border = " solid 1px red"
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lastName.value) === false) {
            lastNameErr.innerHTML = "Please enter a valid name*"
        } else {
            // lastName.innerHTML = "Valid"
            lastName.style.border = " solid 1px green"
            // nameErr = false;
        }
    }
}



// Validate email address
const mail = () => {
    if (email.value == "") {
        emailErr.innerHTML = "Please enter your email*"
        email.style.border = " solid 1px red"

    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email.value) === false) {
            emailErr.innerHTML = "Please enter a valid email address*"
        } else {
            // email.innerHTML = "Valid"
            email.style.border = " solid 1px green"
            // emailErr = false;
        }
    }


}


// Validate mobile number
const mobile = () => {
    if (phoneNumber.value == "") {
        phoneNumberErr.innerHTML = "Please enter your phone number*"
        phoneNumber.style.border = " solid 1px red"

    } else {
        var regex = /^[0-9]\d{9}$/;
        if (regex.test(phoneNumber, value) === false) {
            phoneNumberErr.innerHTML = "Please enter a valid 10 digit mobile number*"
        } else {
            // phoneNumber.innerHTML = "Valid"
            phoneNumber.style.border = " solid 1px green"

            // phoneNumber = false;
        }
    }
}


//  password
const fpassword = () => {
    if (password.value == "") {
        passwordErr.innerHTML = "Please enter your password*"
        password.style.border = " solid 1px red"
    } else {
        var regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
        if (password.value === false) {
            passwordErr.innerHTML = "Please enter a valid password"
        } else {
            // password.innerHTML = "Valid"
            password.style.border = " solid 1px green"
        }
    }
}

// confirm_password
const conPassword = () => {
    if (passwordConfirm.value == "") {
        confirmPasswordErr.innerHTML = "Please enter your password*"
        passwordConfirm.style.border = " solid 1px red"
    } else {
        var regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
        if (passwordConfirm.value === false) {
            confirmPasswordErr.innerHTML = "Please enter a valid password*"
        } else {
            // confirmErr.innerHTML = "Valid"
            passwordConfirm.style.border = " solid 1px green"
        }
    }
}

const selectDate = () => {
    if (date.value == "") {
        date.style.border = "solid 1px red"
        dateErr.innerHTML = "Please select the date*"
    } else {
        date.style.border = "solid 1px green"
    }
}


const conditions = () => {
    if (terms.checked == "") {
        termsErr.innerHTML = "You must agree before submitting*"
    } else {
        terms.style.border = "solid 1px green"
    }
}


const genderValidation = () => {
    const genderMale = document.getElementById("male")
    const genderFemale = document.getElementById("female")
    if (genderMale.checked == "" && genderFemale.checked == "") {
        genderErr.innerHTML = "Select your gender*"
    }
}

// Validate gender
// const selectGender = () => {
//     if (gender.value == "") {
//         genderErr.innerHTML = "Please select your gender"
//         gender.style.radio = " solid 1px red"

//     } else {
//         gender.innerHTML = ""
//         // gender = false;
//     }
// }


// Prevent the form from being submitted if there are any errors
// if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
//     return false;
// }


// const formValidation = () => {

//     if (firstName.value == "" || firstName.value == null) {
//         firstName.style.border = " solid 1px red"
//     } else {
//         firstName.style.border = "solid 1px green"
//     }
//     if (lastName.value == "") {
//         lastName.style.border = "solid 1px red"
//     } else {
//         lastName.style.border = "solid 1px green"
//     }
//     if (email.value == "") {
//         email.style.border = "solid 1px red";
//     } else {
//         email.style.border = "solid 1px green"
//     }
//     if (password.value == "") {
//         password.style.border = "solid 1px red"

//     } else {
//         password.style.border = "solid 1px green"
//     }
//     if (confirmPassword.value == "") {
//         confirmPassword.style.border = "solid 1px red"
//     } else {
//         confirmPassword.style.border = "solid 1px green"
//     }
//     if (phoneNumber.value == "") {
//         phoneNumber.style.border = "solid 1px red"
//     } else {
//         phoneNumber.style.border = "solid 1px green"
//     }
//     if (date.value == "") {
//         date.style.border = "solid 1px red"
//     } else {
//         date.style.border = "solid 1px green"
//     }

// }