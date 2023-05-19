let frutas = ['Banana', 'Maçã', 'Goiaba', 'Pêra'];
frutas.forEach((nome, index, arr) => {
    let edit = `Temos ${nome}`
    let pos = `Está na ${index} prateleira`
    console.log(edit)
    console.log(pos)
})