let car = {
    marca : "Toyota",
    modelo : "Modelo",
    ano : 1994
};

console.log(car.marca);
console.log(car.ano);

car.getAge = function() {
    return new Date().getFullYear() - this.ano;
}
console.log(car.getAge());

car.getDescription = function() {
    console.log(`${this.marca}\n${this.modelo}\n${this.ano}\n${this.getAge()}`)
}
console.log(car.getDescription())

const prompt = require('prompt-sync')();