import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header({ cartItems }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar row">
            <div className="col-12 col-md-3 navLogo">
                <div className="navbar-brand">
                    <Link to="/">
                        <img src="/images/logo.jpg" alt="logo" />
                        <p>Codes-Cart</p>
                    </Link>
                </div>
            </div>
            <div className="col-12 col-md-6 mt-2 mt-md-0 navSearch">
                <Search />
            </div>
            <div className="col-12 col-md-1 mt-4 mt-md-0 text-center navCart">
                <Link to={"/cart"}>
                    <i id="cartIcon" className="fa fa-shopping-cart"></i>
                    <span className="ml-1" id="cart_count">{cartItems.length}</span>
                </Link>
            </div>
            <div className="col-12 col-md-1 mt-4 mt-md-0 text-center navLogin">
                <Link to={"/login"} onClick={closeMenu}>
                    <button className="loginBtn"><i className="fa fa-sign-in"></i> Login</button>
                </Link>
            </div>
            <div className="col-12 col-md-1 mt-4 mt-md-0 text-center navRegister">
                <Link to={"/register"} onClick={closeMenu}>
                    <button className="registerBtn"><i className="fa fa-user-plus"></i> Signup</button>
                </Link>
            </div>
            <div className="col-12 col-md navMenu">
                <div className="menuIcon">
                    {menuOpen ? (
                        <i id="menuIcon" className="fa fa-times" onClick={toggleMenu}></i>
                    ) : (
                        <i id="menuIcon" className="fa fa-bars" onClick={toggleMenu}></i>
                    )}
                </div>
                <div className={`menuItems ${menuOpen ? 'open' : ''}`}>
                    <Link to="/login" onClick={closeMenu}><i className="fa fa-sign-in"></i> Login</Link>
                    <Link to="/register" onClick={closeMenu}><i className="fa fa-user-plus"></i> Signup</Link>
                    <Link to="/cart" onClick={closeMenu}><i className="fa fa-shopping-cart"></i> Cart</Link>
                </div>
            </div>
        </nav>
    );
}
