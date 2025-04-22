const prompt = require('prompt-sync')();

const a = parseFloat(prompt('qual valor da divida?' ));
parcelas = parseInt(prompt('quantas parcelas? '));

if (parcelas == 1) {
    console.log(`juros: 0%
    valor da parcela: ${a}
    valor com juros: ${a}`);
    
} else if (parcelas == 3) {
    console.log(`juros: 10%
        valor da parcela: ${(a * 0.10 + a) / 3} 
        valor com juros: ${(a * 0.10 + a) / 3}`);
    } else if (parcelas == 6) {
        console.log(`juros: 15%
        valor da parcela: ${(a * 0.15 + a) / 6} 
        valor com juros: ${(a * 0.15 + a) / 6}`);
    } else if (parcelas == 9) {
        console.log(`juros: 20%
        valor da parcela: ${(a * 0.20 + a) / 9} 
        valor com juros: ${(a * 0.20 + a) / 9}`);
    } else if (parcelas == 12) {
        console.log(`juros: 25%
        valor da parcela: ${(a * 0.25 + a) / 12} 
        valor com juros: ${(a * 0.25 + a) / 12}`);
    }
