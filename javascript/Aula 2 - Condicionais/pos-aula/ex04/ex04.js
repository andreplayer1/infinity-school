function myFunction() {

    let formulario = document.forms["formulario1"];
    let entrada = formulario.elements.entrada.value;

    let resto 
    resto = entrada % 2;

    let parouimpar = 0;
    parouimpar = resto == 0 ? "PAR" : "ÍMPAR";

    document.getElementById("resposta").innerHTML = parouimpar;
}