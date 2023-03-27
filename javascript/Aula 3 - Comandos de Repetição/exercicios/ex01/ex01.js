function myFunction() {
    let formulario = document.forms["formulario"];
    let entrada = formulario.elements.entrada.value;
    
    let mensagem
    for(let i = entrada; i != -1 ;i--){
        mensagem += `Numero ${i} <br>`;

    document.getElementById('resposta').innerHTML = mensagem
    }
}