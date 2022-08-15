import React from "react";

import {images} from "../../constants";
import "./contact.css";

const Contact = ()=>{
    return(
        <section id="contact" className="contact">
            <div className="contact__text">
                <h2>Let's talk</h2>
                <p>To request a quote or schedule a meeting, contact us directly and we will get back to you promptly.</p>
                <button className="btn">Contact us</button>
            </div>
            <div className="contact__img">
                <img src={images.contactImg} alt="Smiling woman with dog" />
            </div>
        </section>
    )
};

export default Contact;
