const prompt = require('prompt-sync')();

let vendeu = Number(prompt("quanto ele vendeu"))
if (vendeu > 5000) {
    let comissao1 = 5 / 100 * vendeu
    console.log(`sua comissao é de ${comissao1}`);
}
else {
    let comissao2 = 3 / 100 * vendeu
    console.log(`sua comissao é de ${comissao2}`);
}