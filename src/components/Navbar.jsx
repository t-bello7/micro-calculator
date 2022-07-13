import React from "react";
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
    return (
        <nav>
            <h2>Math Magicians</h2>
            <ul>
                {
                    links.map(link => <li key={link.id}><Link to={link.path}> {link.text} </Link></li>)
                }
            </ul>
        </nav>
    )
}

export default Navbar;