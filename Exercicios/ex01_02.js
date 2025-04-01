const prompt = require('prompt-sync')();

let numero = parseInt(prompt("qual o numero?"))
let antecessor = numero - 1
let sucessor = numero + 1
console.log(`se o numero for ${numero} seu antecessor sera ${antecessor} e seu sucessor sera ${sucessor}`)