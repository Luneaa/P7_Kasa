import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import { useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const location = useLocation();
    return (
        <header>
                <Link to="/"><div className='header__logo'><Logo/></div></Link>
                <nav className='header__nav'>
                    <ul>
                        <li className={location.pathname == "/" ? "nav--underline" : ""}><Link to="/">Accueil</Link></li>
                        <li className={location.pathname == "/about" ? "nav--underline" : ""}><Link className="" to="/about">A Propos</Link></li>
                    </ul>
                </nav>
        </header>
    );
};

export default Header;