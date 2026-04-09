let fruits = ["Maçã", "Laranja", "Banana"];

console.log(fruits[1]);
fruits.push("Morango");
fruits.shift();
console.log(fruits);

let numeros = [1,2,3,4,5,6,7,8,9,0];
numeros.push(Math.PI);
console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.unshift(Math.PI);
console.log(numeros);
numeros.shift()
console.log(numeros);

let frutas2 = ["manga", "abacaxi", "melancia"];
let todasFrutas = frutas2.concat(fruits);
let duasFrutas = todasFrutas.slice(0, 2);
console.log(duasFrutas)
console.log(todasFrutas.slice(0, 1))
console.log(todasFrutas.indexOf("banana"));

let mFruits = todasFrutas.filter((element) => {
    return element[0] == "m";
})
console.log(mFruits);

let doubleNumbers = numeros.map((element) => {
    return element * 2;
})
console.log(doubleNumbers);

todasFrutas.forEach((element) => {
    console.log(element)
})