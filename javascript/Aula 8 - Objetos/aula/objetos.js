// var cidade = {
//     nome: 'Salvador',
//     PIB: 63804000000,
//     populacao: 3500000,
//     PibPerCapta: function() {
//         return this.PIB / this.populacao
//     }
// }

// console.log(cidade.populacao)

// Objetos são estruturas muito flexíveis pois permitem combinações de seus elementos para formar estruturas mais complexas:

// var pessoa = {
//     nome: 'Cascão',
//     endereço: {
//         rua: 'Rua do Limoeiro'
//     },
//     amigos: ['Cebolinha', 'Mônica', 'Magalí']
// };

// console.log(pessoa.amigos[0])



// Podemos também ter arrays de objetos, em que cada posição do array é um objeto:

var personagens = [ 
    {
        nome: 'Goku',
        seriado: 'Dragon Ball'
    },
    {
        nome: 'Tanjiro',
        seriado: 'Demon Slayer'
    },
    {
        nome: 'Saiya',
        seriado: 'Cavaleiros dos Zodíacos'
    }
]

// Temos dois métodos importantes para trabalhar com Objetos JavaScript: Keys e Values:

// Object.keys(obj): Retorna todas as chaves do objeto em um array.
console.log(Object.keys(personagens))

// Object.values(obj): Retorna todos os valores do objeto em um array.
console.log(Object.values(personagens))