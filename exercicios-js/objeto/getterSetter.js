/**
 * É SÓ UMA CONVENÇÃO POIS NO JAVASCRIPT NÃO EXISTE O CONCEITO DE ATRIBUTO PRIVADO
 * OBS: O JAVASCRIPT NÃO ACEITA SOBRECARGA DE MÉTODOS, DOIS MÉTODOS COM O MESMO NOME SÓ MUDANDO ASSINATURA
 * SOMENTE NESSE EXEMPLO DE GUETTERS E SETTERS ONDE O GET NÃO TEM PARAMETROS E O SET TEM E OS DOIS METODOS
 * TEM O MESMO NOME
 */

const sequencia = {
    _valor: 1, //convenção que diz que o atributo é privado, mais não é obrigatório
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}


console.log(sequencia.valor, sequencia.valor)
sequencia.valor = -500
console.log(sequencia.valor, sequencia.valor)