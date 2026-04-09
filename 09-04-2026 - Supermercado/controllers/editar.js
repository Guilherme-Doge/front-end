import {produtos} from '../estoque.js'

export function editar(id, nome, marca, categoria, preco, quantidade) {
    let produto = produtos.forEach((p) => {
        if (p.id === id) {
            p.nome = nome
            p.marca = marca
            p.categoria = categoria
            p.preco = preco
            p.quantidade = quantidade
        }
    })
}