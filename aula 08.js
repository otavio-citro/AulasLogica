const prompt = require('prompt-sync')();
//estrutura condicional composta e encadeada
//operadores logicos
//&& - e
//|| - ou
//! - nao

let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2); //False pq 2 condicao é f
console.log(a > 1 && b < 2); //false pq apenas 1 condicao é v
console.log(a > 1 && b < 4); //true pq 2 condições é v

console.log(a > 2 || b < 2); //False pq 2 condicao é f
console.log(a > 1 || b < 2); //verdadeira pq 1 das condições é v
console.log(a > 1 || b < 4); //verdadeira pq 2 das condições é v

let altura = Number(prompt("digite sua altura:"))
let peso = Number(prompt("digite seu peso:"))
let IMC = peso / (altura ** 2)

if (IMC < 18.5) {
    console.log("vc esta abaixo do peso");
} else if (IMC > 18.6 && IMC < 24.9) {
    console.log("vc esta o peso ideal");
} else if (IMC > 25 && IMC < 29.9) {
    console.log("vc esta no sobrepeso");
} else if (IMC > 30) {
    console.log("vc esta na obesidade");
}
console.log(IMC);

let lado1 = Number(prompt("digite o lado 1 = "))
let lado2 = Number(prompt("digite o lado 2 = "))
let lado3 = Number(prompt("digite o lado 3 = "))
if (lado1 == lado2 && lado1 == lado3 && lado3 == lado2) {
    console.log("o triangulo é equilátero");
} else if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2) {
    console.log("escaleno");
} else {
    console.log("isoseles");
}


let vendasTotal = Number(prompt("qual foi a venda total do vendedor?"))
let horasSemanais = Number(prompt("quantas horas trabalhou?"))
if (vendasTotal >= 5000 || horasSemanais >= 40) {
    console.log("tem direito ao bonus");
} else {
    console.log("nao tem direito ao bonus");
}

let letra = prompt('qual a letra?')
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log("vogal");
} else {
    console.log("consoante");
}

