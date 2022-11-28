import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className='footer__logo'><Logo /></div>
            <div className='footer__copyright'><p>© 2020 Kasa. All rights reserved</p></div>
        </footer>
    );
};

export default Footer;