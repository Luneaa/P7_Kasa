import React, { useState } from "react";
import './Gallery.scss';
import prev from "../../assets/prev.svg";
import next from "../../assets/next.svg";


export const GalleryItem = ({ children }) => {
    return (
        <div className="gallery__item">
            {children}
        </div>
    );
};

const Gallery = ({ children }) => {
    
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        document.documentElement.style.setProperty('--active-index', newIndex);
        setActiveIndex(newIndex);
    };

    return (
        <div className="gallery">
            <div className="gallery__inner">
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child);
                })}
            </div>

            <div className="gallery__indicators">
                {
                    React.Children.count(children) !== 1 &&
                    <button onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}>
                        <img src={prev} alt="Fleche précédente" />
                    </button>
                }
                <div className="gallery__count">
                    {activeIndex + 1} / {React.Children.count(children)}
                </div>

                {
                    React.Children.count(children) !== 1 &&
                    <button onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}>
                        <img src={next} alt="Fleche suivante" />
                    </button>
                    }
            </div>
        </div>
    );
};

export default Gallery;