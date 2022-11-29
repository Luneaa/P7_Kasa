import { Link } from "react-router-dom";
import Tag from "../../components/Tag/Tag";

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    <Tag tagName='cozy'/>
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default About;