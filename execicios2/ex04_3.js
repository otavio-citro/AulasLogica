const prompt = require('prompt-sync')();
let total = 0
let qtdedepares = 0
let qtdedeimpares = 0
while (true) {
    let numero = Number(prompt("digite o valor do produto (0 para encerrar): "))

    if (numero == 0) {
        break;
    } else {
        total = numero + total
    } if (numero % 2 == 0) {
        qtdedepares++
    } else {
        qtdedeimpares++
    }
}
console.log(`a quantidade de impares é: ${qtdedeimpares}`);
console.log(`a quantidade de pares é: ${qtdedepares}`);
