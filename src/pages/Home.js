import React from "react";
import "../style/header.css";
import "../style/home.css";
import img from "../assets/IMG.png";
import "../components/Thumb";
import Gallery from "../components/Gallery";
import SectionOne from "../components/Section1";
function Home() {
    return (
        <div>
            <div className="contenant">
                <SectionOne
                    backgroundImg={img}
                    bannerText="Chez vous, partout et ailleurs"
                />
                <Gallery />
            </div>{" "}
        </div>
    );
}
export default Home;
