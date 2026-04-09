import {produtos} from '../estoque.js'

export let id = 0

export function adicionar(nome, marca, categoria, preco, quantidade) {
    let produto = {
        id: id,
        nome: nome,
        marca: marca,
        categoria: categoria,
        preco: preco,
        quantidade: quantidade
    }
    produtos.push(produto)
}