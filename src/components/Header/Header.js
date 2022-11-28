import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <header>
                <div className='header__logo'><Logo/></div>
                <nav className='header__nav'>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/about">A Propos</Link></li>
                    </ul>
                </nav>
        </header>
    );
};

export default Header;