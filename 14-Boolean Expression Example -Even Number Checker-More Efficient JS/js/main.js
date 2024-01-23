function showOutput() {
  let number = parseInt(prompt("Enter a number:"));
  let isEven = number % 2 === 0;
  alert(`${number} is ${isEven ? 'even' : 'odd'}.`);
}

