import React from "react";
// import img from "../../assets/IMG.png";
import "../../style/section1.css";

function SectionOne(props) {
    return (
        <div className="banner" style={{ height: `${props.bannerHeight}vh` }}>
            <img src={props.backgroundImg} alt="bannière" />
            <span className="banner-text">{props.bannerText}</span>
        </div>
    );
}

export default SectionOne;
