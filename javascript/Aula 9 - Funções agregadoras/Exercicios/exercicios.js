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

// let vendasComDesconto = vendas.map((item)=>{
//     let desconto = item.preco * item.desconto / 100
//     let itemComDesconto = item.preco - desconto
//     console.log(`Item: ${item.nome} - Preço cheio ${item.preco},00 - Preço com desconto: ${itemComDesconto},00
//     `)
// })


//Exercício 4: Mostre o total do valor das vendas.
// const totalVendas = vendas.reduce( (total, atual) => {
//     return total + atual.preco
// }, 0)
// console.log(totalVendas)

//Exercício 5: Mostre o total de desconto por categoria.
