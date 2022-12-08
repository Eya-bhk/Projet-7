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
    const a = 11;
    return (
        <div className="contenant">
            <Header />
            <SectionOne
                backgroundImg={img}
                bannerText="Chez vous, partout et ailleurs"
                bannerHeight={a}
            />
            <Gallery />
            <Footer />
        </div>
    );
}
export default Home;
