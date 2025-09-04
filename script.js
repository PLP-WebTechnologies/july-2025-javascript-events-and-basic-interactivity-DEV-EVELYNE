// -------------------
// Dark Mode Toggle
// -------------------
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// -------------------
// Counter Game
// -------------------
let count = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterValue.textContent = count;
});

// -------------------
//  Collapsible FAQ
// -------------------
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// -------------------
//  Form Validation
// -------------------
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error display elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMessage = document.getElementById("formSuccess");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  // Name validation
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters long.";
    valid = false;
  }

  // Email validation (regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // Success message
  if (valid) {
    successMessage.textContent = "✅ Registration successful!";
    form.reset();
  }
});
