function showOutput() {
       // Ask the user for a number
       let userInput = parseInt(prompt("Enter a number:"));

       // Check if the number is even
       let isEven = userInput % 2 === 0;

       // Display the result
       alert(`${userInput} is ${isEven ? 'even' : 'odd'}.`);
}

