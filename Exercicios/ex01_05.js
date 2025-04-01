const prompt = require('prompt-sync')();

let metros = Number(prompt("quantos metros?"))
let centimetros = metros * 100
let km = metros / 1000
let milimetros = metros * 1000
console.log(`se os metros forem ${metros} os cm seram ${centimetros} o km sera ${km} e os mm seram ${milimetros}`);

