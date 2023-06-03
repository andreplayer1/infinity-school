//Exercício 1: Implemente a busca de CEP usando os conceitos de async e await.

const botao = document.querySelector("#botao");
const adress = document.querySelector("#adress")

const buscaCep = async ()=>{
const cep = document.querySelector("#cep");
let url = `https://cep.awesomeapi.com.br/json/${cep.value}`

fetch(url)
.then(response => response.json())
.then(data => adress.innerHTML = JSON.stringify(data, null, 2))
}

botao.addEventListener("click", buscaCep)