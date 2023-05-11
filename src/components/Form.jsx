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
            className='flex flex-col w-[300px] items-center self-start'
        >
            <div className='flex flex-col self-start'>
                <label htmlFor='movieTitle' className='self-start'>
                    Movie title
                </label>
                <input
                    id='movieTitle'
                    value={movieTitle}
                    onChange={(e) => setMovieTitle(e.target.value)}
                    className='border-2 rounded border-black px-4 py-2 font-bold'
                />
            </div>

            <button
                type='submit'
                className='hover:bg-zinc-700 transition-all bg-zinc-900 text-white px-4 py-1 mt-3 font-bold text-lg self-start'
            >
                Add
            </button>
        </form>
    );
};

export default Form;
