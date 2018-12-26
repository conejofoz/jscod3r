var numero = 1

{
    var numero = 2;
    console.log("dentro: ", numero)
}
console.log("fora", numero)

//imprime o numero 2 duas vezes porque o var só tem escopo de funcão
//não importa se está dentro de um bloco ... continua sendo a mesma variavel