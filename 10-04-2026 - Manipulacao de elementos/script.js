const inputNome = document.querySelector('#nome-input')
const display = document.querySelector('#cartao-nome')

inputNome.addEventListener('input', () => {
    display.innerText = inputNome.value
});

const corFundo = document.getElementById('cartao')
const btnAzul = document.getElementById('btn-azul')
const btnVerde = document.getElementById('btn-verde')

btnAzul.addEventListener('click', () => {
    corFundo.style.backgroundColor = '#00aaff'
})

btnVerde.addEventListener('click', () => {
    corFundo.style.backgroundColor = '#00bb88'
})

const btnFonte = document.getElementById('btn-fonte')
const fonte = document.getElementById('cartao')

btnFonte.addEventListener('click', () => {
    fonte.classList.toggle('fonte-alternativa')
})

const selectImagem = document.querySelector('#imagem-select');
const imagemExibida = document.querySelector('#cartao-img');

selectImagem.addEventListener('change', function() {
    const novoSrc = selectImagem.value;
    imagemExibida.setAttribute('src', novoSrc);
});

const habilidade = document.getElementById('habilidade-input');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaHabilidades = document.getElementById('lista-habilidades');

btnAdicionar.addEventListener('click', () => {
    if (habilidade.value.trim() !== "") {
        const novoItem = document.createElement('li');
        novoItem.textContent = habilidade.value;
        listaHabilidades.appendChild(novoItem);
        habilidade.value = "";
        habilidade.focus();
    } else {
        alert("Por favor, digite uma habilidade!");
    }
});