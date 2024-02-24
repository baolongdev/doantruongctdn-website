import React from "react";
import NavMenuItem from "./nav-menu-item";

const NavMenu = ({ isMenuOpen, toggleMenu, tabItems }) => {
    return (
        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
            <ul className="nav__list">
                {tabItems.map((tab, index) => (
                    <NavMenuItem key={index} tab={tab} />
                ))}
            </ul>
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                <i className="ri-close-line"></i>
            </div>
        </div>
    );
};

export default NavMenu;
