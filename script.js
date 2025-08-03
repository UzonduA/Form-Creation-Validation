// Wrap entire script inside DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {

    // Select the form by id "registration-form"
    const form = document.getElementById('registration-form');

    // Select the feedback div by id "form-feedback"
    const feedbackDiv = document.getElementById('form-feedback');

    // Function to handle form submission and validation
    function handleFormSubmit(event) {
        // Prevent the default form submit action
        event.preventDefault();

        // Retrieve and trim user inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation status and messages array
        let isValid = true;
        let messages = [];

        // Validate username length
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Validate email contains '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain "@" and "." characters.');
        }

        // Validate password length
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedbackDiv
        feedbackDiv.style.display = 'block';

        if (isValid) {
            // Success message
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // green
        } else {
            // Show error messages joined with <br>
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545'; // red
        }
    }

    // Attach event listener to form for submit event
    form.addEventListener('submit', handleFormSubmit);

});
