import React from "react";

import {images} from "../../constants";
import {Testimonial} from "../../components";
import "./testimonials.css";

const Testimonials = ()=>{
    const data = [
        {profilePhoto: images.leighton, name:"Leighton Thayer", location:"San Diego", body:"“Erynn and her team are great! We have been bringing our pups to her for over 5 years.“", rating:images.rating},
        {profilePhoto: images.john, name:"John Kennedy", location:"Houston", body:"“I only trust my dogs to Erynn and her team. I have been using their services for over a year now.“", rating:images.rating},
        {profilePhoto: images.steve, name:"Steve Edwards", location:"Long Beach", body:"“I travel a lot and always have dificulties finding pet boarding services. Erynn solved that for me.“", rating:images.rating},
    ]

    return(
        <section id="reviews" className="testimonials">
            <div className="testimonials__header">
                <h2>What Our Clients Say About Petcare</h2>
            </div>
            <div className="testimonials__container">
                {data.map((el, index)=> < Testimonial profilePhoto={el.profilePhoto} name={el.name} location={el.location} body={el.body} rating={el.rating} key={index}/>)}
            </div>
        </section>
    )
};

export default Testimonials;