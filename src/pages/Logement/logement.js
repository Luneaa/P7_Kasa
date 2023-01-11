import './logement.scss';
import { Link, Navigate, useParams } from "react-router-dom";
import { ReactComponent as Star } from './star.svg';

import data from '../../logements.json'
import Gallery from '../../components/Gallery/Gallery';
import Tag from '../../components/Tag/Tag';
import Collapse from '../../components/Collapse/Collapse';

function Logement() {
    let params = useParams();

    if (data.every(l => l.id !== params.id)) {
        return (
            <Navigate replace to="/404" />
        );
    }
    let logement = data.find(l => l.id === params.id);
    let ratings = [];
    for (var i = 1; i <= 5; i++) {
        ratings.push(i <= logement.rating ? "star--active" : "star--inactive");
    }
    return (

            <main>
                <section>
                    <Gallery image={logement.pictures[0]} />
                </section>
                <section className='infos'>
                    <div className='infos__header'>
                        <div className='infos__header__title'>
                            <h1>{logement.title}</h1>
                            <p>{logement.location}</p>
                        </div>
                        <div className='infos__header__host'>
                            <p>{logement.host.name}</p>
                            <div className='infos__header__host__picture'><img src={logement.host.picture} alt={logement.host.name} /></div>
                        </div>
                    </div>
                    <div className='infos__metadata'>
                        <div className='infos__metadata__tags'>
                            {logement.tags.map(t => <Tag tagName={t} key={t} />)}
                        </div>
                        <div className='infos__metadata__rating'>
                            {
                                ratings.map((r, id) => <Star className={r} key={id} />)
                            }
                        </div>
                    </div>
                    <div className='infos__detail'>
                        <Collapse title="Description" content={logement.description} />
                        <Collapse title="Équipements" content={logement.equipments.map((e, id) => e+"\n")}/>
                    </div>

                </section>
            </main>

    );
}

export default Logement;