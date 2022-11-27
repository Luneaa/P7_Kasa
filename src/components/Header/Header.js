import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

const Header = () => {
    return (
        <header>
            <div>
                <div><Logo/></div>
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/about">A Propos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;