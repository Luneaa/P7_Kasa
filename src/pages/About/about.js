import { Link } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import Thumb from "../../components/Thumb/Thumb";


function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                    <Tag tagName='cozy'/>
                <div>
                    <Thumb title='blablabla blablablabla blablabla logement' />
                </div>
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