//Implemente uma função que receba um array de números como parâmetro e imprima seu somatório.
let soma
let ar = [3, 3, 3]
let result = 0

function somador(array) {
    for (let i = array.length ; i >= 0; i--) {
        soma = array[i]
        if(soma != null){
            result = result + soma
        }
    }
    return result
    }
    console.log(somador(ar))