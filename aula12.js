//variaveis compostas / vetores / arrays

//variavel simples, cabe apenas 1 dado por vez
let fruta = "maçã";
fruta = "banana"
// variavel composta, cabe mais de 1 dado
let frutas = ["maçã", "banana", "abacaxi", "uva"]
console.log(frutas);
console.log(frutas[1]);

// declarando uma lista vazia
let listaVazia = [];

// delcaração de uma lista de numeros
let numeros = [1, 2, 8, 5, 9];

//declaração de uma lista de strings
let nomes = ["ana", "joao", "maria"]

//declaração de uma lista mista
let listaMista = [4, "feijao", true, 7.55]

//declaração de uma lista com outras listas
let listaDeVetores = [["coca-cola", "hot-dog"], [5.00, 10.00]]

//alterando o conteudo de um item da lista

frutas[3] = 'melancia'

//inserindo um novo item na lista
frutas.push("laranja"); //metodo push
frutas = [...frutas, 'laranja']; //utilizando o operador spread

frutas.splice(2, 0, "morango")
console.log(frutas);

//exluindo items da lisdta
//posição especifica
frutas.splice(3,1)
//primeiro
frutas.shift()
//ultimo
frutas.pop()

frutas = ['maça', 'banana', 'morando', 'abacaxi', 'melancia', 'laranja', 'uva']
console.log(frutas[4]);
console.log(frutas.slice(0,4));
console.log(frutas.slice(1));
console.log(frutas.slice(-1));
console.log(frutas.length);

frutas.sort()
console.log(frutas);
frutas.reverse()
console.log(frutas);



let bucheche = ['titiri', 'tatara', 'tetere', 'tuturu', 'totoro']
let vogais = ['A', 'E', 'I', 'O', 'U', 'ÃO']