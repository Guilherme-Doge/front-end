const prompt = require('prompt-sync')();

let grade1 = Number(prompt("Digite a primeira nota: "));
let grade2 = Number(prompt("Digite a segunda nota: "));
let grade3 = Number(prompt("Digite a terceira nota: "));

let media = (grade1 + grade2 + grade3) / 3;

console.log(media)

if (media < 3) {
    console.log("Reprovado")
} else if (media > 7) {
    console.log("Aprovado")
} else {
    console.log("Em exame")
}