import React, {useState} from "react";
import {Link} from "react-scroll";
import {images} from "../../constants";
import "./navbar.css";

const Navbar = ()=>{
    const [navFixed, setNavFixed] = useState(false);
    const [burgerClass, setBurgerClass] = useState("hamburger");
    const [overlayClass, setOverlayClass] = useState("overlay");
    const [menuClass, setMenuClass] = useState("navbar__mobile-menu hidden");
    const [toggleMenu, setToggleMenu] = useState(false);


    // set navbar divider on scroll
    setInterval(()=>{window.addEventListener("scroll", ()=>{
        if(window.pageYOffset >0){
            setNavFixed(true)
        }else{
            setNavFixed(false)
        }
    })
    }, 1000)

    //update menu on mobile scroll-to is activated
    setInterval(()=>{window.addEventListener("scroll", ()=>{
        if(window.pageYOffset >0 && toggleMenu){
            updateMenu()
        }
    })
    }, 1000)


    
    // toggle burger menu change
    const updateMenu = () => {
        if(!toggleMenu) {
            setBurgerClass("hamburger clicked");
            setOverlayClass("overlay scale-up");
            setMenuClass("navbar__mobile-menu");
            document.body.style.overflow = "hidden";
        }
        else {
            setBurgerClass("hamburger");
            setOverlayClass("overlay scale-down");
            setMenuClass("navbar__mobile-menu hidden");
            document.body.style.overflow = "visible";
        }
        setToggleMenu(!toggleMenu)  
    }


    return(
        <nav className={navFixed?"navbar fixed":"navbar"}>
             <a href="" className="navbar__logo">
                <img src={images.logo} alt="Logo" />
            </a>
            <ul className= "navbar__links">
                <li><Link to="home" smooth={true} duration={200}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={200} offset={-20}>About</Link></li>
                <li><Link to="services" smooth={true} duration={200} offset={-100}>Services</Link></li>
                <li><Link to="reviews" smooth={true} duration={200} offset={-100}>Reviews</Link></li>
                <li><Link to="contact" smooth={true} duration={200} offset={-200}>Contact</Link></li>
                <li><a href="" className="btn btn--outline">Request Services</a></li>
            </ul>          
            
            <button className={burgerClass} onClick={updateMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={overlayClass}></div>
            <ul className={menuClass}>
                <li><Link to="home" smooth={true} duration={200} offset={-70}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={200}>About</Link></li>
                <li><Link to="services" smooth={true} duration={200}>Services</Link></li>
                <li><Link to="reviews" smooth={true} duration={200}>Reviews</Link></li>
                <li><Link to="contact" smooth={true} duration={200}>Contact</Link></li>
                <li><a href="">Request Services</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;


