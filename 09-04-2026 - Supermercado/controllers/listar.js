import { produtos } from '../estoque.js';

export function listar() {
    if (produtos.length === 0) {
        console.log("\nO estoque está vazio no momento.");
        return;
    }

    console.log("\n--- LISTA DE PRODUTOS ---");
    produtos.forEach((p) => {
        console.log(`${p.nome} | ${p.marca} | ${p.categoria} | R$ ${p.preco.toFixed(2)} | Qtd: ${p.quantidade}`);
    });
    console.log("----------------------------\n");
}