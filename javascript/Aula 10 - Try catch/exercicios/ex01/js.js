const formulario = document.forms["frm1"]
function submeter() {
    try {
        const nome = formulario.elements.name.value
        const cidade = formulario.elements.cidade.value
        const total = formulario.elements.total.value
        if(!nome || !cidade ||!total){
            throw new Error ("Todos os campos precisam ser preenchidos")
        }
    } catch(Error) {
        alert(Error.message)
    }

//     try {
//         const cidade = formulario.elements.cidade.value
//         if(!cidade){
//             throw new Error ("Campo Cidade está vazio")
//         }
//     } catch (err) {
//         alert (err.message)
//     }

//     try {
//         const total = formulario.elements.total.value
//         if(!total){
//             throw new Error ("Campo Total está vazio")
//         }
//         if(total )
//     } catch (err) {
//         alert (err.message)
//     }
// }