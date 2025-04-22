const prompt = require('prompt-sync')();

function positivo(n1) {
    if (n1 >= 0) {
        console.log("positivo");
        
    } else {
        console.log("negativo");
        
    }
}

positivo(10)