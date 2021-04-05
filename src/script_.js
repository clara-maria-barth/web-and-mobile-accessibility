//To get the respective input field for validation
const email = document.getElementById('login-email-control');
const password = document.getElementById('login-password-control');

document.getElementById('login-login-button').addEventListener('click', e => {
  e.preventDefault();
  fromValidate();
});

//To validate th input field for email and password
function fromValidate() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '') {
    showError(email, 'Email can not be empty');
  } else if (!isEmail(emailValue)){
    showError(email, 'please enter a valid email');
  }else {
    setValid(email);
  }
  if (passwordValue === '') {
    showError(password, 'Password can not be empty');
  } else {
    setValid(password);
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
 
  //Add error message inside small
  small.innerText = message;
}
//to be modified 
function setValid(input) {
  //const formControl = input.parentElement;
 // formControl.className = 'form-group success '
 //formControl.querySelector('input').className = 'form-control-success';

}

function isEmail(mail) {
  return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    mail
  );
}
