import type { Produto } from './produto.ts';

let mouse : Produto = { id : 1, 
                        nome : "Mouse", 
                        preco : 10.99, 
                        emEstoque : true,
                        descricao : "RGB"};

let teclado : Produto = { id : 1, 
                          nome : "Teclado", 
                          preco : 10.99, 
                          emEstoque : false};

console.log(mouse);
console.log(teclado);