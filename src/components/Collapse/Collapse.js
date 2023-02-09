import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";
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
                <img src={arrow} alt="Arrow icon" className={`collapse__title__arrow ${open ? "collapse__title__arrow--open" : "collapse__title__arrow--close"}`}/>
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