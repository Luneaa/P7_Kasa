import React from "react";
import './home.scss';

function Home() {
    return (
        <>
            <section>
                <div className="banner">
                    <div className="banner__color"><img src={require("./banner.png")} /></div>

                    <p>Chez vous, partout et ailleurs</p>
                </div>
            </section>
        </>
    );
}

export default Home;