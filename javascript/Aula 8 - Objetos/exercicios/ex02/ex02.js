//Crie uma estrutura que permita ao usuário adicionar atletas na lista do exercício anterior.

let html = '';
let container = document.getElementById('container');
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
];

let mostrarNaPagina;

let exibir = ()=> {
    for(let i = 0; i < atletas.length; i++) {
        mostrarNaPagina += `Nome: ${atletas[i].nome}<br>`
        mostrarNaPagina += `Esporte: ${atletas[i].esporte}<br>`
    };
    container.innerHTML = mostrarNaPagina
}

let adicionar = ()=> {
    mostrarNaPagina = html
    let nome = document.getElementById('nome').value;
    let esporte = document.getElementById('esporte').value;
    
    atleta = {
        nome: nome,
        esporte: esporte
    };
    atletas.push(atleta)

    exibir()
}