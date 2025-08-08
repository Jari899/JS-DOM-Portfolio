// FORM VALIDATION
const form = document.querySelector('form');
const nameInput = form.querySelector('#name');
const emailInput = form.querySelector('#email');
const messageInput = form.querySelector('#message');
const submitBtn = form.querySelector('button[type="submit"]');

// Create error message elements
function createErrorElement(input) {
  const error = document.createElement('span');
  error.className = 'error-message';
  error.style.display = 'none';
  input.insertAdjacentElement('afterend', error);
  return error;
}

const nameError = createErrorElement(nameInput);
const emailError = createErrorElement(emailInput);

// Validation functions
function validateName() {
  if (nameInput.value.trim().length < 2) {
    nameError.textContent = 'Name must be at least 2 characters.';
    nameError.style.display = 'block';
    return false;
  }
  nameError.textContent = '';
  nameError.style.display = 'none';
  return true;
}

function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.display = 'block';
    return false;
  }
  emailError.textContent = '';
  emailError.style.display = 'none';
  return true;
}

// Enable submit button only if form valid
function checkFormValidity() {
  const isValid = validateName() && validateEmail();
  submitBtn.disabled = !isValid;
  submitBtn.setAttribute('aria-disabled', !isValid);
}

// Real-time validation event listeners
nameInput.addEventListener('input', () => {
  validateName();
  checkFormValidity();
});

emailInput.addEventListener('input', () => {
  validateEmail();
  checkFormValidity();
});

// Initially disable submit button (already disabled, but double-check)
submitBtn.disabled = true;
submitBtn.setAttribute('aria-disabled', 'true');

// Prevent form submission since backend is not ready
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submission is not enabled yet. Please contact via email.');
});
