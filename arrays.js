let myArray = [2, 4, 6, 8, 10];


//irá verificar se todos os elementos do array é par, nesse caso dá true
myArray.every(n => n % 2 === 0);


//preciso pegar somente os numero impares
let myArray = [2, 3, 4, 5, 6, 8, 9, 10];

myArray.filter(n => n % 2 !== 0);


//busca com find, irá buscar o primeiro numero que atendo a condicao
// no caso retorna 6
myArray.find(n => n > 5);


//se precisar retornar o index do elemento da condicao
myArray.findIndex(n => n > 5);

//verifica se alguma dos elementos entra na condicao
myArray.some(n => n % 2 === 0);


let novoArray = [1, 2, 3];
novoArray.reduce((acumulado, atual) => acumulado + atual);


/* ordenacao com sort
 o resultado será [10, 15, 2, 4, 6, 8]
 quando é executado o metodo de sorte ele tranformar o array em 
 em string  entao ele leva em considerao o 1 do 10 e do 15 */

let ordenacaoArray = [8, 2, 15, 10, 4, 6];
ordenacaoArray.sort();

/* para resolver o problema de ordenacao do sort, pode ser feito
se o numero a for menor que o b ele precisa retornar -1 entao pode ser feit
um ternario.
se mudar a posicao do 1 e -1 ele ordena de forma descrescente
*/
ordenacaoArray.sort((a, b) => a > b ? 1 : -1);

// outra função importante,m percorrer todos elementos
ordenacaoArray.forEach(n => { console.log(n); });

// se precisar alterar um array, pode utilizar o map
// nesse caso irá multiplicar tudo por 2
ordenacaoArray.map(n => n * 2);


// quebrando um string com joi separadar
let arrayComSeparador = [1,2,3,4,5,5,6,7,8,9,];
arrayComSeparador.join('-');
// resultado "1-2-3-4-5-5-6-7-8-9"



// a funcao join pode ser usada com o split
// que irá transformar uma string em array e depois colocar o separador
"abc".split('').join('-')

// resultado "a-b-c"

// com a funcao reverse é possivel inverter o array
[1,2,3].reverse

//resultado [3, 2, 1]


//inverter um string
'abc'.split('').reverse().join('-');
// resultado "c-b-a"

// inserir um novo elemento
myArray.push('asda');

// remover um elemento
myArray.pop();

// adicionar um elemente no inicio do array
myArray.unshift("asDAS");

// remover a primeira posicao do array
myArray.shift();



//removendo um elemente pelo indice
// primeiro parametro do () é o index depois a quantidade de elementos a ser removido
let removendoElementos = [1,2,3,4,5,6,7,8,9];
// removendo o elemento 4
removendoElementos.splice(3,1);
// resultado [4]
// removendoElementos
// (8) [1, 2, 3, 5, 6, 7, 8, 9]

// se nao passar nada no segundo parametro do slice e
// um valor como terceiro paramentro irá alterar naquela posicao pelo novo valor informado
removendoElementos.splice(2, 0, 'alicio');

//resultado removendoElementos
// (10) [1, 2, "alicio", 3, 4, 5, 6, 7, 8, 9]

// pegando uma substrign  iniciando com o index
// e vai até o valor informado 
arrayComSeparador.slice(1, 4);

//  irá pegar todos os elemente a partir 
// do index 1 e vai pegar os proximos 3 index
//resultado  [2, 3, 4]