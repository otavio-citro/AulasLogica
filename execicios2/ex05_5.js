const prompt = require('prompt-sync')();

let somaIdadeM = 0;
let somaIdadeF = 0;
qtdeM = 0
qtdeF = 0

for (let x = 1; x <= 10; x++) {
    let idade = Number(prompt("digite sua idade: "))
    let sexo = prompt("qual seu sexo (M/F) ")

    if(sexo == "M") {
        qtdeM++
        somaIdadeM =+ idade;
    } else if (sexo == "F") {
        qtdeF++
        somaIdadeF += idade;
    }
}
console.log(`a media do sexo masculino é de ${somaIdadeM / qtdeM}`);
console.log(`a media do sexo feminino é de ${somaIdadeF / qtdeF}`);
console.log(`a media do grupo é de ${(somaIdadeF + somaIdadeM) / 10}`);
