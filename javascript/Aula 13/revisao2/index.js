import { getAllBreeds, mostrarNoHtml } from './helpers/index.js';

const mainContainer = document.getElementById('root');

mainContainer.innerHTML = "<button id='botaoMostrarRacas'>Mostrar Lista</button>"

const botaoMostrarRacas = document.getElementById('botaoMostrarRacas');
botaoMostrarRacas.addEventListener('click', () => mostrarNoHtml(getAllBreeds()));
