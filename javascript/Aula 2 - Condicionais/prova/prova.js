function myFunction() {
    let formulario = document.forms["formulario"];
    let idade = formulario.elements.entrada.value;

    let maioridade

    if (idade < 18){
        maioridade = "Você é menor de idade."

    }else if (idade == 18){
        maioridade = "Você acabou de atingir a maioridade."

    }else {
        maioridade = "Você é maior de idade."
    }
    document.getElementById("resposta").innerHTML = maioridade;
}