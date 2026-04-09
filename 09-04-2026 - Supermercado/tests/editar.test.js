import { editar } from '../controllers/editar.js';
import { adicionar } from '../controllers/adicionar.js';
import { produtos, limparEstoque } from '../estoque.js';

describe('Funcionalidade: Editar Produto', () => {
    beforeEach(() => {
        limparEstoque();
        adicionar('Chocolate', 'Nestlé', 'Doces', 7.00, 10);
    });

    test('Deve alterar nome e preço mantendo a quantidade original', () => {
        const id = produtos[0].id;
        editar(id, 'Chocolate Amargo', 'Nestlé', 'Doces', 9.00, 10 );
        
        expect(produtos[0].nome).toBe('Chocolate Amargo');
        expect(produtos[0].preco).toBe(9.00);
        expect(produtos[0].quantidade).toBe(10); // Não deve mudar
    });
});