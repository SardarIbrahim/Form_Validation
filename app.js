// Making it simply First

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

// Validating Email
function isValidEmail() {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (userName.value === '') {
    showError(userName, 'UserName is required');
  } else {
    showSuccess(userName);
  }

  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is Not Valid');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }
  if (password2.value === '') {
    showError(password2, 'password confirmation is required');
  } else {
    showSuccess(password2);
  }
});
