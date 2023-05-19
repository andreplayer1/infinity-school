// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce((total, value)=>total + value, 6);
// console.log(sum)

const vendas = [
    { nome: 'Geladeira', categoria: 'Eletrônico', preco: 2500, desconto: 0},
    { nome: 'Sofá', categoria: 'Móvel', preco: 900, desconto: 30}, // 30% dedesconto
    { nome: 'Televisão', categoria: 'Eletrônico', preco: 3000, desconto: 10},
    { nome: 'Notebook', categoria: 'Eletrônico', preco: 4100, desconto: 5},
    { nome: 'Cama Box', categoria: 'Móvel', preco: 1300, desconto: 15},
    { nome: 'Estante', categoria: 'Móvel', preco: 600, desconto: 10},
    ]

//Exercício 1: Mostre o nome de todos os itens vendidos e suas categorias.
// vendas.forEach((itens) =>{
//     console.log(`Item: ${itens.nome}
// Categoria: ${itens.categoria}
// `)
// })

//Exercício 2: Exiba somente os itens da categoria eletrônicos.
//COM IF
// let eletronicos = vendas.filter(item => {
//     if(item.categoria == 'Eletrônico'){
//         return item
//     }
// })

//SEM IF
// let eletronicos = vendas.filter(itens => itens.categoria == 'Eletrônico')
// console.log(eletronicos)

//Exercício 3: Mostre os itens, seu preço cheio, e seu preço com desconto.

