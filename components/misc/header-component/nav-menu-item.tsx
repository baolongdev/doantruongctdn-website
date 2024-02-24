import React from "react";

const NavMenuItem = ({ tab }) => {
    return (
        <li className="nav__item">
            <a
                href={`${tab.href}`}
                className={`nav__link ${tab.class}`}
            >
                {tab.title}
            </a>
        </li>
    );
};

export default NavMenuItem;
