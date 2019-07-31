// STATING VARIABLES
var numString = '';
var numArray = [];
let display = document.getElementById('display');

// CALL LISTEN FUNCTION
listen()

// FUNCTION that listens for click of button
function listen() {
    addEventListener('click', getButtonValue);
}

// GETBUTTONVALUE MEGA FUNCTION 
function getButtonValue() {
    let button = event.target.value;
    if (!isNaN(button) || button === '.') {
        number();
    } else if (button === 'AC') {
        numArray = [];
        clear();
    } else if (button === 'CE') {
        clear();
    } else if (button === '=') {
        calculate();
    } else {
        storeNumber(button);
    }
}

// NUMBER FUNCTION to string together numbers
function number() {
    let button = event.target.value;
    if (button === '.' && numString.includes('.')) {
        return;
    } else if (numString.charAt(0) === 0 && button === 0 && numString.length === 1) {
        return;
    } else {
        numString += button;
        display.value = numString;
    }
}

// CLEAR FUNCTION that empties numString and sets display at '0'
function clear() {
    numString = '';
    display.value = 0;
}

// STORENUMBER FUNCTION that pushes numbers and operators (+ - * /) to numArray
function storeNumber(button) {
    if (numString === '' && numArray.length === 0) {
        return;
    } else {
        numArray.push(numString);
        numArray.push(button);
        numString = '';
    }
}

// CALCULATE FUNCTION
function calculate() {
    numArray.push(numString);
    let currentNumber = Number(numArray[0]);
    for (var i = 0; i < numArray.length; i++) {
        let nextNumber = Number(numArray[i + 1]);
        let symbol = numArray[i];
        if (symbol === '+') {
            currentNumber += nextNumber;
        } else if (symbol === '-') {
            currentNumber -= nextNumber;
        } else if (symbol === '*') {
            currentNumber *= nextNumber;
        } else if (symbol === '/') {
            currentNumber /= nextNumber;
        }
    }
    display.value = currentNumber;
    numString = JSON.stringify(currentNumber);
    numArray = [];
}

// Smaller operator functions within Calculate function - currently cannot get this to refactor
// function addition() {
//     currentNumber += nextNumber;
// }

// function subtraction() {
//     currentNumber -= nextNumber;
// }

// function multiplication() {
//     currentNumber *= nextNumber;
// }

// function division() {
//     currentNumber /= nextNumber;
// }








// NOTES
// $ - commonly used as a shortcut to the function document.getElementById(). $() function references an element from the DOM if you pass it the id of that elementIdentifier 