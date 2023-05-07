let atletas = [
];

const mostrarAtletas = () => {
    let html = '';

    for(let i = 0; i < atletas.length; i++) {
        html += `
        <div>
            <p>
                nome: ${atletas[i].nome}
            </p>
            <p>
                esporte: ${atletas[i].esporte}
            </p>
        </div>
        `;
    }

    return html;
}

document.getElementById("container").innerHTML = mostrarAtletas();