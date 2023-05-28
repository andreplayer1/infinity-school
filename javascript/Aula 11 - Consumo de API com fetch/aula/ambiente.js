fetch("https://swapi.dev/api/people/2/")
.then(resposta => resposta.json())
.then(data => console.log(data))
.catch(error => console.log(error.message))