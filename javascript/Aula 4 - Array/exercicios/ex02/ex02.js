let condicao = false;
let ferramenta;
let ferramentasDigitadas = [];

while(condicao !== true){
    ferramenta = prompt("Digite uma ferramenta: ")
    if (ferramenta === "fim") {
        condicao = true;
    }else{
        ferramentasDigitadas.push(ferramenta);
    }
}

console.log(ferramentasDigitadas)