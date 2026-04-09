const prompt = require('prompt-sync')();

let num1 = Number(prompt("Insira o primeiro número: "));
let num2 = Number(prompt("Insira o segundo número: "));
let num3 = Number(prompt("Insira o terceiro número: "));

let array = [num1, num2, num3];

console.log(array.reverse())