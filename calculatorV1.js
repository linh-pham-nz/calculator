// STATING VARIABLES
// create empty string to hold last number entered 
// create empty array to hold all values entered
// create let display equal to document.getElementById, argument is 'display'

var numString = '';
var numArray = [];
let display = document.getElementById('display');

// CALL LISTEN FUNCTION
listen()

// LISTEN FUNCTION
// create listen function that listens for 'click' of getButtonValue function
function listen() {
    addEventListener('click', getButtonValue);
}

// GETBUTTONVALUE MEGA FUNCTION - FEATURES NUMBER, ALLCLEAR, CLEAR, CALCULATE, STORENUMBER FUNCTIONS in IF/ELSE IF/ELSE STATEMENT where event.target.value corresponds to button value pressed, which runs corresponding function
// let button equal to event.target.value
function getButtonValue() {
    let button = event.target.value;
    if (!isNaN(button) || button === '.') {
        number();
    } else if (button === 'AC') {
        allClear();
    } else if (button === 'CE') {
        clear();
    } else if (button === '=') {
        calculate();
    } else {
        storeNumber(button);
    }
}

// NUMBER FUNCTION to string together numbers. IF (decimal point button used exit)/ELSE IF ('0' button used exit)/ELSE STATEMENT (add button to numString and display numString)
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


// ALLCLEAR FUNCTION that empties numString, empties numArray, sets display at '0'
function allClear() {
    numString = '';
    numArray = [];
    display.value = 0;
}

// CLEAR FUNCTION that empties numString and sets display at '0'
function clear() {
    numString = '';
    display.value = 0;
}

// STORENUMBER FUNCTION with button as argument
// IF numString is empty and numArray length is 0 exit
// ELSE push numString to end of numArray, push button to end of numArray, set numString as empty
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
// contents of numString pushed to numArray
// create new variable (currentNumber) to store first Number (convert) in array
// create for LOOP to cycle thru numArray, with 2 lets (nextNumber [equal to i+1 numArray, Number], symbol [numArray index])
// IF/ELSE IF STATEMENT === 'operator' condition, calculate currentNumber with nextNumber
// IF STATEMENT for when currentNumber is less than 0, where currentNumber is converted to absolute value with negative in front
// display currentNumber
// currentNumber converted to JSON to equal numberString variable
// empty numArray 
function calculate() {
    numArray.push(numString);
    let currentNumber = Number(numArray[0]);    
    for (var i = 0; i < numArray.length; i++) {
        let nextNumber = Number(numArray[i+1]);
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
        if (currentNumber < 0) {
            currentNumber = '-' + Math.abs(currentNumber);
        }
    }
    display.value = currentNumber;
    numString = JSON.stringify(currentNumber);
    numArray = [];
}












// NOTES
// $ - commonly used as a shortcut to the function document.getElementById(). $() function references an element from the DOM if you pass it the id of that elementIdentifier 