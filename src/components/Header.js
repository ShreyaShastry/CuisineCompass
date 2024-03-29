import React from "react";
import {HashLink as Link} from "react-router-hash-link"
import { SearchBar } from "./SearchBar";
import './header.css';
//import companyLogo from './logo.jpg';

export default function Header(){
    return(
        <>
        <div className="header">
        
        <nav className="nav">
            
            <div className="logo">Cuisine Compass</div>
            {/* <div className="companyLogo"><img src={companyLogo} /></div> */}

            <ul>
                
                <li><Link to="#recipe">Recipe</Link></li>
                <li><Link to="#cuisine">Cuisine</Link></li>
                <li><Link to="#diet">Diet</Link></li>
                <SearchBar />
            </ul>
        </nav>
        </div>
        </>
    )
}