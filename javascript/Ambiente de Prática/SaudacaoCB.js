//Crie uma função saudacao que recebe um nome e uma função de callback. A função saudacao deve chamar a função de callback, passando o nome como argumento. Em seguida, exiba a saudação no console.
const saudacao = ()=> {
    horaAtual = new Date().getHours();

    if (horaAtual <= 12) return 'Bom dia!'
    if (horaAtual <= 18) return 'Boa tarde!'
    else return 'Boa noite!'
}
const saudar = (nome, CB)=> {
    return `Olá ${nome}, ${CB}`
}
console.log(saudar("Daniel", saudacao()))