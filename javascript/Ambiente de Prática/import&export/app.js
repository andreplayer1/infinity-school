import somar from './soma.js'

const inputN1 = document.getElementById('numero1');
const inputN2 = document.getElementById('numero2');
const resultado = document.getElementById('resultado');
const botao = document.querySelector('button');

botao.onclick = () =>{
    const valorN1 = Number(inputN1.value);
    const valorN2 = Number(inputN2.value);

    resultado.innerText = somar(valorN1, valorN2);
}