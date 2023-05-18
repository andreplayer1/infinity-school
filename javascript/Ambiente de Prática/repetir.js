//Crie uma função repetir que recebe um número e uma função de callback. A função repetir deve chamar a função de callback um determinado número de vezes, passando o índice como argumento. Em seguida, exiba o resultado no console.

const repetir = (num, cb) =>{
    for(let i = num; i <= 100; i++){
        cb(i)
    }
}
const callback = num =>{
    let numeros = '';
    numeros += num;
    console.log(numeros)
 }
 repetir(0, callback)