import PromptSync from 'prompt-sync'
import {adicionar, id} from './controllers/adicionar.js'
import {listar} from './controllers/listar.js'
import {buscar} from './controllers/buscar.js'
import {editar} from './controllers/editar.js'
import {registrarEntradaSaida} from './controllers/registrarEntradaSaida.js'
import {excluir} from './controllers/excluir.js'

const prompt = PromptSync({ sigint: true})

while (true) {
    console.clear()
    console.log(`=====================================
                📦 SISTEMA DE ESTOQUE SUPERMERCADO
                ======================================
                1. Adicionar Novo Produto
                2. Listar Todos os Produtos
                3. Buscar Produto por Nome
                4. Editar Informações de um Produto
                5. Registrar Entrada/Saída de Estoque
                6. Remover Produto
                0. Sair do Sistema
                ======================================
                Escolha uma opção: `)
    let escolha = parseInt(prompt())

    switch (escolha) {
        case 1 :
            let nome = prompt("Insira o nome do produto: ")
            let marca = prompt("Insira a marca do produto: ")
            let categoria = prompt("Insira a categoria do produto: ")
            let preco = parseFloat(prompt("Insira o preço do produto: "))
            let quantidade = parseInt(prompt("Insira a quantidade do produto: "))
            id++
            adicionar(nome, marca, categoria, preco, quantidade);
            break
        
        case 2 : 
            listar()

        case 3 :
            let nomeProduto = prompt("Insira o nome do produto que deseja buscar: ")
            let p = buscar(nomeProduto)
            console.log(`${p.nome} | 
                        ${p.marca} | 
                        ${p.categoria} | 
                        ${p.preco} | 
                        ${p.quantidade}`)
            break
                
        case 4 :
            let id = parseInt(prompt("Insira o ID do produto a ser editado: "))
            let nomeEditado = prompt("Insira o novo nome do produto a ser editado: ")
            let marcaEditado = prompt("Insira a nova marca do produto a ser editado: ")
            let categoriaEditado = prompt("Insira a nova categoria do produto a ser editado: ")
            let precoEditado = parseFloat(prompt("Insira o novo preço do produto a ser editado: "))
            let quantidadeEditado = parseInt(prompt("Insira a nova quantidade do produto a ser editado: "))
            editar(id, nomeEditado, marcaEditado, categoriaEditado, precoEditado, quantidadeEditado)
            break

        case 5 :
            let quantidadeProduto = parseInt(prompt("Insira a quantidade a ser movimentada (insira '-' para saída): "))
            let idProduto = parseInt(prompt("Insira o ID do produto a ser movimentado: "))
            registrarEntradaSaida(idProduto, quantidadeProduto);
            break

        case 6 :
            let idExcluido = parseInt(prompt("Insira o ID do produto a ser excluido: "))
            excluir(idExcluido)
            break;

        case 0 :
            process.exit(0)
    }
}