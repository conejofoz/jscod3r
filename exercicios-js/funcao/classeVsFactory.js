class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}



const p1 = new Pessoa('João')
p1.falar()




/**
 * USANDO ARROW FUNCTION NÃO PRECISA USAR O THIS PARA ACESSAR O ATRIBUTO NOME 
 */
const criarPessoa = nome =>{
    return{
        falar: ()=> console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Maria')
p2.falar()