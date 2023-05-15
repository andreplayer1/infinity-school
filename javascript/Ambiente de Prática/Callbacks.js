//Revisão de Callbacks
const criarPessoa = nome => ({nome})
const pessoa = criarPessoa('José')

const saudar = (nome, cb) => {
    const horaAtual = new Date().getHours()

    //const responder = (saudacao)=> console.log(saudacao,nome)
    
    if(horaAtual <=12) return cb("Bom dia!")
    if(horaAtual <=18) return cb("Boa tarde!")
    return cb("Boa noite!")
}

const responderCallback = (saudacao)=> console.log(saudacao, "Daniel")
saudar("Daniel", responderCallback)