const prompt = require('prompt-sync')();

let preco = Number(prompt("qual o preço?"));

const desconto = 5 / 100 * preco
console.log(desconto.toFixed(2));
