document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('form-message');

    // Basic validation
    if (password !== confirmPassword) {
        message.textContent = 'Passwords do not match.';
        message.style.display = 'block';
        return;
    }

    // Form submitted successfully
    message.textContent = 'Registration successful!';
    message.style.color = 'green';
    message.style.display = 'block';

    // Optionally, clear form fields
    setTimeout(() => {
        message.style.display = 'none';
        document.getElementById('registrationForm').reset();
    }, 3000);
});
