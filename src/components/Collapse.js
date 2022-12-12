import React, { useState } from "react";
import "../style/collapse.css";
import vector from "../assets/Vector.svg";
function Collapse(props) {
    /*initialize the State Hook that 
 renders a counter. When you click the button, it increments the value: */
    const [open, setOPen] = useState(false);
    /*initialise the function that will inverse the current state*/
    const toggle = () => {
        setOPen(!open);
    };
    return (
        <div className=" collapse">
            <div className="theTitle title">
                <span className="titleText">{props.title}</span>
                <span className="button" onClick={toggle}>
                    <img
                        src={vector}
                        alt="bouton pour ouvrir et fermer"
                        className={!open ? "arrowDown" : "arrowUp"}
                    ></img>
                </span>
            </div>
            {open && (
                <div
                    className="toggle theToggle"
                    style={{
                        width: props.collapsewidth,
                        height: props.collapseHeight,
                    }}
                >
                    {props.text}
                </div>
            )}
        </div>
    );
}

export default Collapse;
