// Define the submitForm function
function submitForm() {
    // Get the values from the name, email, and password input fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Check if any of the fields are empty
    if (!name || !email || !password) {
        // Display an error message if any of the fields are empty
        document.getElementById('errorMessage').textContent = 'Please fill out all fields.';
    } else {
        // Clear the error message
        document.getElementById('errorMessage').textContent = '';

        // Display a success message with the entered name and email
        alert('Form submitted successfully!\nName: ' + name + '\nEmail: ' + email);
    }
}
