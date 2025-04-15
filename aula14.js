const prompt = require('prompt-sync')();
function linha() {
    console.log('------------------------');
}
//função sem parametro e sem retorno
function cabecalho() {
    linha()
    console.log('SESI/SENAI');
    linha()

}
cabecalho();

function saudacao() {
    let nome = prompt('qual é o seu nome? ')

    console.log(`${nome} tenha um bom dia`);

}
saudacao()
saudacao()
saudacao()
//função com parametro e sem retorno
function cabecalhoEscola(nomeEscola) {
    linha()
    console.log(nomeEscola);
    linha()

}

cabecalhoEscola('dimineltron africano')
cabecalhoEscola('sesi')

function soma(nr1, nr2) {
    console.log(nr1 + nr2);

}
soma(5, 3)

function sabedoriaAvançada(parlmpar) {
    if (parlmpar % 2 == 0) {
        console.log("par");

    } else {
        console.log("impar");

    }

}
sabedoriaAvançada(10)
sabedoriaAvançada(15)


//com função com paremetros e retornos
function Media(num1, num2) {
    let resultado = (num1 + num2) / 2;
    return resultado;
}

let valor = Media(5, 8)

function FormatarData(dia, mes, ano) {
    return `${dia}/${mes}/${ano}`;
}

let data = FormatarData(3, 10, 25)
console.log(data);
let data2 = FormatarData(30, 11, 25)
console.log(data2);
let data3 = FormatarData(4, 8, 25)
console.log(data3);

function coresprim() {
    let cores = ['vermelho', 'amarelo', 'azul']
    for (cor of cores)
        console.log(cor);

}
coresprim()

function tabuada(n1) {
    for (let x = 1; x <= 10; x++) {
        console.log(`${n1 * x}`);

    }
}
tabuada(8)
tabuada(20)
tabuada(6)

function divisao(n1, n2) {
    return `${n1 / n2}`
}
let divisaoo = divisao(5, 10)
console.log(divisaoo);



function add(n1, n2) {
    console.log(n1 + n2);

}
function sub(n1, n2) {
    console.log(n1 - n2);

}
function mult(n1, n2) {
    console.log(n1 * n2);

}
function divi(n1, n2) {
    console.log(n1 / n2);

}
function elev(n1, n2) {
    console.log(n1 ** n2);

}

function calcular(nr1, nr2, op) {
    if (op == "+") {
        add(nr1, nr2);
    } else if (op == "-") {
        sub(nr1, nr2)
    } else if (op == "*") {
        mult(nr1, nr2)
    } else if (op == '/') {
        divi(nr1, nr2)
    } else if (op == '**') {
        elev(nr1, nr2)
    }
}
calcular(50, 50, "+")


function senhaAleatoria(qtdCaracteres) {
    let listaCaracteres = ['!', "a", 5, 'R', "$", '#']
    let senha = '';
    for (let x = 1; x <= qtdCaracteres; x++){
        let posSorteada = Math.floor(Math.random() * 6)
    senha += listaCaracteres[posSorteada];
        
    }
return senha
}
console.log(senhaAleatoria(50));
