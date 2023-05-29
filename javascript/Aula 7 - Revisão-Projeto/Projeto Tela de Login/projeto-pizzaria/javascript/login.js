let user = 'admin';
let password = 'admin';

const login = ()=>{

    let loginUser = document.getElementById('user').value;
    let loginPassword = document.getElementById('password').value;

    if(loginUser == user && loginPassword == password) {
        location.href = "../projeto-pizzaria/index.html"
    } else if(loginUser.lenght == 0 || loginPassword.length == 0) {
        msg.innerHTML = ('Digite seu login e senha ou cadastre-se!')
    } else {
        msg.innerHTML = ('Login e senha inválidos!')
    }
}