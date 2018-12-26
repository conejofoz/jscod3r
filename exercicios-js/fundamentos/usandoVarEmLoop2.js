const array = []

for(var i=0; i<10; i++){
    array.push(function(){
        console.log(i) // esse é um problema historico do javascript
    })
}

array[2]() //como o var não tem escopo de bloco vai imprimir o mesmo resultado para as duas chamadas da função... não respeitando
array[8]()