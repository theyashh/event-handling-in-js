// Function to change the color of a button when clicked
function changeColor(event) {
    event.target.style.backgroundColor = 'lightblue';
}

// Function to show a message when mouse is over the button
function showMessage(event) {
    const messageId = `message${event.target.id.slice(-1)}`;
    const messageElement = document.getElementById(messageId);
    messageElement.style.display = 'block';
}

// Function to hide the message when mouse is out of the button
function hideMessage(event) {
    const messageId = `message${event.target.id.slice(-1)}`;
    const messageElement = document.getElementById(messageId);
    messageElement.style.display = 'none';
}

// Function to hide the button on double-click
function hideButton(event) {
    event.target.style.display = 'none';
}

// Attach event listeners to all buttons
document.getElementById('button1').addEventListener('click', changeColor);
document.getElementById('button1').addEventListener('mouseover', showMessage);
document.getElementById('button1').addEventListener('mouseout', hideMessage);
document.getElementById('button1').addEventListener('dblclick', hideButton);

document.getElementById('button2').addEventListener('click', changeColor);
document.getElementById('button2').addEventListener('mouseover', showMessage);
document.getElementById('button2').addEventListener('mouseout', hideMessage);
document.getElementById('button2').addEventListener('dblclick', hideButton);

document.getElementById('button3').addEventListener('click', changeColor);
document.getElementById('button3').addEventListener('mouseover', showMessage);
document.getElementById('button3').addEventListener('mouseout', hideMessage);
document.getElementById('button3').addEventListener('dblclick', hideButton);
