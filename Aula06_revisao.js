const prompt = require('prompt-sync')();

//declarando variavel sem dados (undefined)
let nota;
//declarando variavel com informação
let nome = "carlos";

//reatribuindo um valor a variavel mome
nome = "roberto";
nota = 8.5;

let sobronome = prompt("digite seu sobrenome: ")
let nota1 = Number(prompt("digite a nota da primeira prova: "));
let nota2 = Number(prompt("digite a nota da segunda prova: "));

//processamento dos dados
let media = (nota1 + nota2) / 2;
let nomeCompleto = nome + ' ' + sobronome;
let nomeCompleto2 = `${nome} ${sobronome}`;
let idade = prompt("digite sua idade");
let idadeNumero = parseInt(idade);

//saida dos dados
console.log("---relatorio final---");
console.log(`o seu nome completo é ${nomeCompleto} \n sua idade é ${idade} \n sua media final é ${media}`);

let n = 0;  //0
n= 0 + 1    //1
n = n + 1   //2
n = n + 1   //3
n += 1;     //4
n++;        //5
n += 3      //8
n--         //7
n = - 1;    //6
n -= 2;     //4
