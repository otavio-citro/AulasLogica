const prompt = require('prompt-sync')();
let ganhoHoras = Number(prompt("digite o ganho por horas: "))
let horasTrabalhadas = Number(prompt("digite as horas trabalhadas: "))
let salario = ganhoHoras * horasTrabalhadas
let impostoRenda = salario * 0.11
let INSS = salario * 0.08
let sindicato = salario * 0.05
let salarioLiquido = salario * 0.24
console.log(salario);
console.log(impostoRenda);
console.log(INSS);
console.log(sindicato);
console.log(salarioLiquido);
