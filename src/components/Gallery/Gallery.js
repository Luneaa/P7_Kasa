import React from "react";
import './Gallery.scss';

const Gallery = (props) => {
    return (
        <div className="gallery">
           <img src={props.image} />
        </div>
    )
}

export default Gallery;