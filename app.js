const API_KEY = '996df8e23a361f055a648ff10f033606';  
const BASE_URL = 'https://api.themoviedb.org/3';


function searchMovie() {
    const query = document.getElementById('movie-query').value;
    

    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
    

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}


function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';  

    if (movies.length === 0) {
        moviesContainer.innerHTML = '<p>No movies found.</p>';
        return;
    }


    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title} poster">
            <p>${movie.overview}</p>
        `;
        moviesContainer.appendChild(movieElement);
    });
}
