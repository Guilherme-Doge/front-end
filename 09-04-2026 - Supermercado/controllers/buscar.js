import {produtos} from '../estoque.js'

export function buscar(nome) {
    return produtos.find((p) => 
        p.nome.toLowerCase() === nome.toLowerCase()
    )
}