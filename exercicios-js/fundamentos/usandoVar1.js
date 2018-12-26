//uma variavel var em javascript é de escopo global mesmo declarada dentro de um bloco de código

//a não ser que ela seja declarada dentro de uma função. daí ela tem o escopo de função

{{{var sera = "será???"}}}

console.log(sera)




//
function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local) // vai dar erro