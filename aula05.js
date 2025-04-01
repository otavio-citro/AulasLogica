const prompt = require('prompt-sync')();

//operações com variaveis

let num1 = Number(prompt("qual é o primeiro numero"));
let num2 = Number(prompt("qual o segundo numero?"));
let soma = num1 + num2
console.log(soma);

let subtracao = num1 - num2
console.log(subtracao)

let multiplicacao = num1 * num2
console.log(multiplicacao);

let divisao = num1 / num2
console.log(divisao);

let exponencial = num1 ** num2
console.log(exponencial)

let precoCelular = Number(prompt("qual o preço do celular"))
let desconto = Number(prompt("qual o desconto?"))
precoCelular = precoCelular - desconto
console.log(precoCelular)

var numero = 4 / 2
numero = numero ** 2
numero = numero * (50-20)
console.log(`o valor é ${numero}`)

let Numero = Number(prompt("qual o numero"))
let dobro = Numero * 2
let metade = Numero / 2
console.log(`o dobro do ${Numero} é ${dobro} e a sua metade é ${metade}`);

let horas = Number(prompt("quantas horas de trabalho?"))
horas = horas *100
horas = horas *15
console.log(horas)