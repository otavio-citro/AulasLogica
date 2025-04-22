const prompt = require('prompt-sync')();
let altura = Number(prompt("digite sua altura: "))
let sexo = Number(prompt("digite seu sexo(M/F): "))
let M = (72.7 * altura) - 58
let F = (62.1 * altura) - 44.7
if (sexo == "M") {
    console.log(M);
} else if (sexo == "F") {
    console.log(F);

} else {
    console.log("sexo invalido");

}