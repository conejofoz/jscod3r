const valor = 'Global' //vai usar a constante valor de onde a minhaFuncao foi declarada e não onde ela foi chamada

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local' //comentario superior
    minhaFuncao()
}

exec()