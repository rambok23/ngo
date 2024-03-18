const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
  const signInForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('errorMessage');

  signInForm.addEventListener('submit', function(event) {
    event.preventDefault();
    errorMessage.textContent = '';

    // Validate email format
    if (!validateEmail(emailInput.value)) {
      errorMessage.textContent = 'Invalid email format';
      return;
    }

    // Validate password length
    if (!validatePassword(passwordInput.value)) {
      errorMessage.textContent = 'Password must be at least 6 characters long';
      return;
    }

    // You can replace this with your server-side validation logic
    const hardcodedUsers = {
      "abc@abc.com": "123456",
      "test@test.ca": "testing"
    };
    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    // Check if email exists and password matches
    if (hardcodedUsers.hasOwnProperty(enteredEmail)) {
      if (hardcodedUsers[enteredEmail] === enteredPassword) {
        const username = enteredEmail.split('@')[0]; // Extract username from email
        window.location.href = `index.html?username=${username}`;

        // window.location.href = 'index.html'; // Redirect to index.html
        console.log("Login Successful");
      } else {  
        errorMessage.textContent = 'Incorrect password';
        console.log("Login failed. Please try again.");
      }
    } else {
      errorMessage.textContent = 'Email not found';
      console.log("Login failed. Please try again.");
    }
    
  });

  function validateEmail(email) {
    // Regex pattern for email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function validatePassword(password) {
    // Password length validation
    return password.length >= 6;
  }
});