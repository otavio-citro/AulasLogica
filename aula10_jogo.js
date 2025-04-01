const prompt = require('prompt-sync')();

console.log("=========================================");
console.log("🤔        JOGO DA ADIVINHAÇÃO         🤔");
console.log("=========================================");

let nrSecreto = Math.floor(Math.random() * 100) + 1;
let acertou = false;
let tentativas = 0


while (acertou == false) {
    let chute = Number(prompt('digite um numero entre 1 e 100: '))
    tentativas++
    if (chute == nrSecreto) {
        console.log(`parabens voce acertou!!!`);
        acertou = true;
    } else if (chute > nrSecreto) {
        console.log(`voce chutou ${chute}, tente um numero menor`);

    } else {
        console.log(`voce chutou ${chute}, tente um numero maior`);

    }

}
console.log('fim');
console.log(`voce tentou em ${tentativas} tentativas`);
