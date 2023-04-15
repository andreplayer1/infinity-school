/*
Faça uma função que remova as vogais de uma string.
*/

function removerVogais(string){
    let stringWithoutVogal = "";

    for(let i = 0; i < string.length; i++){
        if(string[i] !== 'a' && string[i] !== 'e' && string[i] !== 'i' && string[i] !== 'o' && string[i] !== 'i') {
            stringWithoutVogal += string[i]
        };
    }
}