const prompt = require('prompt-sync')();

let c = Number(prompt("Insira o capital inicial investido: "))
let i = Number(prompt("Insira a taxa de juros, em percentual: "));
let t = Number(prompt("INsira o tempo do investimento, em meses: "));

console.log(Math.round(c * (1 + 0.01 * i * t) * 100) / 100);
console.log(Math.round(c * (1 + 0.01 * i) ** t * 100) / 100);