//armazenando uma função em uma variavel
const imprimirSoma = function(a, b){
   console.log(a + b)
}

imprimirSoma(5,5)



//armazenando uma variavel em uma funcao arrow
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implicito
const subtracao = (a,b) => a-b
console.log(subtracao(5,1))


//reduzindo ainda mais a funcao
const imprimirTexto = a => console.log(a)

imprimirTexto("Olá que tal?")
