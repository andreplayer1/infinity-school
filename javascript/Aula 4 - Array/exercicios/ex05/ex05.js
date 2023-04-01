let profissoes = ["DevOps", "Dev Full Stack", "Dev Back-end", "Dev Front-end", "Dev Web"]
console.log(profissoes)

profissoes.splice(0,0, "Veterinário")
console.log(profissoes)

profissoes.pop()
console.log(profissoes)

profissoes.push("Piloto")
console.log(profissoes)

profissoes.splice(0,1)
console.log(profissoes)

profissoes.splice(2, 0, "Designer", "Carpinteiro")
console.log(profissoes)

profissoes.splice(1, 1)
console.log(profissoes)