const NUM_1 = 0;
const NUM_2 = 0;
const OPERATOR = 0; //1 ist Addition, 2 ist Subtraction, 3 ist Multiplikation und 4 ist Division.

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function operate(op, num1, num2) {
    if(op === 1) {
        return add(num1, num2);
    } else if(op === 2) {
        return subtract(num1 - num2);
    } else if(op === 3) {
        return multiply(num1, num2);
    } else if(op === 4) {
        return divide(num1, num2);
    }
}