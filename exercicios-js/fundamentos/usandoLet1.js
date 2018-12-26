//let tem escopo global, de função e de bloco.. é essa a diferença com o var que só tem escopo de função e global

var numero = 1
{
    let numero = 2
    console.log("dentro: ", numero)
}
console.log("fora: ", numero)