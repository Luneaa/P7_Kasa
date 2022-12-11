import React from "react";
import './Thumb.scss';
import { Link } from "react-router-dom"; 

const Thumb = (props) => {
    return (
        <Link to={`/logement/${props.id}`}>
        <div className="thumb">
            <img src={props.cover} className="thumb__cover" />
            <div className="thumb__gradient" />
            <h2>{props.title}</h2>
        </div>
        </Link>
    );
};

export default Thumb;