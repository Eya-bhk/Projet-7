import React from "react";
import "../../style/gallery.css";
import Thumb from "./Thumb";
import "../../style/gallery.css";
import data from "../../data/locations.json";
function Gallery() {
    const locations = data.map((member) => (
        <Thumb
            id={member.id}
            key={member.id}
            title={member.title}
            cover={member.cover}
        />
    ));

    return <div className="gallery background">{locations}</div>;
}

export default Gallery;
