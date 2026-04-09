const prompt = require('prompt-sync')();

let num = Number(prompt("Insira um número: "));
if (num > 20) {
    console.log(num / 2);
}