import { API_URL, LIST_ALL } from '../api/index.js';

const mainContainer = document.getElementById('root');

export async function getAllBreeds() {
    const data = await fetch(API_URL + LIST_ALL);
    const response = await data.json();

    return Object.keys(response.message);
}

export async function mostrarNoHtml(array) {
    let html = '';

    mainContainer.innerHTML += "<div id='listContainer'>Loading...</div>"

    const result = await array;

    const listContainer = document.getElementById('listContainer');

    listContainer.innerHTML = `
        <ul id='lista'> 
        </ul>
    `;

    const lista = document.getElementById('lista');

    for(const item of result) {
        html += `<li> ${item} </li>`
    }

    lista.innerHTML = html;
}