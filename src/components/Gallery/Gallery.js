import React, { useState } from "react";
import './Gallery.scss';
import { ReactComponent as Prev } from "./prev.svg";
import { ReactComponent as Next } from "./next.svg";


export const GalleryItem = ({ children, width }) => {
    return (
        <div className="gallery__item" style={{ width: width }}>
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

        setActiveIndex(newIndex);
    };

    return (
        <div className="gallery">
            <div className="gallery__inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>

            <div className="gallery__indicators">
                {
                    React.Children.count(children) != 1 &&
                    <button onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}>
                        <Prev />
                    </button>
                }
                <div className="gallery__count">
                    {activeIndex + 1} / {React.Children.count(children)}
                </div>

                {
                    React.Children.count(children) != 1 &&
                    <button onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}>
                        <Next />
                    </button>
                    }
            </div>
        </div>
    );
};

export default Gallery;