// Function to add a value to the display
function addToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to remove the last character from the display
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to clear the entire display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to calculate the square root of the number in the display
function calculateSquareRoot() {
    const display = document.getElementById('display');
    if (display.value) {
        display.value = Math.sqrt(parseFloat(display.value));
    }
}

// Function to calculate the square of the number in the display
function calculateSquared() {
    const display = document.getElementById('display');
    if (display.value) {
        display.value = Math.pow(parseFloat(display.value), 2);
    }
}

// Function to calculate the reciprocal of the number in the display
function calculateReciprocal() {
    const display = document.getElementById('display');
    if (display.value !== '0' && display.value !== '') {
        display.value = 1 / parseFloat(display.value);
    } else {
        display.value = 'Error'; // Handling division by zero or empty display
    }
}

// Function to toggle the sign of the number in the display
function toggleSign() {
    const display = document.getElementById('display');
    if (display.value) {
        if (display.value.charAt(0) === '-') {
            display.value = display.value.substring(1);
        } else {
            display.value = '-' + display.value;
        }
    }
}

// Function to calculate the percentage of the number in the display
function calculatePercentage() {
    const display = document.getElementById('display');
    if (display.value) {
        display.value = parseFloat(display.value) * 0.01; // Multiply by 0.01 to get the percentage
    }
}

// Function to clear the current entry in the display
function clearEntry() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to evaluate and display the result of the expression in the display
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Using eval to evaluate the expression
    } catch {
        display.value = 'Error'; // Handling any evaluation errors
    }
}
