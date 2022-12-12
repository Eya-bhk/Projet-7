import React from "react";
import "../style/header.css";
import "../style/home.css";
import img from "../assets/IMG.png";
import "../components/desktopComponents/Thumb";
import Gallery from "../components/desktopComponents/Gallery";
import Header from "../components/desktopComponents/Header";
import SectionOne from "../components/desktopComponents/Section1";
import Footer from "../components/desktopComponents/Footer";
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
