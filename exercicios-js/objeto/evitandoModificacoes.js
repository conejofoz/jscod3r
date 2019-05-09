/**
 * Object.preventExtensions
 * NÃO PERMITE ADICIONAR NOVOS ATRIBUTOS NO OBJETO
 * PERMITE APAGAR ATRIBUTOS
 * PERMITE ALTERAR O VALOR DOS ATRIBUTOS
 */


 const produto = Object.preventExtensions({
     nome:'perfume', preco:1.99, tag:'promoção'
 })
 console.log('É estensivel: ', Object.isExtensible(produto))






 produto.nome = 'Sabão'
 produto.descricao = 'Sabão crácrá'
 delete produto.tag
 console.log(produto)
 /**------------------------------------------------------------------------------------------------------------------------------------------ */


 /**
  * Object.seal
  * NÃO PERMITE EXCLUIR ATRIBUTOS
  * NÃO PERMITE ADICIONAR ATRIBUTOS
  * PERMITE ALTERAR ATRIBUTOS
  */
 const pessoa = {nome : 'Tadeu', idade:35}
 Object.seal(pessoa)
 console.log('Está selado?: ', Object.isSealed(pessoa))
 pessoa.sobrenome = 'Silva'
 delete pessoa.nome
 pessoa.idade = 29
 console.log(pessoa)