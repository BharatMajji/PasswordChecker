function checkStrength() {
    const password = document.getElementById("password").value;
    const strengthBar = document.getElementById("strength-bar");
    const strengthText = document.getElementById("strength-text");
    const container = document.querySelector(".container");

    let strength = 0;

    if (password.length >= 8) strength++; // Length Check
    if (/[A-Z]/.test(password)) strength++; // Uppercase Letter
    if (/[0-9]/.test(password)) strength++; // Number
    if (/[^A-Za-z0-9]/.test(password)) strength++; // Special Character

    strengthBar.className = ""; // Reset class
    strengthText.className = ""; // Reset text color

    // Adjust strength bar and text based on password strength
    if (strength === 0) {
        strengthText.innerText = "Strength: Weak";
        strengthText.classList.add("text-weak");
        strengthBar.classList.add("weak");
        // Do not change background color
    } else if (strength === 2) {
        strengthText.innerText = "Strength: Medium";
        strengthText.classList.add("text-medium");
        strengthBar.classList.add("medium");
        // Do not change background color
    } else if (strength >= 3) {
        strengthText.innerText = "Strength: Strong";
        strengthText.classList.add("text-strong");
        strengthBar.classList.add("strong");
        // Do not change background color
    } else {
        strengthText.innerText = "Strength: Weak";
        strengthText.classList.add("text-weak");
        strengthBar.classList.add("weak");
        // Do not change background color
    }
}