import React from "react";
import "../style/header.css";
import "../style/home.css";
import img from "../assets/IMG.png";
import "../components/Thumb";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import SectionOne from "../components/Section1";
import Footer from "../components/Footer";
function Home() {
    return (
        <div>
            <div className="contenant">
                <Header />
                <SectionOne
                    backgroundImg={img}
                    bannerText="Chez vous, partout et ailleurs"
                />
                <Gallery />
            </div>{" "}
            <Footer />
        </div>
    );
}
export default Home;
