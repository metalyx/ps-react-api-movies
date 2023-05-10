import React, { useContext, useEffect } from 'react';
import { MoviesContext } from '../contexts/MoviesContextProvider';
import Movie from './Movie';
import { getAllMoviesFromLocalStorage } from '../helpers/getAllMoviesFromLocalStorage';

const MovieDisplay = () => {
    const [movies, setMovies] = useContext(MoviesContext);

    useEffect(() => {
        setMovies(getAllMoviesFromLocalStorage());
    }, []);

    return (
        <div className='mt-6 grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-6 lg:grid-cols-4 grid-rows-1'>
            {movies.map((mov) => (
                <Movie movie={mov} key={mov.imdbID} />
            ))}
        </div>
    );
};

export default MovieDisplay;
