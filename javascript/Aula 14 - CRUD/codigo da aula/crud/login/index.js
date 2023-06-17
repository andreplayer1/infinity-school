const formulario = document.forms['loginForm'];
const COMPLEMENTO_CRUDCRUD_URL = '3f44d0b1248247a69c069f983a3abc2b'

function API(API_URL) {
    return `https://crudcrud.com/api/${API_URL}/usuarios`
}

// NÃO FAÇAM ISSO!!!!!!!!!!!!!
async function backEnd(usuario, senha) {
    const data = await fetch(API(COMPLEMENTO_CRUDCRUD_URL));
    const response = await data.json();

    const user = response.find(elemento => {
        return (elemento.usuario === usuario && elemento.senha === senha)
    })

    return user;
}

async function handleSubmit(e) {
    e.preventDefault();
    
    const nomeDeUsuario = e.target.usuarioInput.value;
    const senha = e.target.senhaInput.value;
    
    if(nomeDeUsuario && senha) {
        const resposta = await backEnd(nomeDeUsuario, senha);

        if(resposta) {
            alert('Uuuuhuuuul entrou!');
        } else {
            alert('TA TUDO ERRADO! TENTE NOVAMENTE!')
        }
    }else {
        alert('Preencha os dados corretamete!');
    }
}

formulario.addEventListener('submit', handleSubmit);