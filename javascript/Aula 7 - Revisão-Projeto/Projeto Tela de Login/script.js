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

let msg = document.getElementById('msg');
function login(){
    let loginUser = document.getElementById('user').value;
    let loginPassword = document.getElementById('password').value;

    if (loginUser == user && loginPassword == password) {
        msg.innerHTML = ('Entrando!')
        console.log(loginUser)
    } else if(loginUser.lenght == 0 || loginPassword == 0) {
        msg.innerHTML = ('Digite seu login e senha ou cadastre-se!')
    } else {
        msg.innerHTML = ('Login ou senha inválido!')
    }
}

