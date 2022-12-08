import React from "react";
import "../../style/header.css";
import Logo from "../../assets/LOGO.png";
import NavBar from "./NavBar";
function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="logo" />
            <NavBar />
        </div>
    );
}

export default Header;
