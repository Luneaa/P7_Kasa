import React from "react";
import './home.scss';

import Thumb from "../../components/Thumb/Thumb";

import data from '../../logements.json'

function Home() {
    return (
        <>
            <section>
                <div className="home__banner">
                    <div className="home__banner__color"><img src={require("../../assets/banner_home.png")} /></div>

                    <p>Chez vous, partout et ailleurs</p>
                </div>
            </section>
            <section>
                <div className="logements">
                    {
                        data.map((logement) => {
                            return (
                                <div className="logements__item" key={logement.id} >
                                    <Thumb title={logement.title} cover={logement.cover} id={logement.id} />
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default Home;