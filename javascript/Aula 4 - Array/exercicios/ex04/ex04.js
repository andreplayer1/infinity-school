let listaDeCompras = ["Shampoo", "Cerveja", "Fralda"];
console.log(listaDeCompras)

listaDeCompras.splice(0, 0, "Arroz", "Feijão")
console.log(listaDeCompras)

listaDeCompras.splice(1, 1)
console.log(listaDeCompras)

listaDeCompras.splice(2, 1, "Macarrão")
console.log(listaDeCompras)

listaDeCompras.push("amendoim", "picanha")
console.log(listaDeCompras)

listaDeCompras.pop()
console.log(listaDeCompras)