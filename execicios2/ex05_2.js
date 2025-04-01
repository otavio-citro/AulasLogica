const prompt = require('prompt-sync')();

for(let megaSena = 1 ; megaSena <= 6; megaSena++ ) {
    let nrSecreto = Math.floor(Math.random() * 60) + 1;
    console.log(`${nrSecreto}`);
    
}