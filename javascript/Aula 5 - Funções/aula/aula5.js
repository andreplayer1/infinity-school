function nome() {
    let nom = document.querySelector('input#entrada').value;

    function saudacao(name) {
        return `Olá, ${name}!`
    } 
    document.getElementById('res').innerHTML = saudacao(nom)
}