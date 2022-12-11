import './about.scss';

import { Link } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";


function About() {
    return (
        <>
            <main>
            <section>
                <div className="banner">
                    <div className="banner__color"><img src={require("./banner.png")} /></div>
                </div>
            </section>
                <h2>Who are we?</h2>
                    <Tag tagName='cozy'/>
                <div>
                    <Collapse title='equipements' content='blablablalblablabla blablablabla blabla balbalabalblablabl balblab' />

                </div>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default About;