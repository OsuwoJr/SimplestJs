function showOutput() {
      // Ask the user for first and last names
      let firstName = prompt("Enter your first name:");
      let lastName = prompt("Enter your last name:");

      // Generate a personalized greeting
      let greeting = "Hello, " + firstName + " " + lastName + " " + "!";
      
      // Display the greeting
      alert(greeting);
}

