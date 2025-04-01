const prompt = require('prompt-sync')();
let nota = parseInt(prompt("qual a primeira nota?"))
let nota2 = parseInt(prompt("qual a segunda nota?"))
let media = (nota + nota2) / 2
if (media >= 7) {
    console.log("passou");
} else {
    console.log("nao passou");
}