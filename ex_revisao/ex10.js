const prompt = require('prompt-sync')();

function algo(n1, n2){
    for (let i = n1; i <= n2; i++){
        console.log(i);
        
    }
}
algo(Number(prompt("digite um numero: ")), Number(prompt("digite um numero: ")))