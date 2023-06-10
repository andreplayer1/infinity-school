import { API_URL, LIST_ALL } from './API/index.js';

const mainContainer = document.getElementById('root');

mainContainer.innerHTML = ""

async function getAllBreeds() {
    const data = await fetch(API_URL + LIST_ALL);
    const response = await data.json();

    return Object.keys(response.message);
}

async function mostrarNoHtml(array) {
    const container = document.getElementById('container');
    let html = '';

    container.innerHTML = '<p>Loading...</p>'

    const result = await array;

    container.innerHTML = `
    <ul id='lista'>
    </ul>
    `;

    const lista = document.getElementById('lista');

    for(const item of result) {
        html += `<li> ${item} </li>`
    }

    lista.innerHTML = html;
}

mostrarNoHtml(getAllBreeds())