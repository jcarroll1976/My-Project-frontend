import React from 'react';
import "./Header.css";



export default function Header() {
    return (
        <div className="Header">
            <div className="TitleHeader">
                <h1>Josh's Sports Apparel</h1>
            </div>
            <div className="NavButtons">
                <span>HOME</span>
                <span>BLOG</span>
                <span>WISHLIST</span>
                <span>ORDER STATUS</span>
                <span>CONTACT US</span>
                <span>Sign out</span>
                <span>Sign in with Google</span>
            </div>
        </div>
    )
}