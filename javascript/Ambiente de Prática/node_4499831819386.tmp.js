//Crie uma função repetir que recebe um número e uma função de callback. A função repetir deve chamar a função de callback um determinado número de vezes, passando o índice como argumento. Em seguida, exiba o resultado no console.
const repetir = (num) =>{
    for(let i = num; num < 100; i++){
        console.log(i)
    }
}
repetir(10)