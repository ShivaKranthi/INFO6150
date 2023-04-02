import { PromiseProvider } from "mongoose";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Navigate } from "react-router-dom";
function NavBar(props) {

    const [click, setClick] = useState(false);
    const handleLogout = () => {
        sessionStorage.removeItem("user");
    }
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/home"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/jobs"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Jobs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>

                        <li className="nav-item">

                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleLogout}
                            >
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );

}

export default NavBar;