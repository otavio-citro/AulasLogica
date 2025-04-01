const prompt = require('prompt-sync')();
let altura = Number(prompt("qual a altura?"))
let largura = Number(prompt("qual a largura da parede?"))

let area = altura * largura
let tinta = area /2

console.log(`a area final é ${area} e a tinta por m² é ${tinta}`);