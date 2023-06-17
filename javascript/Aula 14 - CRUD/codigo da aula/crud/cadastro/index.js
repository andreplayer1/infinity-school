const formulario = document.forms['formCadastro'];
const COMPLEMENTO_CRUDCRUD_URL = '3f44d0b1248247a69c069f983a3abc2b'

function API(API_URL) {
    return `https://crudcrud.com/api/${API_URL}/usuarios`
}

function apiPost(data) {
    fetch(API(COMPLEMENTO_CRUDCRUD_URL), {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => {
        console.log(json);
        alert('Você é show! O usuário foi adicionado com sucesso. Paranbéns!');
        window.location.href = "http://127.0.0.1:5500/login";
    })
    .catch(err => console.log(err));
}

function onSubimit(e) {
    e.preventDefault();

    const nomeDeUsuario = e.target.loginInput.value;
    const senha = e.target.senhaInput.value;
    const confirmacaoDeSenha = e.target.confirmarSenhaInput.value;

    if(nomeDeUsuario) {
        if(senha === confirmacaoDeSenha) {
            let dadosDoUsuario = {
                usuario: nomeDeUsuario,
                senha: senha
            }
        
            apiPost(dadosDoUsuario);
        }else {
            alert('A senha não coincide!');
        }
    } else {
        alert('Cade seu login? Digite!');
    }
}

formulario.addEventListener('submit', onSubimit);
