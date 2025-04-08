const prompt = require('prompt-sync')();
//iteração sobre nossoss vetores (arrays/listas)

//vetor         0       1           2       3      
let frutas = ["maça", "banana", "abacaxi", "uva"]
//para iterar sobre um vetor, utilizamos o for
for (let x = 0; x < frutas.length; x++) {
    console.log(`a fruta da posição x ${x} é ${frutas[x]}`);

}
console.log('fim');

// for of
let listaNomes = ["pele", 'maradona', 'messi', 'cr7'];
for (let jogador of listaNomes) {
    console.log(`o jogador é ${jogador}`);

}
let soma = 0
let listanum = [1, 2, 3, 4];
for (let numero of listanum) {
    console.log(`o jogador é ${numero}`);
    soma += numero
}
console.log(soma);

// verificando se um elemento existe em um arrey usando includes()
let vogais = ['a', 'e', 'i', 'o', 'u'];
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', "l", 'm', 'n', 'p']
let numbers = ['0','1',"2",'3','4','5','6',"7",'8',"9",'10']
let letraParaVerificar = prompt("digite uma letra: ");
if (vogais.includes(letraParaVerificar.toLowerCase())) {
    console.log(`a letra ${letraParaVerificar} é uma vogal`);

} else if (consoantes.includes(letraParaVerificar.toLowerCase)) {

    console.log(`o caracter ${letraParaVerificar} não é uma consoante`)
} else if (numbers.includes(letraParaVerificar)) {

    console.log(`o caracter ${letraParaVerificar} é um numero`)
} else {
    console.log(`${letraParaVerificar} é um caracter especial`);
}


let Listafrutas = ["maça", "banana", "abacaxi", "uva"]
for(const [pos, fruta] of Listafrutas.entries()) {
    console.log(fruta, pos);
}

//separando uma string utilizando o split()
let produtos = 'celular, mouse, teclado';
let listaProdutos = produtos.split(',');
console.log(listaProdutos);
console.log(produtos);

//acessando um caracter de uma string
//            01234
let escola = "Senai";
console.log(escola[0]);

for (let letra of escola) {
    console.log(letra);
}