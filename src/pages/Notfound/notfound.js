import './notfound.scss';
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <main>
                <section>
                    <div className="error">
                        <h2 className="error__title">404</h2>
                        <p className="error__content">Oups! La page que vous demandez n'existe pas.</p>
                    </div>
                    <nav className='error__nav'>
                        <Link to="/">Retourner sur la page d'accueil</Link>
                    </nav>

                </section>
            </main>

        </>
    );
}

export default NotFound;