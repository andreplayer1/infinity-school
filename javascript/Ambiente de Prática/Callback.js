const saudar = (nome, cb) => {
    const horaAtual = new Date().getHours()

    //const responder = (saudacao) => console.log(saudacao, nome)

    if(horaAtual <= 12) return cb("Bom dia!")
    if(horaatual <= 18) return cb("Boa tarde!")
    return cb("Boa noite")
}

//const responderCallback = (saudacao, nome) => console.log(saudacao, nome)

saudar("Daniel", (saudacao) => console.log(saudacao))

// const criarPessoa = nome => ({nome})

// const pessoa = criarPessoa
// const caique = criarPessoa("Caique Bastos")
// const daniel = criarPessoa("Daniel Silva")

// console.log(caique.nome)