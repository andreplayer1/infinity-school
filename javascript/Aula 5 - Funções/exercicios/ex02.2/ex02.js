/*
Implemente uma função que receba uma string como parâmetro e
devolva a mesma invertida. Ex: “Noite” -> “etioN”
*/

function str(){
    let stri = document.querySelector('input#entrada').value;

    function inverter(str) {
        return str.split("").reverse().join("");
    }
    document.querySelector('p#res').innerHTML = inverter(stri);
}