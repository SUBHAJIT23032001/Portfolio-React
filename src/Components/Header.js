import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

function Header()
{
    return (
        <header className="Header">
            
            <nav className="navmenu">
                <h3>SP's Portfolio</h3>
                <Link class= "animation" to="/" >Home</Link>
                <Link class= "animation" to="/About" >About</Link>
                <Link class= "animation" to="/Education" >Education</Link>
                <Link class= "animation" to="/Skills" >Skills/Projects</Link>
                <Link class= "animation" to="/Certificate" >Certificates</Link>
                <Link class= "animation" to="/Contact" >Contact</Link>
            </nav>
        </header>
    )


}
export default Header;
