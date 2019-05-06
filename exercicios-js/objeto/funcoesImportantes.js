const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso:13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable:true, //pode ser listado
    writable:false, //pode ser alterado
    value:'01/01/2019' //valor
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))




/**
 * Object.assign (ECMAScript 2015)
 * UMA CONCATENAÇÃO DE OBJETOS
 * PEGA OS PARAMETROS A PARTIR DO PRIMENTO E JOGA DENTRO DO PRIMEIRO
 * OBS:SE TIVER DOIS OBJETOS COM O MESMO PARAMETRO PREVALECE O ULTIMO
*/ 
const destino = {a:1}
const obj1 = { b:2}
const obj2 = { c:3, a:4}
const objeto = Object.assign(destino, obj1, obj2)
console.log(objeto)



/**
 * CONGELAR O OBJETO PARA IMEDIR QUE SEUS ATRIBUTOS SEJAM ALTERADOS
*/
Object.freeze(objeto)
objeto.c = 1234 //não vai mudar pq está congelado
console.log(objeto)