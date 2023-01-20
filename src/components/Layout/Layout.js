import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Layout.scss';

const Layout =({children}) =>{
    return(
        <>
        <div className="layout--wrapper">
            <Header/>
            {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout