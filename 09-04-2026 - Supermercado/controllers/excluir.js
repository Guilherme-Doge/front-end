import { produtos } from '../estoque.js';

export function excluir(id) {
    const indice = produtos.findIndex((p) => p.id === Number(id));
    if (indice !== -1) {
        produtos.splice(indice, 1);
        return true;
    }
    return false;
}