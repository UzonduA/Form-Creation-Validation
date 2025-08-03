// Wait until the full HTML document has loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the form element by its ID
    const form = document.getElementById('registration-form');
    // Select the div where feedback messages will be shown
    const feedbackDiv = document.getElementById('form-feedback');

    // Listen for the form's submit event
    form.addEventListener('submit', (event) => {
        // Prevent the form from actually submitting and refreshing the page
        event.preventDefault();

        // Get trimmed values from the input fields
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Variable to track if all validations pass
        let isValid = true;
        // Array to hold error messages
        const messages = [];

        // Username validation: at least 3 characters long
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation: must include both '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain "@" and "." characters.');
        }

        // Password validation: at least 8 characters long
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Show the feedback div
        feedbackDiv.style.display = 'block';

        // If all validations pass
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // green color
        } else {
            // If validations fail, show all error messages separated by line breaks
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545'; // red color
        }
    });
});
