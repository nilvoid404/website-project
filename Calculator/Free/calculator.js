const display = document.getElementById("display");

let num1 = "";
let num2 = "";
let operator = "";
let ans = 0;



function appendToDisplay(input) {

    if(input === "+" ||
    input === "-" ||
    input === "*" ||
    input === "/"
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
}
