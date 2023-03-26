let resposta
let resultado = Math.floor(Math.random() *10);

function myFunction() {
    let formulario = document.forms["formulario"];
    let entrada = formulario.elements.entrada.value;

    while(resultado === entrada) {
        resposta += "Vc acertou! " + resultado
    }
    document.getElementById("resposta").innerHTML = resposta
}







console.log(resultado)