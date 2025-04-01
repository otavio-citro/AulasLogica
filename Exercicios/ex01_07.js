const prompt = require('prompt-sync')();

let carteira = parseFloat(prompt("quanto tens na carteira"))
const dolar = parseFloat(5.78)
let resultado = parseFloat(carteira / dolar)
console.log(resultado.toFixed(2));
