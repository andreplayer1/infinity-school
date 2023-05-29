const cad = () => {
    const name = document.querySelector('input#nome').value;
    const sname = document.querySelector('input#sobrenome').value;
    const user = document.querySelector('input#usuario').value;
    const password = document.querySelector('input#senha').value;

    try {
        if(!name || !sname || !user || !password){
            throw new Error('Todos os campos precisam ser preenchidos!')
        }
        
        localStorage.setItem("name", name);
        localStorage.setItem("sname", sname);
        localStorage.setItem("user", user);
        localStorage.setItem("password", password);
        
        location.href = "../projeto-pizzaria/login.html";
    } catch (error) {
        alert(error.message)
    }
};

document.getElementById('buttoncadastrar').addEventListener('click', cad)