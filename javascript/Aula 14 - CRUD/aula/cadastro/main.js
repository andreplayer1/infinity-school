const formulario = document.forms['formCadastro'];

function apiPost() {
    let _data = {
        usuario: "usuario fake",
        senha: "123",
        userId: 1
    }
    fetch(``)

    function onSubmit(e) {
        e.preventDefault();

        const nomeDeUsuario = e.target.loginInput.value;
        const senha = e.target.senhaInput.value;
        const confirmacaoDeSenha = e.target.confirmacaoSenhaInput.value;

        if(nomeDeUsuario) {
            if(senha === confirmacaoDeSenha) {
                let dadosDoUsuario = {
                    usuario: nomeDeUsuario,
                    senha: senha
                }
            }
        }

        console.log(e)
    }
}

formulario.addEventListener('submit', onSubmit);