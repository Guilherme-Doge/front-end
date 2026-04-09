import { produtos } from '../estoque.js';

export function registrarEntradaSaida(id, quantidadeInformada) {
    const produto = produtos.find((p) => p.id === Number(id));
    if (!produto) return false;
    const novoSaldo = produto.quantidade + quantidadeInformada;
    if (novoSaldo >= 0) {
        produto.quantidade = novoSaldo;
        return true;
    }
    return false;
}