const prompt = require('prompt-sync')();

let num1 = Number(prompt("Insira o primeiro número: "));
let num2 = Number(prompt("Insira o segundo número: "));

if (num1 + num2 > 10) {
    console.log(num1 + num2);
}