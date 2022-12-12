import React from "react";
import Footer from "../components/desktopComponents/Footer";
import Header from "../components/desktopComponents/Header";
import "../style/erreur.css";
function Erreur() {
    return (
        <div>
            <div className="contenant">
                <Header />
                <div className="main">
                    <div className="error">404</div>
                    <div className="text-1">
                        Oups! La page que vous demandez n'existe pas.
                    </div>
                    <a href="/" className="text-2">
                        Retourner sur la page d’accueil
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Erreur;
