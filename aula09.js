const prompt = require('prompt-sync')();
//estruturas condicionais aninhadas
//switch case

let valorCompra = 120;
let clienteVIP = true;
if (valorCompra >= 100) {
    if (clienteVIP == true) {
        console.log(`voce ganhou r$${valorCompra * 0.1}`);
    } else {
        let desconto = valorCompra * 5 / 100;
        console.log(`voce ganhou R$ ${desconto} de desconto`);

    }
} else {
    let restante = 100 - valorCompra;
    console.log(`compre mais R$${restante} e ganhe desconto`);

}

let idade = Number(prompt("digite sua idade"))
if (idade < 16) {
    console.log("nao pode votar");
} else {
    if (idade >= 18 && idade <= 70) {
        console.log("obrigatorio");
    } else {
        if (idade >= 16 || idade < 18 || idade > 70) {
            console.log("facutativo");
        }
    }
}

let n1 = Number(prompt("digite o 1° numero: "))
let n2 = Number(prompt("digite o 2° numero"))
let op = prompt("digite o operado (+-/* **): ")
switch (op) {
    case "+":
        console.log(n1 + n2);
        break;
    case "-":
        console.log(n1 - n2);

        break;
    case "/":
        console.log(n1 / n2);
        break;
    case "*":
        console.log(n1 * n2);
        break;
    case "**":
        console.log(n1 ** n2);
        break;
    default:
        console.log("operador invalido");

}



let dia = (prompt("digite um dia de 1 a 7: "))
switch (dia) {
    case "1":
        console.log("domingo");
        break
    case "2":
        console.log("segunda");
        break
    case "3":
        console.log("terça");
        break
    case "4":
        console.log("quarta");
        break
    case "5":
        console.log("quinta");
        break
    case '6':
        console.log("sexta");
        break;
    case '7':
        console.log("sabado");
        break;
    default:
        console.log("digite um numero de 1 a 7");
        break;

}

let anoAtual = Number(prompt("digite o ano atual: "))
let nascimento = Number(prompt("digite o ano de nascimento: "))
let idade1 = anoAtual - nascimento
if (idade1 <= 10) {
    console.log("criança");

} else {
    if (idade1 >= 11 && idade1 <= 17) {
        console.log("adolescente");
    } else {
        if (idade1 >= 18 && idade1 <= 59) {
            console.log("adulto");
        } else {
            console.log("idoso");
        }
    }
}
console.log(idade1); 7


let mes = (prompt("digite o mês: "))
switch (mes) {
    case "1":
        console.log("janeiro");
        break
    case "2":
        console.log("fevereiro");
        break
    case "3":
        console.log("março");
        break
    case "4":
        console.log("abril");
        break
    case "5":
        console.log("maio");
        break
    case '6':
        console.log("junho");
        break;
    case '7':
        console.log("julho");
        break;
    case "8":
        console.log("agosto");
        break
    case "9":
        console.log("setembro");
        break
    case "10":
        console.log("outubro");
        break
    case "11":
        console.log("novembro");
        break
    case "12":
        console.log("dezembro");
    default:
        console.log("digite um numero de 1 a 12");


}


let Mes = prompt("digite o nome de um mês: ")
switch (Mes) {
    case "janeiro":
        console.log("31");
        break
    case "fevereiro":
        console.log("28");
        break
    case "março":
        console.log("31");
        break
    case "abril":
        console.log("30");
        break
    case "maio":
        console.log("31");
        break
    case 'junho':
        console.log("30");
        break;
    case 'julho':
        console.log("31");
        break;
    case "agosto":
        console.log("30");
        break
    case "setembro":
        console.log("30");
        break
    case "outubro":
        console.log("31");
        break
    case "novembro":
        console.log("30");
        break
    case "dezembro":
        console.log("31");
    default:
        console.log("digite um numero de 1 a 12");
}
let nota1 = Number(prompt("digite a 1° nota"))
let nota2 = Number(prompt("digite a 2° nota"))
let media = (nota1 + nota2) / 2
if (media > 7) {
    console.log("aprovado");
} else {
    if (media >= 5 || media <= 7) {
        console.log("recuperação");
    } else {
        console.log("reprovado");

    }
}
console.log(media);

let salario = Number(prompt("digite seu salario: "))
if (salario <= 2000) {
    let desconto1 = (salario * 0.12)
    console.log(`o seu reajuste foi: ${desconto1}`);
} else {
    if (salario == 4000) {
        let desconto2 = (salario * 0.10)
        console.log(`o seu reajuste foi de ${desconto2}`);
    } else {
        if (salario > 4000) {
            let desconto3 = (salario * 0.08)
            console.log(`o seu reajuste foi de: ${desconto3}`);

        }
    }
}

