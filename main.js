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
const $ = (valor)=>document.querySelector(valor);
const $$ = (valor)=>document.querySelectorAll(valor);

const display = $(".actual-value");
const numbers = $$("[data-number]");
const operators = $$("[data-operator]");

// Values

const firstOperand = "";
const secondOperand = "";
const opActual = "";
