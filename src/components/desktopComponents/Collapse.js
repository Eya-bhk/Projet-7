import React, { useState } from "react";
// import arrowUp from "../../assets/angle-up-solid.svg";
import "../../style/collapse.css";
function Collapse(props) {
    const [open, setOPen] = useState(false);
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
