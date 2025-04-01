const prompt = require('prompt-sync')();
let ano = Number(prompt("ano de nascimento"))
let idade = 2025 - ano
if (idade > 18) {
    console.log("maior de idade");
} else {
    console.log("menor de idade");
}