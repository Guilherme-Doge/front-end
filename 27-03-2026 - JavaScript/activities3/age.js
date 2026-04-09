const prompt = require('prompt-sync')();

let age = Number(prompt("Insira a idade: "));
if (age < 16) {
    console.log("Não eleitor");
} else if (age > 17 && age < 66) {
    console.log("Eleitor obirgatório")
} else {
    console.log("Eleitor facultativo");
}