let condicao = false;
let palavra = "";

while (condicao !== true) {
    let character = prompt ("Digite uma letra: ");

    if (character = " "){
        condicao = true
    }else {
        palavra += character;
    }
}

console.log("A palavra é: ", palavra);