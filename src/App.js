import { useEffect } from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import MoviesContextProvider from './contexts/MoviesContextProvider';
import Layout from './components/Layout';

function App() {
    return (
        <div className='App w-full flex justify-center items-center flex-col'>
            <MoviesContextProvider>
                <Layout>
                    <Form />
                    <MovieDisplay />
                </Layout>
            </MoviesContextProvider>
        </div>
    );
}

export default App;
