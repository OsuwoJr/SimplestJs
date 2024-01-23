function showOutput() {
         // Ask the user for length and width
         let length = parseFloat(prompt("Enter the length of the rectangle:"));
         let width = parseFloat(prompt("Enter the width of the rectangle:"));
 
         // Calculate the area
         let area = length * width;
 
         // Display the result
         alert(`The area of the rectangle is: ${area}`)
}

