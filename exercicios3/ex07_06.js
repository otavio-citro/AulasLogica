const prompt = require('prompt-sync')();

let palavra = prompt("digite uma frase: ")
let vogais = ['a', "e", "i", "O", "u" ]

for(letra of palavra){

    if (vogais.includes(letra.toLowerCase())){
        console.log(letra);
        
    }
}

