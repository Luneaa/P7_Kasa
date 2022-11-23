import { Link, useParams } from "react-router-dom";

function Logement() {
    let params = useParams();
    return (
        <>
            <main>
                <h2>Olalala le logement</h2>
                <p> {params.id} </p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}

export default Logement;