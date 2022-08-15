import React from "react";

import "./footer.css";

const Footer =()=>{
    return(
        <footer className="footer">
            <ul className="footer__contact-list">
                <li><h4>Our contact</h4></li>
                <li><p>(802) 342-3895</p></li>
                <li><p>1 Scale Ave, Rutland, VT 05701</p></li>
            </ul>
            <div className="footer__cta">
                <h4>Sign up for Vet-Approved Health Tips, Giveaways and More</h4>
                <form className="footer__cta-form">
                    <input type="text" placeholder="Enter email address" />
                    <button className="btn">SUBSCRIBE</button>
                </form>
                <p>By signing up you agree to our Terms of use</p>
            </div>
        </footer>
    )
};

export default Footer;