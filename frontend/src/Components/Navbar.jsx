import React from 'react';
import { FaTelegramPlane, FaRegCompass, FaRegHeart } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_first">
                <div className="navbar_first-logo">
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="insta_logo" />
                </div>
            </div>
            <div className="navbar_middle">
                <div className="navbar_middle-search">
                    <input type="text" className="navbar_search" placeholder="search" />
                </div>
            </div>
            <div className="navbar_last">
                <li>
                    <MdHome className="navbar_icons" />
                </li>
                <li>
                    <FaTelegramPlane className="navbar_icons" />
                </li>
                <li>
                    <FaRegCompass className="navbar_icons" />
                </li>
                <li>
                    <FaRegHeart className="navbar_icons" />
                </li>
                <li>
                    Register/login
                </li>
            </div>
        
        </div>
    );
}

export default Navbar;
