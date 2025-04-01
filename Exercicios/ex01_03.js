const prompt = require('prompt-sync')();

let numero = parseInt(prompt("qual o numero?"))
let dobro = numero * 2
let triplo = numero * 3
let cubo = numero **3
console.log(`se o numero for ${numero} o seu dobro é ${dobro} seu triplo é ${triplo} e o valor ao cubo é ${cubo}`)