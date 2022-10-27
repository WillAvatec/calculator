//Estas son las funciones basicas

function add (a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}
function divide (a,b){
    return a/b;
}


// Esta funcion toma un operador y 2 numeros, 
//  entonces llama una (FUNCION BASICA) y la aplica sobre los numeros. 

function operate(op, num1, num2) {
    if (op == "+") return add(num1,num2);
    if (op == "-") return substract(num1, num2);
    if (op == "*") return multiply(num1, num2);
    if (op == "/") return divide(num1, num2);

    return "Unvalid Operation";
}

// Aqui estan todos las referencias al DOM 

const display = document.querySelector(".actual-value");
const numbers = document.querySelectorAll(".numbers button");
const operators = document.querySelectorAll(".operators button");

// When clicking over a button show the text in the display

