numero = 5
function somador() {
    numero ++
    console.log(numero)
}

function subtrator() {
    numero --
    console.log(numero)
}

function limpar() {
    numero = 0
    console.log(numero)
}
numero = prompt ("Digite um número")
document.getElementById("numero").innerHTML = numero