const prompt = require('prompt-sync')();
let qtdedeimpares = 0
let qtdedepares = 0
let totaldepar = 0
let totalimpar = 0
for(let x = 1; x <= 5; x++){
    let nm = Number(prompt("digite o valor: "))
    if(nm % 2 == 0) {
        totaldepar += nm;
        qtdedepares++
    } else {
        totalimpar += nm; 
        totalimpar++
    }
}
console.log(`quantidade de par ${qtdedepares}`);
console.log(`quantidade de impar ${qtdedeimpares}`);
console.log(`a soma total de par ${totaldepar}`);
console.log(`a soma total de impar ${totalimpar}`);
