import React from "react";
import './Tag.scss';

const Tag = (props) => {
    return (
        <div className="tag">
            <p>{props.tagName}</p>
        </div>
    );
};

export default Tag;