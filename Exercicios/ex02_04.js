const prompt = require('prompt-sync')();
let numero = Number(prompt("qual o numero?"))
if (numero * 2 >= 1) {
    console.log("positivo");
} else {
    console.log("negativo");
}