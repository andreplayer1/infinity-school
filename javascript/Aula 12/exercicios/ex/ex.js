//Exercício 1: Implemente a busca de CEP usando os conceitos de async e await.

const botao = document.querySelector("#botao")
const address = document.querySelector("#adress")

const buscaCep = async ()=>{
    const cep = document.querySelector("#cep");
    const rua = document.querySelector("#rua")
    const bairro = document.querySelector("#bairro")
    const cidade = document.querySelector("#cidade")
    const estado = document.querySelector("#estado")
let url = `https://cep.awesomeapi.com.br/json/${cep.value}`

fetch(url)
.then(response => response.json())
.then(data => {
    rua.innerHTML = JSON.stringify(data.address_name),
    bairro.innerHTML = JSON.stringify(data.district),
    cidade.innerHTML = JSON.stringify(data.city),
    estado.innerHTML = JSON.stringify(data.state)
})
}

botao.addEventListener("click", buscaCep);