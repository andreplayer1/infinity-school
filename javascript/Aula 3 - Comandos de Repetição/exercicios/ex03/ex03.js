/*let resposta
let resultado = Math.floor(Math.random() *10);

function myFunction() {
    let formulario = document.forms["formulario"];
    let entrada = formulario.elements.entrada.value;

    while(resultado === entrada) {
        resposta += "Vc acertou! " + resultado
    }
    document.getElementById("resposta").innerHTML = resposta
}







console.log(resultado)*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

let quantidadeDeTentativas = 0;
let numeroCerto = GgetRandomInt(0, 10);
let numeroDigitado;

while(numeroCerto !== numeroDigitado){
    numeroDigitado = prompt("Digite um numero entre 0 e 10: ");
    quantidadeDeTentativas ++;
    console.log("Quantidade de tentativas", quantidadeDeTentativas)
}

console.log("Parabéns você acertou!")