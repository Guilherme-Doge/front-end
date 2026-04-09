const prompt = require('prompt-sync')();

let time = Number(prompt("Insira o tempo (em horas): "));
let speed = Number(prompt("Insira a velocidade média: "))

console.log(time * speed)