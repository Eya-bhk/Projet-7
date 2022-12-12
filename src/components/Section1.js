import React from "react";
import "../style/section1.css";

function SectionOne(props) {
    return (
        <div className="banner">
            <img src={props.backgroundImg} alt="bannière" />
            <span className="banner-text">{props.bannerText}</span>
        </div>
    );
}

export default SectionOne;
