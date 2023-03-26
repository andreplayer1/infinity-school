function myFunction() {
    let formulario = document.forms["formulario"];
    let entrada = formulario.elements.entrada.value;

    for (let i = entrada; i >= 0; i--) {
        document.getElementById("resposta").innerHTML += `${i}<br>`
    }
    
}