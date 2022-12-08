import React from "react";
import "../../style/footer.css";
import LOGO from "../../assets/LOGO2.png";

function Footer() {
    return (
        <div className="footer">
            <img src={LOGO} alt="" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;
