import { registrarEntradaSaida } from '../controllers/registrarEntradaSaida.js';
import { adicionar } from '../controllers/adicionar.js';
import { produtos, limparEstoque } from '../estoque.js';

describe('Funcionalidade: Atualizar Quantidade', () => {
    let idProduto;

    beforeEach(() => {
        limparEstoque();
        adicionar('Leite', 'Parmalat', 'Laticínios', 5.00, 50);
        idProduto = produtos[0].id;
    });

    test('Deve somar unidades corretamente (Entrada)', () => {
        registrarEntradaSaida(idProduto, 10); // +10
        expect(produtos[0].quantidade).toBe(60);
    });

    test('Deve subtrair unidades corretamente (Saída)', () => {
        registrarEntradaSaida(idProduto, -20); // -20
        expect(produtos[0].quantidade).toBe(30);
    });

    test('Não deve permitir que o estoque fique negativo', () => {
        const resultado = registrarEntradaSaida(idProduto, -60);
        expect(resultado).toBe(false); // Assume que a função retorna false se falhar
        expect(produtos[0].quantidade).toBe(50); // Valor original mantido
    });
});