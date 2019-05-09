/**
 * CONVERTER UM OBJETO PARA O FORMATO TEXTUAL JSON
 */
const produto = {nome: 'Azzaro edt vap 100 ml', preco: 17.55, quantidade:12}
console.log(JSON.stringify(produto))



/**
 * CONVERTENTO UM FORMATO TEXTUAL JSON EM OBJETO
 * ATRIBUTOS EM JSON DEVEM SER OBRIGATORIAMENTE ESTAR DENTRO DE ASPAS DUPLAS
 * POR ISSO A STRING PRINCIPAL DEVE SER ENVOLVIDA EM ASPAS SIMPLES
 */
const prod = '{"nome":"Azzaro edt vap 100 ml","preco":17.55,"quantidade":12}'
console.log(JSON.parse(prod))