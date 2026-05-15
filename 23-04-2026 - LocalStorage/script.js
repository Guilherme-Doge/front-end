// 1
const enviar = document.getElementById("enviar");
const nomeInput = document.getElementById("nome");
const apresentacao = document.getElementById("apresentacao");

if (apresentacao) {
    const nomeSalvo = localStorage.getItem("usuario");
    if (nomeSalvo) {
        apresentacao.innerHTML = `Olá, ${nomeSalvo}`;
    }
}

if (enviar && nomeInput) {
    enviar.addEventListener('click', (event) => {
        event.preventDefault();
        const valorDigitado = nomeInput.value;
        localStorage.setItem("usuario", valorDigitado);
        
        if (apresentacao) {
            apresentacao.innerHTML = `Olá, ${valorDigitado}`;
        }
    });
}

// 3
document.addEventListener('DOMContentLoaded', () => {
    let count = parseInt(sessionStorage.getItem('f5_count')) || 0;
    count++;
    sessionStorage.setItem('f5_count', count);
    
    const message = `<p>Página atualizada <strong>${count}</strong> vezes nesta sessão.</p>`;
    document.body.insertAdjacentHTML('beforeend', message);
});

// 4
const tema = document.getElementById("tema");

tema.addEventListener('click', (event) => {
    event.preventDefault()
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
});