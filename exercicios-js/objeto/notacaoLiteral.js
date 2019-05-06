/**
 *  SE O NOME DO ATRIBUTO DO OBJETO FOR O MESMO NOME DA VARIAVEL ATRIBUIDA A ELE
 * NÃO É MAIS NECESSÃRIO COLOCAR O NOME
 */


 const a = 1
 const b = 2
 const c = 3

 const obj1 = {a: a, b: b, c:c} // antes
 const obj2 = {a, b, c} // agora




 /**
  * OUTRA FORMA DE ATRIBUIR VALORES A UM OBJETO USANDO COLCHETES
  */

const nomeAtributo = 'nota'
const valorAtributo = 7.87
const obj3 = {}

obj3[nomeAtributo] = valorAtributo
console.log(obj3)



/**
 * A MESMA COISA SENDO MAIS DIRETO
 */
const obj4 = {[nomeAtributo]: valorAtributo}





/**
 * FORMAS DE ADICIONAR FUNÇÕES EM UM OBJETO
 */


 const obj5 = {
     funcao1: function(){ //forma antiga

     }, 
     funcao2(){ //es2015

     }
 }
