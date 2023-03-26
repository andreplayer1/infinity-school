let numeroDigitado = prompt ("Digite um numero: ");
let quantidadeDivisores = 0;

for(let i=1 ; i<=numeroDigitado ; i++){
    quantidadeDivisores = 0;
    for(let j=1; i<=i ; j++){
        if(i%j ===0)
        quantidadeDivisores++;
    }
}
if(quantidadeDivisores===2){
    console.log(i, " é primo");
}