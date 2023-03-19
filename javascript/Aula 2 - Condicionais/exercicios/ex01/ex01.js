let tamanho
let numero = prompt ("Digite um numero")
if (numero > 10) {
    tamanho = ("O numero é grande")
}else {
    tamanho = ("O numero é pequeno")
}
document.getElementById("numero").innerHTML = tamanho
console.log()