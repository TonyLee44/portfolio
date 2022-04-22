import React from 'react';
import './Nav.scss';


export default function Nav() {
    return (
        <div>
            <div className="header-container">
                <h1 className="header-title">PORTFOLIO</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}