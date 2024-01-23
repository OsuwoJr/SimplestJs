function showOutput() {
    // Ask the user for a number
    let userInput = prompt("Enter a number:");

    // Convert the user's input to a number
    userInput = parseFloat(userInput);

    // Check if the input is a positive number
    if (!isNaN(userInput) && userInput > 0) {
        alert("You entered a positive number!");
    } else {
        alert("Invalid input or not a positive number.");
    }

}

//This code defines a function showOutput that prompts the user to enter a number, converts the input to a number, and then checks if it's a positive number. If it is, it alerts "You entered a positive number!" Otherwise, it alerts "Invalid input or not a positive number."