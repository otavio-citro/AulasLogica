const prompt = require('prompt-sync')();

let numero = parseInt(prompt("qual o primeiro numero?"))
let numero2 = parseInt(prompt("qual o segundo numero?"))
let total = numero + numero2
console.log(`a soma do ${numero} + o ${numero2} é ${total}`)