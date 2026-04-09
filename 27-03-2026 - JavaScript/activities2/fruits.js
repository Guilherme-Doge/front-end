fruits = ['maçã', 'banana', 'laranja'];

console.log(fruits[1]);

fruits.push('manga');

fruits.shift();

console.log(fruits.length);

fruits.forEach(element => {
    console.log(element)
});

fruitsLength = fruits.map(function(element) {
    return element.length;
});
console.log(fruitsLength);

fruitsFilter = fruits.filter(function(element) {
    if (element.length >= 5) {
        console.log(element)
    }
});

let numeros = fruits.map(function(element) {
    return element.length;
});
console.log(numeros.reduce(function(total, numero) {
    return total + numero;
}))