export default usuario

const cad = () => {
    const nome = document.querySelector('input#nome').value;
    const sname = document.querySelector('input#sobrenome').value;
    const user = document.querySelector('input#usuario').value;
    const password = document.querySelector('input#senha').value;

    var usuario = {
        nome: nome,
        sobrenome: sname,
        usuario: user,
        senha: password
    };

    location.href = "../projeto-pizzaria/login.html";

};