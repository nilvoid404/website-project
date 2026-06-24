const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function square() {
    display.value = Math.pow(Number(display.value), 2);
}

function cube() {
    display.value = Math.pow(Number(display.value), 3);
}

function squareRoot() {
    display.value = Math.sqrt(Number(display.value));
}

function cubeRoot() {
    display.value = Math.cbrt(Number(display.value));
}

function pi() {
    display.value += Math.PI;
}

function exponential() {
    display.value += Math.E;
}

function sin() {
    display.value = Math.sin(Number(display.value));
}

function cos() {
    display.value = Math.cos(Number(display.value));
}

function tan() {
    display.value = Math.tan(Number(display.value));
}

function ln() {
    display.value = Math.log(Number(display.value));
}

function logg() {
    display.value = Math.log10(Number(display.value));
}

function power() {
    display.value += "**";
}

function factorial() {
    let n = Number(display.value);

    if (n < 0 || !Number.isInteger(n)) {
        display.value = "Error";
        return;
    }

    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }

    display.value = fact;
}

let ans = 0;

function calculate() {
    try {
        ans = eval(display.value);
        display.value = ans;
    } catch {
        display.value = "Error";
    }
}

function answer() {
    display.value += ans;
}

function tenPower() {
    display.value = Math.pow(10, Number(display.value));
}