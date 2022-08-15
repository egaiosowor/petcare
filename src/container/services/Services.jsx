import React from "react";

import {Service} from "../../components";
import "./services.css";

const Services = ()=>{
    const data = [
        {title:"Pet Boarding", body:"A world class boarding facility for our client's who are either travelling and need shelter for their dogs."},
        {title:"Dog Walking", body:"Regular walks to improve cardiovascular fitness, lower blood pressure and decrease stress."},
        {title:"Pet Grooming", body:"Pet shampooing, tick eradication, fur grooming, detangling, cutting and nail clipping."},
        {title:"Kennel Setup", body:"Construction of dog kernels to meet your specific needs and space available."},
        {title:"Pet Training", body:"Skillful pet trainers and training sessions tailored to suite you and your pet’s needs."},
        {title:"Pet Medicals", body:"Experienced Veterinary doctors to ensure your pet's health is at its optimum."},
    ]
    return(
        <section id="services" className="services">
            <div className="services__header">
                <h2>Our Pet Care Services</h2>
            </div>
            <div className="services__container">
                {data.map((el, index)=>< Service title={el.title} body={el.body} key={index} />)}    
            </div>
        </section>
    )
};

export default Services;