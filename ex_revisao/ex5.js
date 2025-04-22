const prompt = require('prompt-sync')();
let sexo = prompt("qual seu sexo (M/F) ")

if(sexo == "M") {
    console.log("masculino");
} else if (sexo == "F"){
    console.log("feminino");
    
} else {
    console.log("sexo invalido");
    
}