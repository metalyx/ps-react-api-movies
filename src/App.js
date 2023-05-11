import { useEffect } from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import MoviesContextProvider from './contexts/MoviesContextProvider';
import Layout from './components/Layout';
import Header from './components/Header';

function App() {
    return (
        <div className='App w-full flex justify-center items-center flex-col font-sans'>
            <Header />
            <Layout className='relative top-[50px]'>
                <MoviesContextProvider>
                    <Form />
                    <MovieDisplay />
                </MoviesContextProvider>
            </Layout>
        </div>
    );
}

export default App;
