import React from "react";

import "./service.css"

const Service = ({title, body})=>{
    return(
        <div className="service">
            <h4>{title}</h4>
            <p>{body}</p>
            <a href="" className="btn">Learn more</a>
        </div>
    )
};

export default Service;