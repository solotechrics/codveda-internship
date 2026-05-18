// We dey grab the button and all input fields from the HTML
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

// We dey grab the error spans where we go display error messages
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");

// We dey grab the success message div
const successMessage = document.getElementById("success-message");

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
    clearError(subjectError);
    clearError(messageError);

    successMessage.textContent = "";

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const subjectValue = subjectInput.value.trim();
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

    // Check subject
    if (subjectValue === "") {
        showError(subjectError, "Please enter a subject");
        isValid = false;
    }

    // Check message
    if (messageValue === "") {
        showError(messageError, "Please enter your message");
        isValid = false;
    }
    
    // If everything pass show success message
    if (isValid) {
        successMessage.textContent = "Message sent successfully!";
        successMessage.style.color = "lightgreen";
        successMessage.style.fontSize = "1rem";
        successMessage.style.marginBottom = "1rem";

        // Clear the form after success
        nameInput.value = "";
        emailInput.value = "";
        subjectInput.value = "";
        messageInput.value = "";
    }
});