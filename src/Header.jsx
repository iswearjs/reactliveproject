import React from 'react';
import logo from './images/logo192.png';

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={logo} alt='logo' width='70' hegiht='50'/>
                <h1>NoteBook keep</h1>
            </div>
        </>
    );
}
export default Header;
