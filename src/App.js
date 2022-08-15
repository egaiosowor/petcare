import React from "react";

import {Navbar, Searchbar} from "./components";
import {Hero, About, Services, Processes, Testimonials, Contact, Footer} from "./container";
import "./App.css";

const App = ()=>{
    return(
        <>
           < Navbar />
           < Hero />
           < Searchbar />
           < About />
           < Services />
           < Processes />
           < Testimonials />
           < Contact />
           < Footer />
        </>
    )
};

export default App;