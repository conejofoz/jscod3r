/**
 * FUNÇÃO FACTORY COM PASSAGEM DE PARÂMETROS
 * NESTE CASO OS ATRIBUTOS NÃO FORAM PASSADOS NO FORMATO CHAVE VALOR PORQUE TEM O MESMO NOME
 * NESE CASO PODE SER OMITIDO
 */
function criarProduto(nome, valor){
    return {
        nome,
        valor,
        desconto : 0.1
    }
}


console.log(criarProduto('AZZARO EDT VAP 100 ML', 17.50))
console.log(criarProduto('GABRIELA SABATINE EDT VAP 100 ML', 18.00))
