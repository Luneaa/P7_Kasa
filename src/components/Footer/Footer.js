import React from 'react';
import logo from '../../assets/logo_footer.svg';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className='footer__logo'><img src={logo} alt="Kasa logo" /></div>
            <div className='footer__copyright'><p>© 2020 Kasa. All rights reserved</p></div>
        </footer>
    );
};

export default Footer;