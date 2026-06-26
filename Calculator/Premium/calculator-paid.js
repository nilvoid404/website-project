const display = document.getElementById("display");

let num1 = "";
let num2 = "";
let operator = "";
let ans = 0;



function appendToDisplay(input) {

    if(input === "+" ||
    input === "-" ||
    input === "*" ||
    input === "/" ||  
    input === "**"
){
        operator = input;
    } else if( operator === "") {
        num1 = num1 + input;
    }else {
        num2 = num2 + input;
    }
        display.value = num1 + operator + num2;
}


function clearDisplay() {
    num1 = "";
    num2 = "";
    operator = "";
    display.value = "";
}


function calculate() {
   num1 = Number(num1);
   num2 = Number(num2);

   if(operator === '+'){
    display.value = num1 + num2;
   }
   else if(operator === '-'){
    display.value = num1 - num2;
   }
    else if(operator === '*'){
    display.value = num1 * num2;
   }
    else if(operator === '/'){
    display.value = num1 / num2;
   }
   else if(operator === '**'){
    display.value = num1 ** num2;
   }
   ans = Number(display.value);
    num1 = ans.toString();
    num2 = "";
    operator = "";
}

function answer() {
    display.value = ans;
    num1 = ans.toString();
    num2 = "";
    operator = "";
}

function power() {
    operator = "**";
    display.value = num1 + "**";
}

function factorial() {
    num1 = Number(display.value);
if (num1 < 0 || !Number.isInteger(num1)) {
    display.value = "Error";
    return;
}

let fact = 1;

for (let i = 2; i <= num1; i++) {
    fact *= i;
}

    display.value = fact;
    ans = fact;
    num1 = fact.toString();
    num2 = "";
    operator = "";
}


function tenPower() {
    num1 = Number(num1);
    display.value = 10 ** num1;
}

function backspace() {

    if (num2 !== "") {
        num2 = num2.slice(0, -1);
    }
    else if (operator !== "") {
        operator = "";
    }
    else if (num1 !== "") {
        num1 = num1.slice(0, -1);
    }

    display.value = num1 + operator + num2;
}

function square() {
    num1 = Number(num1);
    num1 = num1 * num1;
    display.value = num1; //num1 ** 2;
}

function cube() {
   num1 = Number(num1);
   num1 = num1 **3;
   display.value = num1;
}

function squareRoot() {
    num1 = Number(num1);
    num1 = num1 ** (1/2); // 
    display.value = num1;
}

function cubeRoot() {
    num1 = Number(num1);
    num1 = num1 ** (1/3);
    display.value = num1;
}

function pi() {
    appendToDisplay(Math.PI.toString());
}
function exponential() {
    appendToDisplay(Math.E.toString());
}

function sin() {
    let result = Math.sin(Number(display.value));

    display.value = result;
    num1 = result.toString();
    num2 = "";
    operator = "";
}
function cos() {
    let result = Math.cos(Number(display.value));

    display.value = result;
    num1 = result.toString();
    num2 = "";
    operator = "";
}

function tan() {
    let result = Math.tan(Number(display.value));

    display.value = result;
    num1 = result.toString();
    num2 = "";
    operator = "";
}

function ln() {
    let result = Math.log(Number(display.value));

    display.value = result;
    num1 = result.toString();
    num2 = "";
    operator = "";
}

function log() {
    let result = Math.log10(Number(display.value));

    display.value = result;
    num1 = result.toString();
    num2 = "";
    operator = "";
}

