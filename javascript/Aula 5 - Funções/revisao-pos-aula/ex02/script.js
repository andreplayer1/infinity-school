//Implemente uma função que receba uma string como parâmetro e devolva a mesma invertida. Ex: “Noite” -> “etioN”
let entrada = 'Noite'
let strInvertida = [];
let res = document.getElementById('resp');

function inversor(string) {
    for(let i = string.length; i >= 0; i--){
        strInvertida += string[i]
    }
    return strInvertida
}
let result = inversor(entrada)
res.innerHTML = (result)