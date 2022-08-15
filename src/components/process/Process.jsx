import React from "react";

import "./process.css";

const Process = ({imgUrl, title, body})=>{
    return(
        <div className="process">
            <img src={imgUrl} alt="" />
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    )
};


export default Process;