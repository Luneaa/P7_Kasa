import './logement.scss';
import { Navigate, useParams } from "react-router-dom";
import star from '../../assets/star.svg';
import starActive from '../../assets/star-active.svg';

import data from '../../logements.json'
import Gallery, { GalleryItem } from '../../components/Gallery/Gallery';
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
        ratings.push(i <= logement.rating ? starActive : star);
    }
    return (

            <main>
                <section className='logement__gallery'>
                    <Gallery>
                        {logement.pictures.map((p, id) => <GalleryItem key={id}><img src={p} alt="Photographie du logement" /></GalleryItem>)}
                    </Gallery>
                </section>
                <section className='infos'>
                <div className='infos__wrap'>
                    <div className='infos__header'>
                        <div className='infos__header__title'>
                            <h1>{logement.title}</h1>
                            <p>{logement.location}</p>
                        </div>
                        <div className='infos__header__tags'>
                            {logement.tags.map(t => <Tag tagName={t} key={t} />)}
                        </div>
                    </div>
                    <div className='infos__metadata'>
                        
                        <div className='infos__metadata__host'>
                            <p>{logement.host.name}</p>
                            <div className='infos__metadata__host__picture'><img src={logement.host.picture} alt={logement.host.name} /></div>
                        </div>
                        <div className='infos__metadata__rating'>
                            {
                                ratings.map((r, id) => <img src={r} alt="Star icon" key={id} />)
                            }
                        </div>
                        </div>
                    </div>
                    <div className='infos__detail'>
                    <div className='infos__detail__description'>
                    <Collapse title="Description" content={logement.description} />
                    </div>
                    <div className='infos__detail__equipement'>
                    <Collapse title="Équipements" content={logement.equipments.map((e, id) => e+"\n")} />
                    </div>


                    </div>

                </section>
            </main>

    );
}

export default Logement;