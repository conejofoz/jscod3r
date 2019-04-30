const fabricantes = ["Mercedes", "Audi", "BMW"]

/*
primeiro parâmetro é o elemento do array
segundo parametro é o índice do array
*/
function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)



fabricantes.forEach(function (elementoArray){
    console.log(elementoArray)
})



fabricantes.forEach((elementoArray) => console.log(elementoArray))