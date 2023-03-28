let numeroDigitado = prompt ('Digite um numero: ');
let quantidadeDeDivisores = 0;
let resposta = "";
let i = 1;

while (i <= numeroDigitado) {
    if (numeroDigitado % i === 0) {
        quantidadeDeDivisores ++;
    }
        if (quantidadeDeDivisores ===2){
        resposta += `${i} é primo <br>`;
        }else {
        resposta +=`${i}Não é primo <br>`;
        }
    i++
}

console.log(`Numero inicial ${i}`)
console.log(`Numero digitado ${numeroDigitado}`)
console.log(`Quantidade de divisores ${quantidadeDeDivisores}`)
console.log(resposta)