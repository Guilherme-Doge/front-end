const prompt = require('prompt-sync')();

let word = prompt("Insira uma palavra: ").toLowerCase();
let isPalindrome = true;

for(let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("Palíndromo");
} else {
    console.log("Normal");
}