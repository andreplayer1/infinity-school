//Monte um array de objetos para atletas, contendo nome do atleta e esporte praticado. Em seguida, mostre as informações desse array na página.

let container = document.getElementById('container')
let atletas = [
    {
        nome: 'Michael',
        esporte: 'Volei'
    },

    {
        nome: 'Jhon',
        esporte: 'Basketball'
    },

    {
        nome: 'Ítalo',
        esporte: 'Handball'
    },

    {
        nome: 'Joana',
        esporte: 'Football'
    },

    {
        nome: 'Laís',
        esporte: 'Natação'
    }
]

for(let i = 0; i < atletas.length; i++) {
    container.innerHTML += `Nome: ${atletas[i].nome}<br>`
    container.innerHTML += `Esporte: ${atletas[i].esporte}<br>`
}