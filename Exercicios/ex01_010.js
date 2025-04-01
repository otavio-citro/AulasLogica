const prompt = require('prompt-sync')();

let dias = Number(prompt("quantos dias o carro foi pra oficina?"))
let km = Number(prompt("quantos km esse carro percorreu?"))

let carrodias = dias * 60
let kmcarro = parseFloat(km * 0.15)

let precoTotal = parseFloat(carrodias + kmcarro)

console.log(`a quantidade de dias que o carro foi alugado foi ${dias} e a quantidade de km percorridos forao ${km}, sendo o preço do carro por dias ${carrodias} e o preço por km ${kmcarro}, no final tendo um preço total de ${precoTotal} R$`);
