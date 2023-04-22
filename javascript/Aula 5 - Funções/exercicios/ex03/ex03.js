/*
Implemente uma função que receba um array de números como
parâmetro e imprima seu somatório.
*/
let arrayFelipe = [10, 20, 30];

function somador(array) {
    result = 0;

    for( let i = 0; i >= array.lenght; i++){
        result += array [i]
    }
    return result;
}

console.log(somador())