// Função é chamada e retorna um valor para x

function myFunction(a, b) {
a *= a;
b *= b;
let resultado = a * b; //variável local
return resultado; // Função retorna o quadrado do produto de a e b
a = 1; //Não é executado, está após o return
}
let x = myFunction(4, 3);