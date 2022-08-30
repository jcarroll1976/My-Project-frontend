import React from 'react';
import "./Header.css";



export default function Header() {
    return (
        <div className="Header">
            <div className="TitleHeader">
                <h1>Josh's Campus Apparel</h1>
            </div>
            <div className="NavButtons">
                <span className="link">HOME</span>
                <span className="link">BLOG</span>
                <span className="link">WISHLIST</span>
                <span className="link">ORDER STATUS</span>
                <span className="link">CONTACT US</span>
                <span className="link">Sign out</span>
                <span className="link">Sign in with Google</span>
            </div>
        </div>
    )
}