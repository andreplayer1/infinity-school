//Escolha um dos exercícios anteriores e substitua sua função por uma arrow function.

let entrada = prompt ('Digite um numero: ')
let resp = document.getElementById('resp')

const numQuadrado = numero => numero * numero

resp.innerHTML = numQuadrado(entrada)