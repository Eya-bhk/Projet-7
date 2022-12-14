import React from "react";
import "../style/home.css";
import "../style/gallery.css";

function Thumb(props) {
    return (
        <div className="thumb">
            <a href={`/logement/${props.id}`} key={props.id}>
                <div className="rectangle-2">
                    <img alt="" src={props.cover}></img>
                    <div className="titre-de-la-location">
                        <h2>{props.title}</h2>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Thumb;
