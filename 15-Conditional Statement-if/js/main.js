/**
 * Prompts the user to enter a number and shows an alert if the number is positive
 */
function showOutput() {
    let number = prompt("Enter a number:"); // Prompting the user to enter a number

    if (number > 0) { // Checking if the number is positive
        alert("The number is positive."); // Showing an alert if the number is positive
    }
}

