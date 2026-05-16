const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
// We dey grab the error spans where we go display error messages
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const messageError = document.querySelector(".msg-error");

const success = document.getElementById("success-msg");

// Error message
function showError(errorElement, message) {
  errorElement.textContent = message;
  errorElement.style.color = "red";
  errorElement.style.fontSize = "1rem";
}

function clearError(errorElement) {
  errorElement.textContent = "";
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

submitBtn.addEventListener("click", function () {
  clearError(nameError);
  clearError(emailError);
  clearError(messageError);

  success.textContent = "";

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  // Track if form is valid or not
  let isValid = true;

  // Check name
  if (nameValue === "") {
    showError(nameError, "Please enter your name");
    isValid = false;
  }

  // Check email
  if (emailValue === "") {
    showError(emailError, "Please enter your email address");
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    showError(emailError, "Please enter a valid email address");
    isValid = false;
  }

  // Check message
  if (messageValue === "") {
    showError(messageError, "Please enter your message");
    isValid = false;
  }

  // If everything pass show success message
  if (isValid) {
    success.textContent = "Message sent successfully!";
    success.style.color = "lightgreen";
    success.style.fontSize = "1rem";
    success.style.marginBottom = "1rem";

    // Clear the form after success
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
});
