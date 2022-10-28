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

const display = document.querySelector(".actual-value");
const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const clear = document.querySelector(".clear");

// Values

let firstOperand = "";  
let secondOperand = "";
let opActual = "";

// Mostrar en pantalla

function showNumbers(value) {
    if (opActual == ""){
        firstOperand += value;
        display.textContent += value;
        console.log({firstOperand})
    }
}

function showOP(value) {
    if (opActual == "") {opActual = value};
    display.textContent += value;
    console.log({opActual})
}



numbers.forEach(number => {
    number.addEventListener("click", ()=>{
        showNumbers(number.textContent)
    })
});

// Operadores

operators.forEach(operator => {
    operator.addEventListener("click", ()=>{
        showOP(operator.textContent)
    })
});


// Limpiar pantalla y operandos

clear.addEventListener("click",()=>{
    firstOperand = "";
    display.textContent = "";
})