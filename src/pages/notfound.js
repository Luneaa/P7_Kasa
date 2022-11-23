import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <main>
                <h2>404</h2>
                <p>ERREUR</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}

export default NotFound;