const prompt = require('prompt-sync')();
//inicialização da variavel; condição do for; incremento da variavel
for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);

}

//neste for iniciamos a partir do numero 5, ate o n° 50
// incrementando de 3 em 3 no contador
for (let numero = 5; numero <= 50; numero += 3) {
    console.log(numero);

}

//Utilizando o break para parar o for
for (let numero = 5; numero <= 500; numero += 3) {
    console.log(numero);
    if (contador == 50) {
        break;
    }
}

console.log("entragando os notebooks");
for (let num = 1; num <= 32; num++) {
    let nome = prompt(`quem é o n° ${num}: `)
    let presente = prompt(`O(A) ${nome} esta presente (S ou N)`)

    if (presente == 'S') {
        console.log(`pegar o notebook ${nr}`);
        console.log(`levar o notebook ate o(a)${nome}`);

    } else {
        console.log(`nao pegar o notebook ${num}`);

    }
}
//tabuada
let nr = 6
for (let contador = 1; contador <= 10; contador++) {
    console.log(`${nr} x ${contador} = ${nr * contador}`);

}