import  React from "react";

import "./searchbar.css";

const Searchbar = ()=>{
    return(
        <section className="searchbar">
            <form className="searchbar__form">
                <label htmlFor="service">I'm looking for</label>
                <input type="text" name="service" placeholder="Select Service"/>
            </form>
            <form className="searchbar__form">
                <label htmlFor="location">Near</label>
                <input type="text" name="location" placeholder="Select your location"/>
            </form>
            <button className="btn">Search</button>
        </section>
    )
};

export default Searchbar;