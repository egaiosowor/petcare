import React from "react";

import {images} from "../../constants";
import "./hero.css";

const Hero = ()=>{
    return(
        <section id="home" className="hero">
            <div className="hero__text">
                <h1>We’re Here to Care For Your Little Friends</h1>
                <p>We offer professional pet care services, from grooming to medicals.</p>
            </div>
            <div className="hero__img">
                <img src={images.heroImg} alt="Hero image" />
            </div>
        </section>
    )
};

export default Hero;