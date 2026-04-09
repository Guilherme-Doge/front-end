const prompt = require('prompt-sync')();

let year = Number(prompt("Insira um ano: "));

if ((year % 4 == 0 && year < 100) || (year > 100 && year % 4 == 0 && year % 400 == 0)) {
    console.log("Ano bissexto")
} else {
    console.log("Ano normal")
}