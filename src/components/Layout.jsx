import React from 'react';

const Layout = ({ children, className }) => {
    return (
        <div
            className={`${
                className ?? ''
            } m-2 sm:mx-12 md:mx-24 lg:mx-32 flex items-center flex-col`}
        >
            {children}
        </div>
    );
};

export default Layout;
