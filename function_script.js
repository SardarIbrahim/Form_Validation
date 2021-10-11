const form = document.getElementById('form');
const email = document.getElementById('email');
const userName = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Error Function Definition Here
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Success Function Definition Here
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function getFieldName(input) {
  // Making First Letter upperCase
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Checking Required Fields
function checkValidation(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)}  is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} Must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Validating Email
function isValidEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email Invalid');
  }
}

// Validating Password Confirmation

function validatePassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords Do Not Match');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkValidation([email, userName, password, password2]);
  checkLength(userName, 3, 15);
  checkLength(password, 6, 25);
  isValidEmail(email);
  validatePassword(password, password2);
});
