// Show/hide password
function togglePassword() {
  const pwd = document.getElementById("password");
  if (pwd.type === "password") {
    pwd.type = "text";
  } else {
    pwd.type = "password";
  }
}

// Basic login handler
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;

  // Simulated login
  if (email && password) {
    alert("Login Successful! (Simulation)");
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
