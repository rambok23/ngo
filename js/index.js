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

    //Hardcoded users with password
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
        window.location.href = `../index.html?username=${username}`;

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

      // Name validation (not empty)
      if (name === '') {
          errorMessage.textContent = 'Please enter your name.'
          event.preventDefault(); // Prevent form submission
          return;
      }

      // Email validation
      if (!form.checkValidity()) {
          // The email input will be validated automatically
          event.preventDefault(); // Prevent form submission
          return;
      }

      // Password validation (not empty)
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
        window.location.href = '/html/login.html';
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

      if (!/^[a-zA-Z0-9]{6}$/.test(zip)) {
        alert('Please enter a valid 6-character alphanumeric zip code.');
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

      alert('Form submitted successfully!');
      form.reset(); // Reset the form
      window.location.href="/html/thankyou.html";
  });

});


//Fancybox plugin
$(document).ready(function() {
  $('[data-fancybox="images"]').fancybox({
      loop: true, // Enable looping of images
      buttons: ["zoom", "slideShow", "thumbs", "close"], // Show additional buttons
      animationEffect: "fade", // Set animation effect
      transitionEffect: "slide", // Set transition effect
      transitionDuration: 800 // Set transition duration in milliseconds
  });
});

// Contact us validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Validate name field
  var nameInput = document.getElementById("name");
  var nameError = document.getElementById("nameError");
  if (nameInput.value.trim() === "") {
      nameError.textContent = "Please enter your name";
      nameInput.focus();
      return false;
  } else {
      nameError.textContent = "";
  }

  // Validate email field
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("emailError");
  if (emailInput.value.trim() === "") {
      emailError.textContent = "Please enter your email";
      emailInput.focus();
      return false;
  } else if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address";
      emailInput.focus();
      return false;
  } else {
      emailError.textContent = "";
  }

  // Validate message field
  var messageInput = document.getElementById("message");
  var messageError = document.getElementById("messageError");
  if (messageInput.value.trim() === "") {
      messageError.textContent = "Please enter your message";
      messageInput.focus();
      return false;
  } else {
      messageError.textContent = "";
  }

  // If all validations pass, submit the form
  alert("Message has been received!"); // Display alert message
  this.submit();
});

// Function to validate email format
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
