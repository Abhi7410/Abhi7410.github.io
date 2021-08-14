$(document).ready(function () {
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = '0';
    updateScreen(result);

    $('.button').on('click', function (evt) {
        var buttonPressed = $(this).html();
        console.log(buttonPressed);

        if (buttonPressed === "C") {
            result = 0;
            currentEntry = '0';
        } else if (buttonPressed === "CE") {
            currentEntry = '0';
        } else if (buttonPressed === "back") {
            
        } else if (buttonPressed === "+/-") {
            currentEntry *= -1;
        } else if (buttonPressed === '.') {
            currentEntry += '.';
        } else if (isNumber(buttonPressed)) {
            if (currentEntry === '0') currentEntry = buttonPressed;
            else currentEntry = currentEntry + buttonPressed;
        } else if (isOperator(buttonPressed)) {
            prevEntry = parseFloat(currentEntry);
            operation = buttonPressed;
            currentEntry = '';
        } else if (buttonPressed === '%') {
            currentEntry = currentEntry / 100;
        } else if (buttonPressed === 'sqrt') {
            currentEntry = Math.sqrt(currentEntry);
        } else if (buttonPressed === '1/x') {
            currentEntry = 1 / currentEntry;
        } else if (buttonPressed === 'pi') {
            currentEntry = Math.PI;
        } else if (buttonPressed === 'log10') {
            currentEntry = Math.log(currentEntry)/Math.log(10);
        }  else if (buttonPressed === '=') {
            currentEntry = operate(prevEntry, currentEntry, operation);
            operation = null;
        }

        updateScreen(currentEntry);
    });
});

updateScreen = function (displayValue) {
    var displayValue = displayValue.toString();
    $('.screen').html(displayValue.substring(0, 10));
};

isNumber = function (value) {
    return !isNaN(value);
}

isOperator = function (value) {
    return value === '/' || value === '*' || value === '+' || value === '-' || value ==='^' || value ==='log' || value === 'root';
};

operate = function (a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === '*') return a * b;
    if (operation === '/') return a / b;
    if (operation === '^') return a**b;
    if (operation === 'log') return (Math.log(a)/Math.log(b));
    if (operation === 'root') return (Math.pow(a, 1/b));


}