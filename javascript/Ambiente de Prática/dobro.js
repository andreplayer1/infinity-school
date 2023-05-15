//Crie uma função dobro que recebe um número e uma função de callback. A função dobro deve multiplicar o número por 2 e chamar a função de callback, passando o resultado como argumento. Em seguida, exiba o resultado no console.
const dobro = (numero, cb)=>{
    resultado = numero * 2;
    cb(resultado)
};

dobro(15, (resultado)=>{
    console.log(resultado)
})