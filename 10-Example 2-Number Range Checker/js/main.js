function showOutput() {
          // Ask the user for a number
          let userInput = prompt("Enter a number between 1 and 10:");

          // Convert the user's input to a number
          userInput = parseFloat(userInput);
  
          // Check if the input is a valid number within the specified range
          if (!isNaN(userInput) && userInput >= 1 && userInput <= 10) {
              alert("You entered a valid number within the range!");
          } else {
              alert("Invalid input or not within the specified range.");
          }
}

//This code defines a function showOutput that prompts the user to enter a number, converts the input to a number, and then checks if it's a positive number. If it is, it alerts "You entered a positive number!" Otherwise, it alerts "Invalid input or not a positive number."