function entrada() {
    let nom = document.querySelector('input#entrada').value;

    function saudacao(nome) {
        return `Olá, ${nome} Seja bem vindo(a)!`
    }
    document.getElementById('res').innerHTML = saudacao(nom)
}