//Exercício 1: Crie um botão que fará uma chamada para captar fotos aleatórias de cães.
const mudarCao = document.querySelector("#mudar-cao");
const bListarRacas = document.querySelector("#list-racas");
const search = document.querySelector("#search");
const imageContainer = document.querySelector("#image-container");
const errContent = document.querySelector("#catch-container");

const randomPic = ()=>{
    const url = "http://dog.ceo/api/breeds/image/random"

    fetch(url)
    .then( response =>response.json() )
    .then( data => {imageContainer.src=data.message})
}

//Exercício 2: Crie uma chamada que retornará raças de cachorros e mostre ao usuário.
const listarRacas = ()=>{
    const url = "https://dog.ceo/api/breeds/list/all"

    fetch(url)
    .then (response =>response.json())
    .then (data => {
        let html = "";
        let racas = Object.keys(data.message);
        racas.forEach(element => {
            html += 
            `
            <li>
                ${element}
            </li>
            `
        });
        document.querySelector("#racas-container").innerHTML = html
    })
}

//Exercício 3: Modifique a chamada do exercício 1 para retornar imagens de apenas uma raça de cachorros, de acordo com que o usuário informar.
const porRaca = ()=>{
    let inputRaca = document.querySelector("#raca");
    let url = `https://dog.ceo/api/breed/${inputRaca.value}/images`;
    fetch(url)
    .then ( response => response.json() )
    .then (data => {
        imageContainer.src=data.message[Math.floor(Math.random()*data.message.length)]
    })
}

mudarCao.addEventListener("click", randomPic);
bListarRacas.addEventListener("click", listarRacas);
search.addEventListener("click", porRaca);