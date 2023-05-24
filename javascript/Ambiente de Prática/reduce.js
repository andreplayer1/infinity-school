// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce((total, value)=>total + value, 6);
// console.log(sum)

// const itens = [
//     {descriprion:'pen', quantity:1, price:3},
//     {descriprion:'rule', quantity:2, price:5},
//     {descriprion:'erase', quantity:2, price:6}
// ]

// const total = itens.reduce( (soma, itemAtual) => soma + itemAtual.quantity * itemAtual.price, 0 )
// console.log(total)

// const names = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica"]

// const namesCount = names.reduce( (count, nomeAtual) => {
//     const firsLetter = nomeAtual[0].toLocaleLowerCase()
//     if(count[firsLetter]){
//         count [firsLetter]++
//     } else {
//         count[firsLetter] = 1
//     }

//     return count
// }, {} )

// console.log(namesCount)

const pessoas = [
    {nome: 'Daniel', idade: 28},
    {nome: 'Maria', idade:29},
    {nome: 'Marta', idade: 29}
]

const porIdade = pessoas.reduce( (pessoasIdade, pessoasAtual ) => {
    if(pessoasIdade[pessoasAtual.idade]){
        pessoasIdade[pessoasAtual.idade].push(pessoasAtual.nome)
    } else {
        pessoasIdade[pessoasAtual.idade] = []
        pessoasIdade[pessoasAtual].push(pessoasAtual.nome)
    }

    return pessoasIdade
}, {})

console.log(porIdade)