function calcularPrecoComDesconto(precoOriginal : number, percentualDesconto : number) : number {
    return precoOriginal - (precoOriginal * (percentualDesconto / 100))
}