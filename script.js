// script.js
function showForm(formId) {
    document.querySelectorAll(".form-container").forEach(form => form.classList.add("hidden"));
    document.getElementById(formId).classList.remove("hidden");
}

function handleLogin() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const error = document.getElementById("login-error");

    if (!username || !password) {
        error.textContent = "All fields are required.";
        return;
    }
    alert("Login successful!");
    window.location.href = "blank.html";
}

function handleSignup() {
    const name = document.getElementById("signup-name").value;
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    const error = document.getElementById("signup-error");

    if (!name.match(/^[a-zA-Z ]+$/)) {
        error.textContent = "Name should contain only letters and spaces.";
        return;
    }
    if (!username || !password) {
        error.textContent = "All fields are required.";
        return;
    }
    alert("Account created successfully!");
    showForm("login-form");
}

function verifyUser() {
    const username = document.getElementById("forgot-username").value;

    if (!username) {
        alert("Please enter your username.");
        return;
    }
    
    // Simulating user verification (You'd check this from the database in a real scenario)
    alert("User found! Proceed to reset password.");
    showForm("reset-form");
}

function handleResetPassword() {
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const error = document.getElementById("reset-error");

    if (!newPassword || !confirmPassword) {
        error.textContent = "All fields are required.";
        return;
    }
    if (newPassword !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        return;
    }

    alert("Password reset successfully! Please log in with your new password.");
    showForm("login-form");
}
