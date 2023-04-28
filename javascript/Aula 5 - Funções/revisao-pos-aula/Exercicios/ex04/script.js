//Faça uma função que remova as vogais de uma string.

let ent = 'Fabio';

function remString(str) {
    let SemVog;

    for(let i = str.length ; i > 0 ; i--){
        if(str[i] !== 'a' || str[i] !== 'e' || str[i] !== 'i' || str[i] !== 'o' || str[i] !== 'u') {
            SemVog += str[i]
        }
    } 
    return SemVog;
}
console.log(remString(ent))