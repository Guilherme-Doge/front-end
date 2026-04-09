let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(numbers.join());

console.log(numbers.reverse());
numbers.reverse();

console.log(numbers.slice(0, 2));

console.log(numbers.filter((element)=> {
    return element % 2 == 0;
}))

console.log(numbers.map((element)=> {
    return element * element;
}))

console.log(numbers.reduce((total, element) => {
    return element + total
}));

numbers.forEach((element) => {
    console.log(element)
});