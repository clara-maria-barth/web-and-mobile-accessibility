/**
 * Set the form control element to valid
 * @param {object} element - The DOM element
 */
function setValid(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');

    const formControl = element.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = "";
}

/**
 * Set the form control element to invalid with the error message
 * @param {object} element - The DOM element
 */
function setInvalid(element,message) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');

    const formControl = element.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message
}

/**
 * Remove validation information from the element
 * @param {object} element - The DOM element
 */
function removeValidation(element) {
    element.classList.remove('is-valid');
    element.classList.remove('is-invalid');    
}

/**
 * Remove validation information from the registration form 
 * @param {object} element - The DOM element
 */
function removeRegValidation(){
    const regData = document
    .getElementById('register-form')
    .querySelectorAll('input');

    regData.forEach(el => {
        removeValidation(el)
  });
}

/**
 * Remove validation information from the login form
 * @param {object} element - The DOM element
 */
function removeLogValidation(){
    const loginData = document
      .getElementById('login-form')
      .querySelectorAll('input');

    loginData.forEach(el => {
        removeValidation(el)
        
    });

    
}


/**
 * Validate the login form and try to log the user in
 * @param {object} event - The DOM event
 */
function login(event) {
    event.preventDefault();
    event.stopPropagation();
    //to remove Error messages in register form
    removeRegValidation();

    var hasError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email,'Email can not be empty');
        hasError = true;
    } else {
        setInvalid(email,'Please enter a valid email');
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    if (password.value.trim().length == 0) {
        setInvalid(password,'Password can not be empty');
        hasError = true;
    } else {
        setValid(password);
    }

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to retrieve the password
 * @param {object} event - The DOM event
 */
function forgot(event) {
    event.preventDefault();
    event.stopPropagation();

    //to remove Error messages in register form
    removeRegValidation();
    var hasError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email,'Email can not be empty');
        hasError = true;
    } else {
        setInvalid(email,'Please enter a valid email');
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    removeValidation(password);

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to register the new user
 * @param {object} event - The DOM event
 */
function register(event) {
    event.preventDefault();
    event.stopPropagation();
    //to remove login validation information
    removeLogValidation();
    var hasError = false;

    var firstName = document.getElementById('register-first-name-control');
    var firstNameValue = firstName.value.trim();
    if (firstNameValue.length == 0) {
        setInvalid(firstName,'First name can not be empty');
        hasError = true;
    } else if (firstNameValue.match(/[0-9]+/) !== null) {
        setInvalid(firstName,'First name can not contain numbers');
        hasError = true
    } else if (firstNameValue.match(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/) !== null) {
        setInvalid(firstName,'First name can not contain special characters');
        hasError = true
    } else if (firstName.validity.valid) {
        setValid(firstName);
    } 

    var lastName = document.getElementById('register-last-name-control');
    var lastNameValue = lastName.value.trim();
    if (lastNameValue.length == 0) {
        setInvalid(lastName,'Last name can not be empty');
        hasError = true;
    } else if (lastNameValue.match(/[0-9]+/) !== null ) {
        setInvalid(lastName,'Last name can not contain numbers');
        hasError = true
    } else if (lastNameValue.match(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/) !== null) {
        setInvalid(lastName,'Last name can not contain special characters');
        hasError = true
    } else if (lastName.validity.valid) {
        setValid(lastName);
    } 

    var email = document.getElementById('register-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email,'Email can not be empty');
        hasError = true;
    } else {
        setInvalid(email,'Please enter a valid Email');
        hasError = true;
    }

    var password = document.getElementById('register-password-control');
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8 || passwordValue.length > 16) {
        setInvalid(password,'Your password must be 8-16 characters long');
        hasError = true;
    } else if (passwordValue.match(/[a-zA-Z]+/) == null) {
        setInvalid(password,'Your password must contain letters');
        hasError = true;
    } else if (passwordValue.match(/[0-9]+/) == null) {
        setInvalid(password,'Your password must contain numbers');
        hasError = true;
    } else {
        setValid(password);
    }

    const checkbox = document.querySelectorAll('input[name="degree"]');
    var fieldset = document.getElementById('register-programme-control');
    var radioBtn = [...checkbox]
    if (radioBtn.some(rbn => rbn.checked)) {
        fieldset.classList.remove('is-invalid'); 
        fieldset.classList.add('is-valid'); 
        fieldset.querySelector('small').innerHTML ="";
      } else {
        var errMesg = radioBtn[0].parentNode.querySelector('small')
        errMesg.innerText = 'You must select one programme'
        fieldset.classList.add('is-invalid');
        fieldset.classList.remove('is-valid');
        hasError = true; 
      }

    if (hasError) {
        document.getElementById('register-error').classList.remove('d-none');
    } else {
        document.getElementById('register-error').classList.add('d-none');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('login-login-button')
        .addEventListener('click', login, false);
       

    document
        .getElementById('login-forgot-button')
        .addEventListener('click', forgot, false);

    document
        .getElementById('register-register-button')
        .addEventListener('click', register, false);
}, false);
