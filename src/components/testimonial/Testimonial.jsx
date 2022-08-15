import  React from "react";

import "./testimonial.css";

const Testimonial = ({profilePhoto, name, location, body, rating})=>{
    return(
        <article className="testimonial">
            <div className="testimonial__profile">
                <div className="testimonial__profile-img">
                    <img src={profilePhoto} alt="Profile photo" />
                </div>
                <div className="testimonial__profile-info">
                    <h4>{name}</h4>
                    <p>{location}</p>
                </div>
            </div>
            <p className="testimonial__quote">{body}</p>
            <div className="testimonial__rating">
                <img src={rating} alt="rating" />
            </div>
        </article>
    )
};

export default Testimonial;