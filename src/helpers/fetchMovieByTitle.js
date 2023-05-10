import { MOVIE_API_KEY } from '../constants/APIKEY';
import { getMovieFromLocalStorage } from './getMovieFromLocalStorage';
import { saveToLocalStorage } from './saveToLocalStorage';

export async function fetchMovieByTitle(title) {
    const trimmed = title.trim();

    if (typeof trimmed !== 'string' || trimmed.length <= 0) {
        return;
    }

    const movieFromLocalStorage = getMovieFromLocalStorage(trimmed);

    if (!movieFromLocalStorage) {
        const responseBody = await fetch(
            `http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&t=${trimmed}`
        )
            .then((res) => res.json())
            .catch(() => {
                throw new Error('Error during fetching a movie');
            });

        if (responseBody.Response === 'False') {
            return;
        }

        saveToLocalStorage(responseBody, trimmed);

        return responseBody;
    } else {
        return movieFromLocalStorage;
    }
}
