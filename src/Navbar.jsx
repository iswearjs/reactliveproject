import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="menu_style">
            <NavLink exact activeClassName="active_class" to="/about">
                About US
            </NavLink>&nbsp;
            <NavLink exact activeClassName="active_class" to="/service">
                Service
            </NavLink>&nbsp;
            <NavLink exact activeClassName="active_class" to="/search">
                Search
            </NavLink>&nbsp;
            <NavLink exact activeClassName="active_class" to="/user/ishwar/dewangan">
                User
            </NavLink>&nbsp;
            <NavLink exact activeClassName="active_class" to="/contact">
                Contact US
            </NavLink>&nbsp;
        </div>
    );
}

export default Navbar;