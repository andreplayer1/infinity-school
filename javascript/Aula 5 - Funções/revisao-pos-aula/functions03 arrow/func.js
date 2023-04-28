                                    //Formas de declarar uma função
//Função padrão
function mult(par) {
    return 2*par;
}

//Padrão com atribuição
const dobro = function mult(par) {
    return par * 2
}

//Arrow function "Padrão"
const dobro = (par) => {return 2 * par;}

//Se contem somente um parametro, podemos omitir os parenteses ()
const dobro = par => { return 2 * par}

//Se contem somente um comando, podemos omitir o return
const dobro = par => 2 * par