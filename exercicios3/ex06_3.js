const prompt = require('prompt-sync')();
let comida = []
for (let x = 1; x <= 6; x++){
    comida.push(prompt('digite 6 comidas que voce gosta: '))
    console.log(comida);
    
}
console.log(comida[0]);
console.log(comida[4]);
comida[6] = "lasanha"
console.log(comida);
comida = [...comida, "salmao"]
console.log(comida);
comida.splice(4, 0, "atum")
console.log(comida);
comida.shift()
console.log(comida);
comida.pop()
console.log(comida);
console.log(comida.slice(0,3));
console.log(comida.slice(-4));
console.log(comida);
comida.reverse()
console.log(comida);

