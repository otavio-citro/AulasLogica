const prompt = require('prompt-sync')();

let filmes = ['vf1','vf2','vf3','vf4','vf5','vf6','vf7',]
console.log(filmes[0]);
console.log(filmes[4]);
filmes[6] = "vf8"
console.log(filmes);
filmes = [...filmes, "vf9"]
console.log(filmes);
filmes.splice(4, 0, "vf10")
console.log(filmes);
filmes.shift()
console.log(filmes);
filmes.pop()
console.log(filmes);
console.log(filmes.slice(0,3));
console.log(filmes.slice(-4));
console.log(filmes.length);
filmes.reverse()
console.log(filmes);
