let confirm = document.getElementById('confirmCad');
function cadastro() {
    let pass = document.getElementById('password').value;
    let confirmPassword = document.getElementById('password2').value;
    if (pass == confirmPassword) {
        var password = pass
        var user = document.getElementById('username').value;
        confirm.innerHTML = ('Cadastro efetuado!')
    } else {
        confirm.innerHTML = ('Senha não confere!')
    }
}
