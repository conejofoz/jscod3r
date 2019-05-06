/**
 * CRIADO UM OBJETO E ATRIBUIDO A UMA CONSTANTE OS ATRIBUTOS DESSE OBJETO PODERM SER ALTERADOS
 * MESMO ELE SENDO UMA CONSTANTE. AGORA O OBJETO NÃO PODE SER ALTERADO
 * PARA IMPEDIR QUE OS ATRIBUTOS CONTINUEM SENDO ALTERADOS USA-SE O RECURSO DE CONGELAMENTO (FREEZE)
 * 
 */


 const pessoa = { nome: 'joão'}

 pessoa.nome = 'maria'

 console.log(pessoa)

 Object.freeze(pessoa)

 pessoa.nome = 'adão'

 console.log(pessoa) //não mudou continua maria



 /**
  * JÁ CRIAR O OBJETO CONGELADO 
  */
  const pessoaConstante = Object.freeze({nome: 'joao'})
