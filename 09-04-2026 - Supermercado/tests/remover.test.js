import { excluir } from '../controllers/excluir.js';
import { adicionar } from '../controllers/adicionar.js';
import { produtos, limparEstoque } from '../estoque.js';

describe('Funcionalidade: Remover Produto', () => {
    beforeEach(() => {
        limparEstoque();
        adicionar('Sabonete', 'Dove', 'Higiene', 3.50, 100);
    });

    test('Deve remover o produto pelo ID e diminuir o tamanho do array', () => {
        const idParaRemover = produtos[0].id;
        excluir(idParaRemover);
        expect(produtos).toHaveLength(0);
    });
});