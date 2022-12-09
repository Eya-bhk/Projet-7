import React, { useState } from "react";
import "../../style/collapse.css";
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
                <button
                    onClick={toggle}
                    className={!open ? "arrowDown" : "arrowUp"}
                >
                    <i className="fa-solid fa-chevron-up"></i>
                </button>
            </div>
            {open && <div className="toggle theToggle">{props.text}</div>}
        </div>
    );
}

export default Collapse;
