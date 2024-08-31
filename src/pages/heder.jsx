import React from 'react';
import icon from "../assets/Troll Face.png"
import "../index.css";

export default function Header(){
    return (
        <div className="header">
            <div className="header--content">
                <img src={icon} alt="trole face"/>
                <h1>Meme Generator</h1>
            </div>
        </div>
    )
}