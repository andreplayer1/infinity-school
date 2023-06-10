const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const conteudoFilmes = document.getElementById('conteudoFilmes');

async function getMovies() {
    let htmlFilmes = '';

    const data = await fetch(API_URL);
    const response = data.json();

    for(const filme of response.results){
        htmlFilmes += `
        <div class = 'card-filme'>
            <img src='${BASE_IMG_URL}${filme.poster_path}' />
            <p>${filme.title}<p/>
        </div>
        `
    };
    conteudoFilmes.innerHTML = htmlFilmes;
}
getMovies()