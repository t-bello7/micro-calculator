import React,  { useState } from "react";
import { v4 as uuidv4} from 'uuid';
import { Link } from 'react-router-dom';

const links = [
    {
        id: uuidv4(),
        path: "/",
        text: "Home"        
    },
    {
        id: uuidv4(),
        path: "/calculator",
        text: "Calculator"
    },
    {
        id: uuidv4(),
        path: "/Quote",
        text: "Quote"
    }
]

const Navbar = () =>{
    const[navBarOpen, setNavBarOpen] = useState(false)
    const handleToggle = () => {
        setNavBarOpen(prev => !prev);
    }
    const closeMenu = () => {
        setNavBarOpen(false)
    }
    return (
        <nav className="navbar flex">
            <h2>Math Magicians</h2>
            <button onClick={handleToggle} className>{navBarOpen ? "close": "open"}</button>
            <ul className={`navbar__list flex ${ navBarOpen ? ""  : "hide"}`}>
                {
                    links.map(link => <li key={link.id}><Link to={link.path} onClick={()=>closeMenu()}> {link.text} </Link> |</li> )
                }
            </ul>
        </nav>
    )
}

export default Navbar;