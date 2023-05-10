export function saveToLocalStorage(movie, title) {
    if (!window) {
        return;
    }

    const titleLowerCased = title.toLowerCase();
    const search = window.localStorage.getItem(titleLowerCased);

    if (!search) {
        window.localStorage.setItem(titleLowerCased, JSON.stringify(movie));
    }
}
