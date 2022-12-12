import React from "react";
import { NavLink } from "react-router-dom";
import "../style/nav-bar.css";
function NavBar() {
    return (
        <nav>
            <NavLink
                to="/"
                style={({ isActive }) =>
                    isActive
                        ? { textDecoration: "underline" }
                        : { textDecoration: "none" }
                }
            >
                accueil
            </NavLink>

            <NavLink
                to="/A-Propos"
                style={({ isActive }) =>
                    isActive
                        ? { textDecoration: "underline" }
                        : { textDecoration: "none" }
                }
            >
                {" "}
                à propos
            </NavLink>
        </nav>
    );
}

export default NavBar;
