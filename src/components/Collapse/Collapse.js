import React, { useState } from "react";
import { ReactComponent as Arrow } from "./arrow.svg";
import './Collapse.scss';

const Collapse = (props) => {
    const [open, setOpen] = useState(false);
    const toogle = () => {
        setOpen(!open);
    };
    return (
        <div className="collapse">
            <button className="collapse__title" onClick={toogle}>
                <h3>{props.title}</h3>
                <Arrow className="collapse__title__arrow"/>
            </button>
                <div className={`collapse__content ${open ? "collapse__content--open" : "collapse__content--close"}`}>
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default Collapse;