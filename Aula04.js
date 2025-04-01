const prompt = require('prompt-sync')();

//criando nossa primeira varialvel
//uma variavel serve para armazenar uma informação/valor
//O memoria crie um espaço com o nome curso e receba o valor "Desenvolvimento de sistemas"
var curso = "Desenvolvimento de sistemas";

console.log("curso"); //para imprimir uma variavel, nao se coloca entre aspas ""
console.log(curso); //jeito correto de usar uma variavel
console.log('curso', curso)

//criando e atribuindo valores a uma variavel
var idade = 16; //interira // integer
var temperatura = 24.5; //real // float
var nome = "robisclaiton"; //string

console.log("ola, ", nome, "voce tem", idade, "anos");
console.log("esta cursando",curso, "hoje faz", temperatura, "°c");

console.log("ola, " + nome + "voce tem, "+ idade+ "anos");
console.log("esta cursando, "+curso + "hoje faz, " + temperatura + "°c");

//temple string
//utilizo a crase ` ` para criar uma string
//para colocar variaveis dentro da string, utilizo ${variavel}
console.log(`ola, ${nome} voce tem ${idade} anos 
           esta cursando ${curso} hoje faz ${temperatura}°C`);


//declarando uma variavel logica/boolean/boleano (true/false)
var podedirigit = true;
var estachovendo = false;


//declarando uma variavel nula
var escola;

//exercicio
//nota invalido = nome completo, média, 9dade, var, valor$, nome-completo, true, console

let cidade = "Andradina";
var turma = "2° B";
const ano = 2025;

console.log(turma);
turma = "3°B" //reatribuindo o valor de uma variavel
console.log(turma);
//ano = 2006; //nao podemos reatribuir valaor auma constante


let _nome = "ayrton";
let _idade = 83;
let _peso = 86.3;

console.log(`${_nome} ${_idade} ${_peso}`);

//mostrando no console quais sao os tipos dos dados
console.log(typeof _nome, typeof _idade, typeof _peso)

//no prompt o computador espera o usuario digitar uma informação
//sempre quando recebemos uma informação de entrada ela vem sting
_nome = prompt('digite seu nome:');
_idade = prompt("digite sua idade");
_peso = prompt("digite seu peso");
console.log(`${_idade} ${_nome} ${_peso}`);

console.log(typeof _nome, typeof _idade, typeof _peso)

let numero01 = 1;
let numero02 = 2;

numero01 = prompt('digite o numero');
numero02 = prompt("digite o segundo numero");
let num3 = prompt("digite seu 3° numero");
console.log (numero01 + numero02 + num3)

console.log (typeof numero01);//
numero01 = Number(numero01);
console.log (typeof numero01);

//Receber uma informação ja convertendo seu tipo de dados
let nr1 = Number(prompt("digite o primeiro n°")); //number
let nr2 = Number(prompt("digite o segundo n°")); //number
console.log (nr1 + nr2)

//convertendo os dados de uma variavel
nr1 = "100.14"; //string
nr1 = Number("100.14"); //convertendo string para Number
nr1 = parseInt("100.14"); //convertendo string para integer
nr1 = parseFloat("100"); //convertendo string para float 100.00
nr1 = String(100.14); //convertendo um Number para string

_nome = prompt('digite seu nome:');
_idade = parseInt(prompt("digite sua idade"));
_peso = parseFloat(prompt("digite seu peso"));
console.log(`${_idade} ${_nome} ${_peso}`);


//exercicios variaveis

let nomeAluno = "Senna";
let altura = 180;
let anoAtual = 2025;
console.log(`${nomeAluno} ${altura} ${anoAtual}`)

let nomeProfessor = prompt("digite o nome do professor");
let materia = prompt("digite a materia");
let anoIngresso = parseInt(prompt("ano de ingresso"));

nomeAluno = prompt("digite o nome");
escola = prompt("digite a escola");
anoAtual = parseInt(prompt("digite o ano atual"));
