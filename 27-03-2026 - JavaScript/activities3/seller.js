const prompt = require('prompt-sync')();

let value = Number(prompt("Insira o valor da compra"));
value > 20.0 ? console.log(value * 1.3) : console.log(value * 1.45);
