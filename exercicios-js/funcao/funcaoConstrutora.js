/**
 * COMO SE FOSSE UMA CLASSE EM OUTRAS LINGUAGENS COMO JAVA POR EXEMPLO
 * LET DEIXA O ATRIBUTO PRIVADO
 * THIS DEIXA O METODO PUBLICO
*/
function carro(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0

    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }

        this.getVelocidadeAtual = function(){
            return velocidadeAtual
        }

    }
}

const uno = new carro()
uno.acelerar();
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())