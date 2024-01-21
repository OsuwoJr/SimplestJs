function changeBackgroundColor() {
    var body = document.body;
    var currentColor = body.style.backgroundColor;

    // Change the background color
    body.style.backgroundColor = currentColor === 'lightblue' ? 'lightcoral' : 'lightblue';

    // Display a message
    var message = currentColor === 'lightblue' ? 'Background color changed to Light Coral!' : 'Background color changed to Light Blue!';
    alert(message);
}