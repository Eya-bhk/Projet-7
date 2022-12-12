import React from "react";
import { useParams } from "react-router-dom";
import fullStar from "../assets/étoile-orange.ico";
import emptyStar from "../assets/étoile-gris.ico";
import Header from "../components/Header";
import Data from "../data/locations.json";
import PageErreur from "../pages/Erreur";
import Carroussel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import "../style/logementDetails.css";
function LogementDetails() {
    const { id } = useParams();
    /*chercher le logement à afficher*/
    const theOne = Data.find((locationData) => locationData.id === id);

    /*si logment non trouvé(id non valide)=> page d'erreur*/
    if (!theOne) {
        return <PageErreur />;
    }

    const rate = +theOne.rating;
    let fullStarsArray = [];
    let emptyStarsArray = [];
    for (let i = 0; i < rate; i++) {
        fullStarsArray.push(
            <img
                src={fullStar}
                alt="une étoile orange"
                key={i + 1}
                className="orange"
            ></img>
        );
    }
    for (let j = 0; j < 5 - rate; j++) {
        emptyStarsArray.push(
            <img
                src={emptyStar}
                alt="une étoile grise"
                key={j + 1}
                className="grey"
            ></img>
        );
    }
    const equipmentsArray = theOne.equipments;
    const tagsArray = theOne.tags;

    return (
        <div>
            {" "}
            <div className="contenant">
                <div className="ficheLogement">
                    <Header />
                    <div className="theBody">
                        <Carroussel pictures={theOne.pictures} />
                        <div className="informations">
                            <div className="location-host">
                                <div className="title-location-tags">
                                    <div className="the-title">
                                        {theOne.title}
                                    </div>
                                    <div className="location">
                                        {theOne.location}
                                    </div>
                                    <ul className="tags">
                                        {tagsArray.map((tag) => (
                                            <li className="tag" key={tag}>
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="rate-host">
                                    <div className="rate">
                                        {fullStarsArray} {emptyStarsArray}
                                    </div>
                                    <div className="host">
                                        <span className="host-name">
                                            {theOne.host.name}
                                        </span>
                                        <img
                                            src={theOne.host.picture}
                                            alt="l'hôte"
                                            className="host-img"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                            <div className="collapses">
                                <Collapse
                                    className="collapse"
                                    title="Description"
                                    text={theOne.description}
                                />
                                <Collapse
                                    className="collapse"
                                    title="Equipements"
                                    text={equipmentsArray.map((equipement) => (
                                        <li
                                            className="equipement"
                                            key={equipement}
                                        >
                                            {equipement}
                                        </li>
                                    ))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LogementDetails;
