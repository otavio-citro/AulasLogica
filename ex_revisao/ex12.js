const prompt = require('prompt-sync')();
let numeros = [1, 22, 3, 44, 5, 6, 76, 8, 93, 10]
let pares  = []
let impares = []

for (num of numeros) {
    impares.push(num)
    if (num % 2 == 0) {
        pares.push(num)
    }
}
console.log('pares', pares);
console.log('impares', impares);
