const prompt = require('prompt-sync')();

function factorial(num) {
    for (let i = num - 1; i > 0; i--) {
        num *= i;
    }
    return num;
}

let num = Number(prompt("Insira um número: "));
console.log(factorial(num))