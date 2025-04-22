const prompt = require('prompt-sync')();

function impar() {
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 1) {
            console.log(i);
            
        }
    }
}

impar()