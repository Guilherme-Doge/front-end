const prompt = require('prompt-sync')();

let celsius = Number(prompt("Insira uma temperatura em celsius (sem º): "));

console.log(1.8 * celsius + 32)