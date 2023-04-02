import { PromiseProvider } from "mongoose";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Navigate } from "react-router-dom";
function NavBarLogin() {

    const [click, setClick] = useState(false);
    const handleLogout = () => {
        sessionStorage.removeItem("user");
    }
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">

            </nav>
        </>
    );

}

export default NavBarLogin;