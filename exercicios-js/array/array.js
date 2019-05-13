console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8]=== undefined)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)




/**
 * METO SPLICE
 * TANTO REMOVE QUANTO ADICIONA ELEMENTOS NO ARRAY
 */
console.log('======================================================================')
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
aprovados.splice(1,1) //REMOVE CARLOS - APARTIR DO INDICE 1 REMOVA 1
console.log(aprovados)


aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,2, 'NOVOELEMENTO1', 'NOVOELEMENTO2') //REMOVE CARLOS - APARTIR DO INDICE 1 REMOVA 2 E ADICIONE OS NOVOS ELEMENTOS
console.log(aprovados)


aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,0, 'NOVOELEMENTO1', 'NOVOELEMENTO2') //NÃO REMOVE NENHUM INDICE - APARTIR DO INDICE 1 ADICIONE OS NOVOS ELEMENTOS
console.log(aprovados)