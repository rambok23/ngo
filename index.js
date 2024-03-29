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

//AddToCart Functionality
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


//PaymentForm Functionality
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('donationform');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting by default

      // Perform validation for each input field
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const zip = document.getElementById('zip').value.trim();
      const nameOnCard = document.getElementById('nameOnCard').value.trim();
      const cardNum = document.getElementById('cardNum').value.trim();
      const ccv = document.getElementById('ccv').value.trim();

      // Validation checks for each input field
      if (!/^[a-zA-Z\-']+$/i.test(firstName)) {
          alert('First name should only contain letters, hyphens, and apostrophes.');
          return;
      }

      if (!/^[a-zA-Z\-']+$/i.test(lastName)) {
          alert('Last name should only contain letters, hyphens, and apostrophes.');
          return;
      }

      if (!/^\d{5}$/.test(zip)) {
          alert('Please enter a valid 5-digit zip code.');
          return;
      }

      if (!/^[a-zA-Z\s]+$/i.test(nameOnCard)) {
          alert('Name on card should only contain letters and spaces.');
          return;
      }

      if (!/^\d{16}$/.test(cardNum)) {
          alert('Please enter a valid 16-digit card number.');
          return;
      }

      if (!/^\d{3}$/.test(ccv)) {
          alert('Please enter a valid 3-digit CCV.');
          return;
      }

      // If all validations pass, submit the form
      alert('Form submitted successfully!');
      form.reset(); // Reset the form
      window.location.href="thankyou.html";
  });

  // Additional event listeners for input fields if needed
  // You can add more validation checks here
});
