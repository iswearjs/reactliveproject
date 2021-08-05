import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className="setStyle2">
                <h1>404 Error Page</h1>
                <p>OOps! Page Not Found!!!</p>
                <NavLink to="/"> GO Back</NavLink>
            </div>
        </>
    );
}

export default Error;