import { Link, Navigate, useParams } from "react-router-dom";


import data from '../../logements.json'

function Logement() {
    let params = useParams();

    if(data.every(l => l.id !== params.id)) {
        return(
            <Navigate replace to="/404" />
        );
    }
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