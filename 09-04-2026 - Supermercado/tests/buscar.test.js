import { buscar } from '../controllers/buscar.js';
import { adicionar } from '../controllers/adicionar.js';
import { limparEstoque } from '../estoque.js';

describe('Funcionalidade: Buscar Produto', () => {
    beforeEach(() => {
        limparEstoque();
        adicionar('Feijão', 'Carioca', 'Grãos', 8.00, 20);
    });

    test('Deve encontrar um produto ignorando case (maiúsculas/minúsculas)', () => {
        const resultado = buscar('feijão');
        expect(resultado).toBeDefined();
        expect(resultado.nome).toBe('Feijão');
    });

    test('Deve retornar undefined para produtos não cadastrados', () => {
        const resultado = buscar('Macarrão');
        expect(resultado).toBeUndefined();
    });
});