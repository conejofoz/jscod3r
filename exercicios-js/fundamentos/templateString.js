console.log('template string javascript')
console.log('==========================================')
console.log('concatenação')
const nome = 'Silvio Coelho'

const template = `
    Olá
    ${nome}!`

console.log(template)   


console.log('---------------------------------------')
console.log('expressões')
console.log(`1 + 1 = ${1 + 1}`)


console.log('---------------------------------------')
console.log('funções')
const up = texto => texto.toUpperCase()
console.log(`E aí....${up('cuidado')}!`)