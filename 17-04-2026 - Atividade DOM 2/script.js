const fundo = document.getElementById("fundo")
const titulo = document.getElementById("titulo")
const paragrafo = document.getElementById("paragrafo")

const listaFontes = ["Arial", "Verdana", "Courier New", "Georgia", "Times New Roman", "Impact", "Comic Sans MS"]

function corFundo() {
    const corHex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
    fundo.style.backgroundColor = corHex
}

function corTitulo() {
    const corHex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
    titulo.style.color = corHex
}

function corParagrafo() {
    const corHex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
    paragrafo.style.color = corHex
}

function fonteTitulo() {
    const fonteSorteada = listaFontes[Math.floor(Math.random() * listaFontes.length)]
    titulo.style.fontFamily = fonteSorteada
}

function fonteParagrafo() {
    const fonteSorteada = listaFontes[Math.floor(Math.random() * listaFontes.length)]
    paragrafo.style.fontFamily = fonteSorteada
}

function tudo() {
    corFundo()
    corTitulo()
    corParagrafo()
    fonteTitulo()
    fonteParagrafo()
}