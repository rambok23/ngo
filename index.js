// Hamburger Menu code
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//Login Functionality
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
      "Rohit@abc.com": "123456",
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

//Signup Validation
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signupForm');
  const errorMessage = document.getElementById('errorMessage');

  form.addEventListener('submit', function(event) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      // Basic name validation (not empty)
      if (name === '') {
          errorMessage.textContent = 'Please enter your name.'
          event.preventDefault(); // Prevent form submission
          return;
      }

      // Basic email validation (using HTML5 built-in validation)
      if (!form.checkValidity()) {
          // The email input will be validated automatically
          event.preventDefault(); // Prevent form submission
          return;
      }

      // Basic password validation (not empty)
      if (password === '') {
        errorMessage.textContent = 'Please enter your password.'
        event.preventDefault(); // Prevent form submission
          return;
      }
      if (password.length < 6) { // Adjust the minimum length as needed
        errorMessage.textContent = 'Password must be at least 6 characters long.'
        event.preventDefault(); // Prevent form submission
        return;
    }
    showSuccessMessage();
      errorMessage.textContent= '';
        resetForm();
        redirectToLoginPage();
        event.preventDefault();
  });

  function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Sign up successful, redirecting to Login!';
    successMessage.style.color = 'green';
    form.parentNode.insertBefore(successMessage, form.nextSibling);
  }

  function resetForm() {
    form.reset();
  }
  function redirectToLoginPage() {
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 5000); // 5000 milliseconds = 5 seconds
}
});

function addToCart(cardId) {
  var quantityElement = document.getElementById("quantity" + cardId);
  var currentQuantity = parseInt(quantityElement.innerText);
  var newQuantity = currentQuantity + 1;
  quantityElement.innerText = newQuantity;
  // Show Buy Now button
  var buyNowBtn = document.querySelector(".buy-now-btn");
  buyNowBtn.style.display = "block";
}

// function buyNow(cardId) {
//   // Handle Buy Now button click
//   console.log("Buy Now button clicked for card " + cardId);
//   // Add your logic here for what happens when Buy Now is clicked
// }