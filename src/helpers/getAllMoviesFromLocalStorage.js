export function getAllMoviesFromLocalStorage() {
    if (!window) {
        return;
    }

    let keys = Object.keys(window.localStorage);

    const movies = keys.map((key) =>
        JSON.parse(window.localStorage.getItem(key))
    );

    return movies;
}
