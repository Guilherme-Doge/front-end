function gerarPassword(num) {
    return Math.random().toString(36).slice(-num);
}

console.log(gerarPassword(10))