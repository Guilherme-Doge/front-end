const texto = document.getElementById("texto")
valor = 0

function aumentar() {
    valor++
    texto.innerHTML = valor
}

function diminuir() {
    valor--
    texto.innerHTML = valor
}