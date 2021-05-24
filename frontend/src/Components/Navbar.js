import React, {useContext} from 'react';
import { FaTelegramPlane, FaRegCompass, FaRegHeart } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {ContextProvider} from '../Global/Context'

const Navbar = () => {
    const {model, openModel, user, loader, logout} = useContext(ContextProvider)
    console.log("my model", model)
    const openForms = () => {
        openModel();
    }

    const userLogout = () => {
        logout();
    };

    const checkUser = () => {
        return !loader ? (
            !loader && user ? (
                <li>
                {user.displayName}/ <span onClick={userLogout}>logout</span>{" "}
                </li>
            ) : (
                <li onClick={openForms}>Register/Login</li>
            )
        ) : (
            "..."
        );
    };
    
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
                    <Link to="/explore" ><FaRegCompass className="navbar_icons" /></Link>
                </li>
                <li>
                    <FaRegHeart className="navbar_icons" />
                </li>
                {checkUser()}
            </div>
        </div>
    );
}

export default Navbar;
