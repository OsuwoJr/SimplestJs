function showOutput() {
 // Ask the user for their age
 let userAge = prompt("Enter your age:");

 // Convert the user's input to a number
 userAge = parseInt(userAge);

 // Check eligibility and display a message
 if (userAge >= 18) {
     alert("You are eligible to vote!");
 } else {
     alert("Sorry, you are not eligible to vote.");
 }
}

//This JavaScript code defines a function called showOutput that prompts the user to enter their age, converts the input to a number, and then displays a message based on whether the user's age is 18 or older. If the user is 18 or older, it displays an alert saying "You are eligible to vote!", otherwise it displays "Sorry, you are not eligible to vote."