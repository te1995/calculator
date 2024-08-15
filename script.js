let num1 = "";
let num2 = "";
let boolNum1 = true;
let boolNum2 = false;
let result = "";
let operator = ""; //1 ist Addition, 2 ist Subtraction, 3 ist Multiplikation und 4 ist Division.
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const buttonToKeepEnabled = document.querySelector(".cbutton");

//Bei Tippen von Tasten-Elementen den Display anpassen
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        
        let content = e.target.textContent.trim();
        
        if(content === 'C') {
            resetDisplay();
            return;
        }

        
        if((content === "+" || content === "-" || content === "x"  || content === "/")) {
                if(operator === "") {
                    operator = content;
                    boolNum1 = false;
                    boolNum2 = true;
                    display.textContent += content;
                } else {
                    num1 = operate(operator, +num1, +num2).toString();
                    boolNum1 = false;
                    boolNum2 = true;
                    num2 = "";
                    operator = content;
                    display.textContent = num1 + content;

                }
        } else if(content === "=") {
            result = operate(operator, +num1, +num2);
            num1 = result;
            num2 = "";
            operator = "";
            display.textContent = result;
        } else {
            if(boolNum1) {
                num1 += content;
                display.textContent += content;
            } else if(boolNum2) {
                num2 += content;
                display.textContent += content;
            }
    
        }

    });
});


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

function operate(operator, num1, num2) {
    if(operator === "+") {
        return add(num1, num2);
    } else if(operator === "-") {
        return subtract(num1, num2);
    } else if(operator === "x") {
        return multiply(num1, num2);
    } else if(operator === "/") {
        return divide(num1, num2);
    }
}

function resetDisplay() {
    boolNum1 = true;
            boolNum2 = false;
            display.textContent = "";
            result = 0;
            operator = "";
            num1 = 0;
            num2 = 0;
}
