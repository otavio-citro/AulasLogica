const prompt = require('prompt-sync')();

function abobrinha(metros){
    cm = metros * 100
    return cm
}
let algo = abobrinha(Number(prompt("quantos metros?")))
console.log(algo);
