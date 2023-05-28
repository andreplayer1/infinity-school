//Exercício 1: Crie um botão que fará uma chamada para captar fotos aleatórias de cães.
const imagem = document.querySelector("img#imagem");


const rand = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(img => img.json())
    .then(data => imagem.setAttribute("src", data.message))
}

document.getElementById("botao").addEventListener("click", rand)

//Exercício 2: Crie uma chamada que retornará raças de cachorros e mostre ao usuário.
let raca = document.querySelector("div#racas");

const mostrarRacas = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(racas => racas.json())
    .then(data => {
        
        Object.keys(data.message).forEach({

        });
    })
}

document.getElementById("mRacas").addEventListener("click", mostrarRacas)

//Exercício 3: Modifique a chamada do exercício 1 para retornar imagens de apenas uma raça de cachorros, de acordo com que o usuário informar.
