/**
 * Manipulates input data by reversing the text and displaying the result.
 *
 * @param {string} inputData - the input text to be manipulated
 * @return {void} 
 */
function manipulateData() {
    var inputData = document.getElementById('inputText').value;

    // String manipulation
    var reversedText = inputData.split('').reverse().join('');

    // Display the result
    document.getElementById('output').textContent = `Original Text: ${inputData}\nReversed Text: ${reversedText}`;
}