import React from "react";

import {Process} from "../../components";
import {images} from "../../constants";
import "./processes.css";

const Processes = ()=>{
    const data = [
        {imgUrl: images.request, title: "Make Request", body: "Contact our team with a service request."},
        {imgUrl: images.bookNPay, title: "Book & Pay", body: "Book our services and conclude payment."},
        {imgUrl: images.relax, title: "Relax", body: "Sit back and leave the rest to us."}
    ]

    return(
        <section className="processes">
            <div className="processes__header">
                <h2>Walk-through</h2>
            </div>
            <div className="processes__container">
                {data.map((el, index) => < Process imgUrl={el.imgUrl} title={el.title} body={el.body} key={index} />)}
            </div>
        </section>
    )
};

export default Processes;