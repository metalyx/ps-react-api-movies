export function getMovieFromLocalStorage(movieTitle) {
    if (!window) {
        return;
    }

    movieTitle = movieTitle.toLowerCase();

    let movieFromLocalStorage = window.localStorage.getItem(movieTitle);

    if (movieFromLocalStorage !== null) {
        movieFromLocalStorage = JSON.parse(movieFromLocalStorage);
    }

    return movieFromLocalStorage;
}
