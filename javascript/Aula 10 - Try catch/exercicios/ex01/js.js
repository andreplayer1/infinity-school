const formulario = document.forms["frm1"];
const submeter = () =>{

    const nome = formulario.elements.name.value
    const cidade = formulario.elements.cidade.value
    const total = formulario.elements.total.value

    try{
        if( !nome || !cidade ||!total ){
            throw new Error ("Todos os campos precisam ser preenchidos!");
        };
        if(total <0){
            throw new Error ("O valor não pode ser negativo!");
        };
    } catch(e) {
        alert(e.message);
    };
};