let myObj = {
    a: 2,
    b: 4,
    c: 6
}

// retorna as chaves do objeto passado
Object.keys(myObj);
// resultado (3) ["a", "b", "c"]


//retorna os valores do objeto passado
Object.values(myObj);
// resultado (3) [2, 4, 6]

// verifica se existe uma determinada propriedade
myObj.hasOwnProperty('a');
// resultado true
// se passar propriedade que nao existe retorna false

// outro exemplo que pode ser usado é com in
'a' in myObj
//resultado true

// existe a funcao entries do Object
// que transforma o objeto em um array com chave e valor
Object.entries(myObj);
// [Array(2), Array(2), Array(2)]

// com a funcao seal é possivel evitar que um objeto
// seja alterado, no caso pode editar os valores das chaves;
// mas nao pode ser feito a adição de novas s chaves por exemplo
Object.seal(myObj);
//retorno {a: 2, b: 4, c: 6}
/*
myObj.e = 10
10
myObj
{a: 2, b: 4, c: 6} 
ficando sempre com o mesmo tanto de chave: valor

se tentar apagar um propriedade tbm retorna false
*/ 

delete myObj.a;
// resultado false



/* é possivel congelar um objeto
ao contrario do seal que é possilve alterar os valores que possui
com freeze nao é possivel fazer nada somente leitura

*/

Object.freeze(myObj);
// resultado {a: 2, b: 4, c: 6}


// para verificar se um objeto está selado ou congelado tem duas funcoes
Object.isFrozen(myObj);
Object.isSealed(myObj);