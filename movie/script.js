document.addEventListener('DOMContentLoaded', function() {
    fetch('/recommend_movies')
        .then(response => response.json())
        .then(data => {
            const moviesList = document.getElementById('movies-list');
            data.forEach(movie => {
                const li = document.createElement('li');
                li.textContent = movie.title;
                moviesList.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
});
