import { Link } from "react-router-dom";
import Tag from "../../components/Tag/Tag";
import Thumb from "../../components/Thumb/Thumb";

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    <Tag tagName='cozy'/>
                </p>
                <div>
                    <Thumb title='blablabla un logement' />
                </div>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default About;