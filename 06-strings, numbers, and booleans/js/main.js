function showOutput() {

   // String Example
let greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

//Strings can be manipulated in various ways. For example, you can concatenate them, find the length, or access individual characters in them.
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

console.log(firstName.length); // Output: 4
console.log(lastName[0]); // Output: D

// Number Example

let x = 10;
let y = 5.5;

console.log(x + y); // Output: 15.5

//Numbers in JavaScript support various mathematical operations, such as addition, subtraction, multiplication, and division.
let a = 20;
let b = 4;

console.log(a - b); // Output: 16
console.log(a * b); // Output: 80
console.log(a / b); // Output: 5

// Boolean Example
let isTrue = true;
let isFalse = false;

console.log(isTrue); // Output: true
console.log(isFalse); // Output: false

//Boolean values are commonly used in conditional statements to control the flow of a program.
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

}