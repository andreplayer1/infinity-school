/*
Implemente uma função que receba um número e informe o quadrado
desse número. 
*/
function numQuad() {
    let num = document.getElementById('entrada').value;

    function quadrado(numero) {
        return numero * numero
    }
    document.getElementById('res').innerHTML = quadrado(num)
}