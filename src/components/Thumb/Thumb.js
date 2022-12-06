import React from "react";
import './Thumb.scss';

const Thumb = (props) => {
    return (

        <div className="thumb">
            <div className="thumb__gradient" />
            <h2>{props.title}</h2>
        </div>
    );
};

export default Thumb;