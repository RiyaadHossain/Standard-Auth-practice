import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/cart'}>Cart</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/login'}>Log In</Link>
        </nav>
    );
};

export default Header;