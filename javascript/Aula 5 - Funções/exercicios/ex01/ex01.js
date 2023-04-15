/*
Implemente uma função que receba um número e informe o quadrado
desse número. 
*/
res = document.querySelector('div#res');

function quadrado() {
    let numero = document.querySelector('input#num').value;
    let resp = numero * numero;
    res.innerHTML = `O numero ${numero} ao quadrado é igual a ${resp}`;
}