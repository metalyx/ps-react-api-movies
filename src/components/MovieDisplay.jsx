import React, { useContext, useEffect } from 'react';
import { MoviesContext } from '../contexts/MoviesContextProvider';
import Movie from './Movie';
import { getAllMoviesFromLocalStorage } from '../helpers/getAllMoviesFromLocalStorage';

const MovieDisplay = () => {
    const [movies, setMovies] = useContext(MoviesContext);

    useEffect(() => {
        setMovies(getAllMoviesFromLocalStorage());
    }, []);

    const listViewHandle = (e) => {
        e.stopPropagation();
    };

    const tableViewHandle = (e) => {
        e.stopPropagation();
    };

    return (
        <div>
            <button onClick={listViewHandle} type='button' className='w-12'>
                <img src='https://static.thenounproject.com/png/1000310-200.png' />
            </button>
            <button onClick={tableViewHandle} type='button' className='w-12'>
                <img src='https://icons-for-free.com/iconfiles/png/512/grid+menu+menu+icon+icon-1320165660588647274.png' />
            </button>
            <div
                className='
                mt-6 grid grid-cols-1 gap-4 
                sm:gap-4 sm:grid-cols-2 
                md:grid-cols-2 md:gap-2 
                lg:grid-cols-3
                xl:grid-cols-4
                grid-rows-1
            '
            >
                {movies.map((mov) => (
                    <Movie movie={mov} key={mov.imdbID} />
                ))}
            </div>
        </div>
    );
};

export default MovieDisplay;
