//Crie uma função dobro que recebe um número e uma função de callback. A função dobro deve multiplicar o número por 2 e chamar a função de callback, passando o resultado como argumento. Em seguida, exiba o resultado no console.

// const dobro = (numero) => {
//     resultado = numero * 2
//     result(resultado)
// }
// const result = (x) => {console.log(`Resultado ${x}`)}

// dobro(5)

const dobro = (numero, mostrar = (x)=>{console.log(x)}) => {
    resultado = numero * 2
    mostrar(resultado)
}
dobro(7)