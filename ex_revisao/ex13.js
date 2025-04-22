const prompt = require('prompt-sync')();

for (let i = 1; i <= 4; i++) {
    a = Number(prompt('qual a nota? '))
}
media = nota / 4;
console.log(`a media é ${media}`);

if (media >= 7) {
    console.log("aprovado");
} else {
    console.log("reprovado");
}

