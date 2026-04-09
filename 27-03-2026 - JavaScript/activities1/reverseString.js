function reverseString(word) {
    let newWord = '';
    for (let i = 1; i <= word.length; i++) {
        newWord += word[word.length - i]
    }
    console.log(newWord)
}

let word = "JavaScript";
reverseString(word)