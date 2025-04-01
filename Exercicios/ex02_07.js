const prompt = require('prompt-sync')();

let velocidade = Number(prompt("qual a velocidade do carro?"))
if (velocidade > 80) {
    console.log(`multado e o custo da multa seria ${custo} R$`)
    let custo = (velocidade - 80) * 7
} else {
    console.log("nao multado");
}
let multa = Number(prompt("qual o valor da multa?"))
