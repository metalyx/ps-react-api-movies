import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { noImageIcon } from '../constants/noImageIcon';

const Movie = ({ movie }) => {
    const [stylesOnHover, setStyleOnHover] = useState('');

    const onOver = () => {
        setStyleOnHover('underline');
    };
    const onOut = () => {
        setStyleOnHover('');
    };
    const getValidatedSrc = (src) => {
        if (src === 'N/A') {
            return noImageIcon;
        } else {
            return src;
        }
    };

    return (
        <Tilt>
            <div
                onMouseOver={onOver}
                onMouseOut={onOut}
                className={`cursor-pointer shadow-md p-6 border rounded flex flex-col items-center h-full bg-gradient-to-r from-violet-600 to-indigo-600`}
            >
                <img
                    className='h-[200px] w-[200px] object-contain'
                    src={getValidatedSrc(movie.Poster)}
                    alt={movie.Title}
                />
                <h2 className={`${stylesOnHover} font-bold text-xl text-white`}>
                    {movie.Title} ({movie.Year})
                </h2>
                <span className={`text-white`}>{movie.Genre}</span>
                <p
                    title={movie.Plot}
                    className=' text-white max-h-[70px] text-ellipsis overflow-hidden'
                >
                    {movie.Plot}
                </p>
            </div>
        </Tilt>
    );
};

export default Movie;
