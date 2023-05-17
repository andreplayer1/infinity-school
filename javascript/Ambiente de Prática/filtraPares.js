//Crie uma função filtrarPares que recebe um array de números e uma função de callback. A função filtrarPares deve abranger o array e chamar a função de retorno de chamada apenas para os números pares. A função de retorno de chamada deve exibir os números pares no console.

const filtrarPares = (cb) => {
    let nums = [1,2,3,4,5,6,7,8,9,10]
    let pares = []
    for(let i = 0; i < nums.length; i++){
        let teste = nums[i]
        if(teste % 2 == 0){
            pares += `${teste}, `
        }
    }
    exibir(pares)
}
const exibir = (par) =>{console.log(par)}
filtrarPares()