function criarMatriz(linhas, colunas) {
  const matriz = [];

  for (let i = 0; i < linhas; i++) {
    const linha = [];
    for (let j = 0; j < colunas; j++) {
      const numeroAleatorio = Math.floor(Math.random() * 101);
      linha.push(numeroAleatorio);
    }
    matriz.push(linha);
  }

  return matriz;
}

const minhaMatriz = criarMatriz(3, 4);
console.table(minhaMatriz);