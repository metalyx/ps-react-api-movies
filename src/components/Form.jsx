import React, { useState, useContext } from 'react';
import { fetchMovieByTitle } from '../helpers/fetchMovieByTitle';
import { MoviesContext } from '../contexts/MoviesContextProvider';

const Form = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movies, setMovies] = useContext(MoviesContext);

    const handleSearch = async (e) => {
        e.preventDefault();
        const movie = await fetchMovieByTitle(movieTitle);
        setMovieTitle('');

        if (movie) {
            if (!movies.find((mov) => mov.imdbID === movie.imdbID)) {
                setMovies((movieState) => [...movieState, movie]);
            }
        }
    };

    return (
        <form
            onSubmit={(e) => handleSearch(e)}
            className='flex flex-col w-[300px] items-center'
        >
            <label htmlFor='movieTitle'>Movie title</label>
            <input
                id='movieTitle'
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
                className='border-2 rounded border-black'
            />
            <button type='submit'>Search</button>
        </form>
    );
};

export default Form;
