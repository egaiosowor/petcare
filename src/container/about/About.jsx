import React from "react";

import {images} from "../../constants";
import "./about.css";

const About = ()=>{
    return(
        <section id="about" className="about">
            <div className="about__text">
                <h2>About Us</h2>
                <p>An animal lover at heart, Erynn is a Vermont native that brings years of animal care experience to the area. From veterinary settings to training, boarding, daycare, grooming and retail she knows how to handle everything there is for your pup! She has worked with a large variety of breeds throughout her professional career exploring many different avenues allowing her to meet dogs and owners from all different walks of life while building solid relationships with the community.</p>
                <div>
                    <ul>
                        <li>Certified Groomers</li>
                        <li>Animal Lover</li>
                        <li>10+ Years Experience</li>
                        <li>Pet Care Certified</li>
                    </ul>
                </div>
                <a href="" className="btn">See more</a>
            </div>
            <div className="about__image">
                <img src={images.aboutImg} alt="" />
            </div>
        </section>
    )
};

export default About;