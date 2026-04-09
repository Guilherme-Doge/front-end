const prompt = require('prompt-sync')();

let salary = Number(prompt("Insira o salário: "));
let prestation = Number(prompt("Insira a prestação: "));

if (prestation > (salary * 0.2)) {
    console.log("Empréstimo não pode ser concedido");
} else {
    console.log("Empréstimo pode ser concedido")
}