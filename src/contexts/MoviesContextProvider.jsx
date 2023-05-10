import React, { createContext, useState } from 'react';

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
    const moviesState = useState([]);

    return (
        <MoviesContext.Provider value={moviesState}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
