/**
 * EXEMPLO DE CALLBACK - FILTRANDO DETERMINADOS DADOS DENTRO DE UM ARRAY
 */


const notas = [7.2, 6.5, 5.2, 8.9, 9.0]




/*EXEMPLO DO USO TRADICIONAL */
notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)




/* CALLBACK USANDO FUNÇÃO ANÔNIMA */
notasBaixas2 = notas.filter(function(nota){
    return nota < 7.0
})
console.log(notasBaixas2)




/* CALLBACK USANDO ARROW FUNCTION */
const notasBaixas3 = notas.filter((nota) => {return nota < 7})

/* QUANDO TEM SÓ UM PARAMETRO PODE-SE ELIMINAR OS PARENTESES, 
E QUANDO A FUNÇÃO SÓ TEM UMA LINHA PODE-SE ELIMINAR AS CHAVES E A 
PALAVRA RETURN. ISSO SE CHAMA RETORNO IMPLÍCITO */
const notasBaixas4 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
console.log(notasBaixas4)
