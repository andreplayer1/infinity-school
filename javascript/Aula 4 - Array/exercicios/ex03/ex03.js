let condicao = false;
let cor;
let coresDigitadas = [];

while(condicao !== true){
    cor = prompt("Digite uma cor: ")
    if (ferramenta === "fim" && coresDigitadas.length >= 5) {
        condicao = true;
    }else{
        coresDigitadas.push(cor);
    }
}

let corDaBusca = prompt("Digite uma cor para ser buscada: ")
let encontrou = false;

for (let i = 0; i < coresDigitadas.length; i++){
    if (corDaBusca === coresDigitadas[i]){
        console.log("Parabéns, você encontrou");
        encontrou = true;
        break
    }
}
if(!encontrou){
    console.log("Você não encontrou!")
}