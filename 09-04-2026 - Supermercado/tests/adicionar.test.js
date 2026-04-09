import { adicionar } from '../controllers/adicionar.js';
import { produtos, limparEstoque } from '../estoque.js';

describe('Funcionalidade: Adicionar Produto', () => {
    beforeEach(() => {
        limparEstoque();
    });

    test('Deve adicionar um novo produto ao estoque com ID único', () => {
        adicionar('Arroz', 'Tio João', 'Grãos', 25.50, 10);
        
        expect(produtos).toHaveLength(1);
        expect(produtos[0]).toMatchObject({
            nome: 'Arroz',
            preco: 25.50,
            quantidade: 10
        });
        expect(produtos[0]).toHaveProperty('id')
    });
});