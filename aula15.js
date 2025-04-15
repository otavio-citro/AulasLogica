//escopo de variaveis
//variavel global pode ser acessada em qualquer lugar
//variavel local so pode ser acessada dentro do bloco

//utilizando variaveis local
function nomeEscola(){
    let escola = "Sesi";
    console.log(`valor fora da função ${escola}`);
    
    
}

let escola = "senai"
console.log(`Valor fora da função ${escola}`);
nomeEscola();
console.log(`Valor após da função ${escola}`);


//utilizando variaveis global
var escola2 = "senai"
function nomeEscola2(){
     escola2 = "Sesi";
    console.log(`valor fora da função ${escola2}`);
    
    
}

console.log(`Valor fora da função ${escola2}`);
nomeEscola2();
console.log(`Valor após da função ${escola2}`);



//Documentando funções com JSDoc
/**
 * 
 * @param {number} a - primeiro numero
 * @param {number} b - segundo numero
 * @returns {number} - soma dos dois numeros
 */
function soma(a, b) {
    return a + b;
}
soma(2, 4);

