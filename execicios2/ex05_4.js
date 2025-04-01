const prompt = require('prompt-sync')();
let inicio = Number(prompt("qual o valor do n°"))
let fim = Number(prompt("qual o valor do n°"))
let passo = Number(prompt("qual o valor do n°"))

for(let x = inicio; x <= fim; x += passo) {
    console.log(`o resultado é ${x}`);
    
}