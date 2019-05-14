console.clear()
const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
console.log(pilotos)


/**
 * RETIRA O ÚLTIMO ELEMENTO DO ARRAY
 */
pilotos.pop()
console.log(pilotos)


/**
 * ADICIONA UM ELEMENTO NO FINAL DO ARRAY
 */
pilotos.push('Verstappen')
console.log(pilotos)


/**
 * RETIRA O PRIMEIRO ELEMENTO DO ARRAY
 */
pilotos.shift()
console.log(pilotos)




 /**
  * ADICIONA UM ELEMENTO NO INICIO DO ARRAY
  */
pilotos.unshift('Silvião')
console.log(pilotos)


/**
 * ADICIONAR EM UMA DETERMINADA POSIÇÃO E NÃO REMOVER
 * NO CASO FOI ADICIONADO NA POSIÇÃO 2
 */
pilotos.splice(2,0, 'Xunda', 'Dunha')
console.log(pilotos)


/**
 * REMOVER EM UMA DETERMINADA POSIÇÃO E A QUANTIDADE DE ELEMENTOS
 * NO CASO FOI REMOVIDO A PARTIR DA POSIÇÃO TRES UM ELEMENTO
 */
pilotos.splice(3,1)
console.log(pilotos)



/**
 * CRIAR UM NOVO ARRAY A PARTIR DE UMA DETERMINADA POSIÇÃO DO ARRAY
 */
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)
/**
 * CRIAR UM NOVO ARRAY A PARTIR DE UMA DETERMINADA POSIÇÃO E 
 * DEFININDO O NUMERO DE ELEMENTOS QUE SERÃO COPIADOS SEM INCLUIR O ÚLTIMO
 */
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)