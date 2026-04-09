const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número: "));

if (num < 0) {
    console.log("Negativo")
} else if (num > 0) {
    console.log("Positivo")
} else {
    console.log("Neutro")
}