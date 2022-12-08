import React from "react";
import Header from "../components/desktopComponents/Header";
import SectionOne from "../components/desktopComponents/Section1";
import Collapse from "../components/desktopComponents/Collapse";
import Footer from "../components/desktopComponents/Footer";
import img from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import "../style/about.css";
import styled from "styled-components";
function About() {
    /*utilisation des 'styled components' pour spécifier le style des collapses dans la page à propos */
    const Stylingcollapse = styled.div`
        width: 85%;
        .collapse {
            width: 56%;
            margin: auto;
        }
        .toggle {
            height: auto;
        }
    `;

    return (
        <div className="contenant">
            <Header />
            <SectionOne backgroundImg={img} />
            <div className="all-collapses">
                <Stylingcollapse>
                    <Collapse
                        title="Fiabilité"
                        text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                    />
                </Stylingcollapse>
                <Stylingcollapse>
                    <Collapse
                        className="center"
                        title="Respect"
                        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />{" "}
                </Stylingcollapse>
                <Stylingcollapse>
                    <Collapse
                        className="center"
                        title="Service"
                        text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                    />
                </Stylingcollapse>
                <Stylingcollapse>
                    <Collapse
                        className="center"
                        title="Sécurité"
                        text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </Stylingcollapse>
            </div>{" "}
            <Footer />
        </div>
    );
}

export default About;
