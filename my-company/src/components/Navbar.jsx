import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <ul style= padding: '20px',backgroundColor: '#f9f9f9',
        padding:'20px',
        margin:'15px 0',
        borderRadius:'8px',
        boxShadow: '0 4px 8px rgba (0,0,0.1), display:'justifyContent'>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/home">Home</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
