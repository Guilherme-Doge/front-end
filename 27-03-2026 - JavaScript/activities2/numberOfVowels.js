function countVowels(word) {
    let numVowels = 0;
    for (let i = 1; i < word.length; i++) {
        if (word[i] == 'A' || word[i] == 'a' || word[i] == 'E' || word[i] == 'e' || word[i] == 'I' || 
            word[i] == 'i' || word[i] == 'O' || word[i] == 'o' || word[i] == 'U' || word[i] == 'u') {
                numVowels++;
            }
    }
}