import React from 'react';
import "./Header.css";



export default function Header() {
    return (
        <div className="Header">
            <div className="TitleHeader">
                <h1>Josh's Sports Apparel</h1>
            </div>
            <div className="NavButtons">
                <button>Main Menu</button>
                <button>Favorites</button>
                <button>Sign out</button>
                <button>Sign in with Google</button>
            </div>
        </div>
    )
}