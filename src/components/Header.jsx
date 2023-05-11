import React from 'react';

const Header = () => {
    return (
        <header className='h-[50px] fixed top-0 w-full'>
            <ul className='flex w-full justify-around items-center'>
                <li>Films to watch</li>
                <li>Watched films</li>
                <li>Films I am watching</li>
            </ul>
        </header>
    );
};

export default Header;
